import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <h2>Afroj.</h2>
      <div>
            <a href="/home">Home</a>
             <a href='/world'>World</a>
             <a href="/timeline">Experince</a>
             <a href="/services">Services</a>
             <a href="/testimonial">Testimonial</a>
             <a href="/contact">Contact</a>
      </div>
      <a href="mailto:afrojkhanafroj70@gmail.com">
          <button>Email</button>
      </a>
      
    </nav>
   
  )
};



export default Header