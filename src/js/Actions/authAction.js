import {
    USER_LOADING,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGOUT,
    GET_AUTH_USER,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
    VERIFY_EMAIL,
    // LOADING_EMAIL
    
} from '../Constants/constant'
import axios from 'axios'
import {toast} from 'react-toastify'


const success =(msg)=>{
    toast.success(msg, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}


const errorToast=(msg)=>{
    toast.error(msg,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
}

export const userSignUp=(form)=>async(dispatch)=>{
    dispatch(userLoading())
    try {
       const result=await axios.post('/Api/Auth/SignUp',form)
    //    console.log('result',result)
        dispatch({type:USER_REGISTER,payload:result.data})
        if(result.data.msg){
            success(result.data.msg)
        }
    } catch (error) {
        console.log(error)
        const errors=error.response.data.errors
  if(Array.isArray(errors)){
    errors.forEach((err)=>errorToast(err.msg))
  }
  else{
    if (error.response.data.msg){
        errorToast(error.response.data.msg)
    }

  }

    }
}

export const verfyEmail=(token)=>async(dispatch)=>{
    // dispatch(userLoading())
    try {
        await axios.post(`/Api/Auth/verify-Email/${token}`)
        dispatch({type:VERIFY_EMAIL})
    } catch (error) {
        console.log(error)
    }
}


export const userLogin=(form)=>async(dispatch)=>{
    dispatch(userLoading())
    try {
       const result=await axios.post('/Api/Auth/Login',form)
       console.log('result',result.data)
        dispatch({type:USER_LOGIN,payload:result.data})
        if(result.data.msg){
            success(result.data.msg)
        }
    } catch (error) {
        console.log(error)
        const errors=error.response.data.errors
        if(Array.isArray(errors)){
            errors.forEach((err)=>errorToast(err.msg))
        }else{
            if(error.response.data.msg){
                errorToast(error.response.data.msg)
            }
        }
    }
}

export const getAuthuser=()=>async(dispatch)=>{
    dispatch(userLoading())
    try {
     const config={
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }
const result=await axios.get('/Api/Auth/',config)
console.log('result',result)
dispatch({type:GET_AUTH_USER,payload:result.data})
    } catch (error) {
        console.log(error)
    }
}


export const forgotPassword=(formData)=>async(dispatch)=>{
    try {
      const result= await axios.post('/Api/Auth/F-password',formData)
    console.log('result',result)
        dispatch({type:FORGOT_PASSWORD,payload:result.data})
    } catch (error) {
        console.log(error)
    }
}


export const resetPassword=(token,formData)=>async(dispatch)=>{
    try {
  await axios.post(`/Api/Auth/reset-password/${token}`,{newPassword:formData})
//   console.log('result',result)
           dispatch({type:RESET_PASSWORD})
    } catch (error) {
        console.log(error)
    }
}


export const userLogout=()=>(dispatch)=>{
dispatch({type:USER_LOGOUT})
}

export const userLoading=()=>(dispatch)=>{
dispatch({type:USER_LOADING})
}

// export const loadingEmail=()=>(dispatch)=>{
//     dispatch({type:LOADING_EMAIL})
// }