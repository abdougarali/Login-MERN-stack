import {
    USER_LOADING,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGOUT,
    GET_AUTH_USER,
    FORGOT_PASSWORD,
    VERIFY_EMAIL
} from '../Constants/constant'

const initialstate={
    token:localStorage.getItem('token'),
    user:null,
    loading:false,
    isAuth:false,
    resetLink:null,
    resetToken:null, 
    emailLoading:false
}


const authReducer=(state=initialstate,{type,payload})=>{
    switch (type) {

        case USER_LOADING:
           return{...state,loading:true}  

        case USER_LOGIN:
        case USER_REGISTER:
            localStorage.setItem('token',payload.token)    
           return {...state,loading:false,isAuth:true,...payload} 
        case GET_AUTH_USER:
            return {...state,loading:false,isAuth:true,...payload}   
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return{...state,loading:false,isAuth:false,user:null,token:null}
        case FORGOT_PASSWORD:
            return {...state,resetLink:payload.resetLink,resetToken:payload.resetToken} 
        case VERIFY_EMAIL:
            return{...state,emailLoading:true}       
        default:
            return state;
          
    }
}
export default authReducer;