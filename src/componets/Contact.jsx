import React, { useState } from 'react'
import img from '../assets/msg.jpg';

const Contact = () => {

   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMeassage]=useState('');
   const submitHandler=(e)=>{
      e.preventDefault();
        console.log(name, email, message);
   }
  return (
    <div id='contact'>
 <section>
    <form onSubmit={submitHandler}>
        <h2>Contact Me</h2>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
         placeholder='Your Name ' required/>
        <input type="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
        placeholder='example@gmail.com' required />
       
        <input type="text" 
         value={message}
         onChange={(e)=>setMeassage(e.target.value)}
        placeholder='Start message'required />
        <button type='submit'>Send</button>
                 
    </form>
 </section>
 <aside>
    <img src={img} alt="sideImage" />
 </aside>
    </div>
  )
}

export default Contact;