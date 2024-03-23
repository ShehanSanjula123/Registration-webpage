import React from 'react'
import './signup.css'

export default function HealthSignup() {
  return (
    <div>
       <div className='cover'>
       <form className='box'>
        <br/><h3 className='text'>Create account For Healthcare Professionals</h3><br/>
        
          <label className='ftext'id='n' htmlFor='name'>Full Name :</label>
          <input className='fbox'type='text' placeholder='Enter Full Name'/><br/>
        
        
          <label className='ftext'id='N' htmlFor='number'>NIC No:</label>
          <input className='fbox' type='number' placeholder='Enter NIC'/><br/>
        
        
          <label className='ftext'id='E' htmlFor='email'>Email :   </label>
          <input className='fbox' type='text' placeholder='Enter Email' /><br/>
      
        
          <label className='ftext' htmlFor='number'>Contact No :</label>
          <input className='fbox' type='number' placeholder='Enter Number'/><br/>
       
          <label className='ftext' htmlFor='text'>Occupation :</label>
          <input className='fbox'type='text'/>
       
        <div className='Button' >
         <button className='buton'>Create</button>
        </div>
       </form>
      </div> 
    </div>
  )
}
