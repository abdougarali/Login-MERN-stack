import React, { useState } from 'react'
import './Reset.css'
import { useDispatch } from 'react-redux'
import {resetPassword} from '../../js/Actions/authAction'
import LockSharpIcon from '@mui/icons-material/LockSharp';
import { useParams } from 'react-router-dom';
const Reset = () => {
const [newPassword,setNewpass]=useState('')

const {resetToken}=useParams()
// console.log('resetToken',resetToken)
// console.log('newPass')
const dispatch=useDispatch()


 const resetPass=()=>{
      //  const newPassword={newPassword}
      //  console.log('Pass',newPassword)
    dispatch(resetPassword(resetToken,newPassword))
    setNewpass('')
 }




  return (
    <div className='reset-page'>

      <div className="containerr">
        <div className="header">
          <div className="text">New Password</div>
          <div className="underline"></div>
        </div>
              <div className='input'>
                    <LockSharpIcon className='icon'/>
                    <input className='input' type="password" placeholder='password...' value={newPassword} onChange={(e)=>setNewpass(e.target.value)}/>
                </div>
                <div className="submit" onClick={resetPass}>Change</div>
      </div>

    </div>
  )
}

export default Reset