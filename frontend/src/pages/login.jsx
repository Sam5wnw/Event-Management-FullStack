import React from 'react'

import {Link} from 'react-router-dom';


const login = () => {

    
const onSubmit = ()=>{
      
  
     

    alert("Form is Submitted");
    console.log("Form is submitted")
}
  return (
    <div>
    <div className = "formContainer">
        <div className='formWrapper'>
       <span className='logo'>Event Management</span>
       <span className='title'>Login</span>

            <form onSubmit={onSubmit} >

                
                <input type="email" placeholder='email' />
             
               
                <input type="password" placeholder='password' />
               
                <button>Sign in</button>
             
            </form>
            <p>Dont have any Account ?  <Link to={"/register"}>Register</Link></p>
        </div>

    </div>
    </div>
  )
}

export default login