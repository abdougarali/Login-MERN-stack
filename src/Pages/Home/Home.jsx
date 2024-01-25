import React,{useEffect} from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import {userLogout,getAuthuser} from '../../js/Actions/authAction'
const Home = () => {
const dispatch=useDispatch()
const user=useSelector((state)=>state.authReducer.user)
const loading=useSelector((state)=>state.authReducer.loading)
const handilLogOut=()=>{
  dispatch(userLogout())
}

// const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAuthuser())
},[])

const Auth=useSelector((state)=>state.authReducer.isAuth)
console.log('Auth',Auth)
  return (
    <div className='home_page'>
      {loading?(<h2>Loading...</h2>):<>
      
      <div className="logout" onClick={handilLogOut}>LogOut</div>
       <h3>bonjour {user.name}</h3> 

      </>}
      
       

    </div>
  )
}

export default Home