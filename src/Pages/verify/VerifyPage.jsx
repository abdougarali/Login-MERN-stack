import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {verfyEmail} from '../../js/Actions/authAction'
import SignUpLogin from '../../Component/SignUp-Login/SignUpLogin'
const VerifyPage = () => {
    // const verifEmail=useSelector((state)=>state.authReducer.emailLoading)
    // console.log("verifEmail",verifEmail)
    const {token}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(verfyEmail(token))

    },[])

  return (
    <div>email valid <Link to='/'>Sign In</Link></div>
  )
}

export default VerifyPage