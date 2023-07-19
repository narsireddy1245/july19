import { useState } from 'react';
import './index.css';
import React from 'react';

function App7(){
     const [islogin,setIsSubscribed]=useState("Login")
     const[isClicked,setIsClicked]=useState(false)
     const onchangeHeading=()=>{
           setIsClicked(!isClicked)
           const changedText=isClicked?'Login':'Logout'
          setIsSubscribed (changedText)
     }

     return(
        <div className='card'>
          <h1 className='login'>Please Login</h1><br></br>
         <br></br>
         <button className='loginbtn' type='button' onClick={onchangeHeading}>{islogin}</button>
        </div>
)
}
export default App7;