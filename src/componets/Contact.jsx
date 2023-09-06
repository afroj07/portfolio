import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
 <section>
    <form >
        <h2>Contact Me</h2>
        <input type="text" placeholder='Your Name ' required/>
        <input type="email" placeholder='example@gmail.com' required />
       
        <input type="text" placeholder='Start message'required />
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