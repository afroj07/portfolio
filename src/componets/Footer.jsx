import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
import myImg from '../assets/myimg2.png'
const Footer = () => {
  return (
   <footer>
    <div>
    <img src={myImg} alt="footerimg" />
    <h2>Afroj Mansori</h2>
    <p>Motivation is temporary,but discipline last forever.</p>
     </div>
     <aside>
        <h2> Social Media</h2>
        <article>
            <a href="https://www.youtube.com/@techriseworld2266" target='blank'><AiFillYoutube/></a>
            <a href="https://github.com/afroj07" target='blank'><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/afroj-mansoori-025882204/" target='blank'><AiFillLinkedin/></a>

        </article>
     </aside>
      <a id='arraw' href="#home">
        <AiOutlineArrowUp/>
        </a>
   </footer>
  )
}

export default Footer