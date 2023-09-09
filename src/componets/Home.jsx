import React, { useRef } from 'react'
import{animate, motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import{BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import myImg from '../assets/img5.png'

const Home = () => {

const clientCount = useRef(null);
const animationClintCount = ()=>{
  animate(0,50, {
    duration:1,
    onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
  })
}
const projectCount = useRef(null);
const animationprojectCount = ()=>{
  animate(0,25, {
    duration:1,
    onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
  })
}

    const animation={
        h1:{
            initial:{
        x:'-100%', 
        opacity:0,
            },
            whileInView:{x:0,
                opacity:1
            },
            button:{
                initial:{
            y:'-100%', 
            opacity:0,
                },
                whileInView:{
                    y:0,
                    opacity:1
                }
    }
}
}
  return (
    <div id='home'> 
    <section>
        <div>
<motion.h1 {...animation.h1} >
    Hi, I Am <br/> Afroj Mansoori
</motion.h1>
<Typewriter
  options={{
    strings: ['A WebDeveloper',  'A Designer', 'A Creater'],
    autoStart: true,
    loop: true,
    cursor:'',
    wrapperClassName:'typewriterpara'
  }}
/>
<div>  <a href="mailto:afrojkhanafroj70@gmail.com">
          Hire Me
      </a>
      <a href="#work">
          Projects <BsArrowUpRight/>
      </a>
      </div>
      <article>
        <p>
        + <motion.span whileInView={animationClintCount} ref={clientCount}></motion.span>
        </p>
        <span> Cleints Wordwide</span>
      </article>

      <aside>
      <article>
        <p>
         + <motion.span whileInView={animationprojectCount} ref={projectCount}></motion.span>
        </p>
        <span> Projects Done</span>
      </article>

      <article data-special>
        <p>
          <span>Contact </span>
        </p>
        <span> afrojkhanafroj70@gmail.com</span>
      </article>
      </aside>
  </div>
    </section>
    <section>
    <img src={myImg} alt="Afroj" />
    </section>
    <BsChevronDown/>

    </div>
  )
}

export default Home