import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div>
     <div className='cover'>
       <form className='box'>
        <br/><h3 className='text'>Create account For Parent</h3><br/>
        
          <label className='ftext' htmlFor='name'>Full Name :</label>
          <input className='fbox'id='n'type='text' placeholder='Enter Full Name'/><br/>
        
        
          <label className='ftext' htmlFor='number'>NIC No:</label>
          <input className='fbox' id='N'type='number' placeholder='Enter NIC'/><br/>
        
        
          <label className='ftext' htmlFor='email'>Email :</label>
          <input className='fbox' id='E'type='text' placeholder='Enter Email' /><br/>
        
        
          <label className='ftext' htmlFor='number'>Contact No :</label>
          <input className='fbox' type='number' placeholder='Enter Number'/>
        
        <div className='Button' >
         <button className='buton'>Create</button>
        </div>
       </form>
      </div> 
    </div>
  )
}
