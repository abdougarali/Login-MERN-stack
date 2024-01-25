import './App.css';
import {ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css';
import SignUpLogin from './Component/SignUp-Login/SignUpLogin'
import {Routes,Route, useParams} from 'react-router-dom'
import Home from './Pages/Home/Home';
import {getAuthuser} from './js/Actions/authAction'
import PrivateRoute from './Component/privateRoute';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import Reset from './Pages/Reset/Reset';
import VerifyPage from './Pages/verify/VerifyPage';

function App() {
  // const {token}=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{
    // if(localStorage.getItem('token'))
  dispatch(getAuthuser())
  },[])

  const Auth=useSelector((state)=>state.authReducer.isAuth)
  console.log('Auth',Auth)

  const resetLink=useSelector((state)=>state.authReducer.resetLink)
  
  // console.log('resetLink',resetLink)
  // const resetToken=useSelector((state)=>state.authReducer.resetToken)
  // console.log('resetToken',resetToken)
  return (
    <div className="App">
      {/* <SignUpLogin/> */}
      <Routes>
        {Auth?<Route path='/' element={<Home/>}/>:<Route path='/' element={<SignUpLogin/>}/>}
        <Route path='/reset-password/:resetToken' element={<Reset/>}/>
        <Route path='/verify-email/:token' element={<VerifyPage/>}/>
        {/* <Route path='/home' element={
        <PrivateRoute>
        <Home/>
         </PrivateRoute>
        }/> */}
        <Route path='*' element={<img width="100%" src='https://i.ytimg.com/vi/uHRBZ066NYM/maxresdefault.jpg' alt='404 error'/>} />
      </Routes>


      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition: Bounce,
/>

{/* <ToastContainer /> */}




    </div>
  );
}

export default App;
