import React, { useEffect, useState } from 'react'
import './SignUpLogin.css'
import { useDispatch,useSelector } from 'react-redux';
import {userSignUp,userLogin,forgotPassword} from '../../js/Actions/authAction'
import LockSharpIcon from '@mui/icons-material/LockSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Routes,Route, useNavigate, useNavigation } from 'react-router-dom';
import Reset from '../../Pages/Reset/Reset';

const SignUpLogin = () => {

    const dispatch=useDispatch()
    // const Navigate=useNavigation()
    // useEffect(()=>{
    // dispatch(getAuthuser())
    // },[])


const [action,setaction]=useState('sign Up')

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

// const dispatch=useDispatch()
// const Navigate=useNavigate()
// const loading=useSelector((state)=>state.authReducer.loading)
// console.log('user',loading)
const Navigate=useNavigate()

 
//     useEffect(()=>{
//          {loading?Navigate('/'):<></>}              
// },[])

const handilSignup=()=>{
    const newUser={name,email,password}
    dispatch(userSignUp(newUser))
    setName('')
    setEmail('')
    setPassword('')
    // Navigate('/home');
}

const handilLogin=()=>{
    const loger={email,password}
    dispatch(userLogin(loger))
    setEmail('')
    setPassword('')
    // Navigate('/home');
}

// const resetLink=useSelector((state)=>state.authReducer.resetLink)
// // console.log('resetLink',resetLink)
const resetToken=useSelector((state)=>state.authReducer.resetToken)
// console.log('resetToken',resetToken)



const forgotPass=()=>{
    const formData={email}
    dispatch(forgotPassword(formData))
    setEmail('')
    //  Navigate(`/reset-password/${resetToken}`)  
    // console.log('resetLink',resetLink)
    
}



// console.log('Name :',password)
  return (
    <div className='signLogin_page'>
{/* {verifEmail?  window.location.reload():'loading...'} */}
        {/* <Routes>
           <Route path={resetLink} element={<Reset token={resetToken}/>}/>

        </Routes> */}
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

               {action==='sign Up'? <div className="input">
                   
                    <PersonSharpIcon className='icon'/>
                    <input type="text" placeholder='Name...' value={name} onChange={(e)=>setName(e.target.value)} />
                   </div>:<></>}
                   
                <div className="input">
                    
                     <EmailSharpIcon className='icon'/>
                    <input type="text" placeholder='Email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className="input">
                    
                    <LockSharpIcon className='icon'/>
                    <input type="password" placeholder='password...' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            
            {action==='Login'?<div className="forgot-password">Lost password <span onClick={forgotPass}>click password</span></div>:<></>}
            {/* <div className="forgot-password">Lost password <span>click password</span></div> */}
            <div className="submit-container">
                <div className={action==='Login'?"submit gray":'submit'} onClick={action==='Login'?()=>{setaction('sign Up')}:handilSignup}>Sign Up</div>
                <div className={action==='sign Up'?"submit gray":'submit'} onClick={action==='sign Up'?()=>{setaction('Login')}:handilLogin} >Login</div>
                {/* <div className="submit" onClick={handilSignup}>SignUp</div> */}
            </div>
        </div>
    </div>
  )
}

export default SignUpLogin