import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getAuthuser} from '../js/Actions/authAction'
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {

  // const dispatch=useDispatch()
  // useEffect(()=>{
  // dispatch(getAuthuser())
  // },[])

    const isAuth=useSelector((state)=>state.authReducer.isAuth)
    // console.log('isAuth',isAuth)
  return (

    <div>
     {isAuth ? children : <Navigate to="/"/>}

    </div>
  )
}

export default PrivateRoute