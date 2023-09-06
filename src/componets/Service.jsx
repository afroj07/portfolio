import React from 'react'
import {motion} from 'framer-motion';

import {AiFillAndroid, AiFillIeCircle, AiFillWindows} from 'react-icons/ai'

const Service = () => {
 const animations={
    whileInView:{
        x:0,
        y:0,
        opacity:1,
    },
    one:{
        opacity:0,
        x:'-100%'
    },

    twoAndthree:{
        opacity:0,
        y:'-100%'
    },
   
    four:{
        opacity:0,
        x:'100%'
    },
};

  return (
    <div id='services'>
        <h2>Service</h2>
        <section>
            <motion.div className='serviceBox1 while' whileInView={animations.whileInView} initial={animations.one}>
                <h3>1+</h3>
                <p>Years Experience</p>
                </motion.div>
                <motion.div className='serviceBox2while' whileInView={animations.whileInView} initial={animations.twoAndthree}>
               <AiFillIeCircle/>
               <span>Web Development</span>
            </motion.div>        
            
           <motion.div className='serviceBox3while' whileInView={animations.whileInView} initial={animations.twoAndthree} transition={{delay:0.2}}>
               <AiFillAndroid/>
               <span>App Development</span>
            </motion.div>
            <motion.div className='serviceBox4while' whileInView={animations.whileInView} initial={animations.four}>
               <AiFillWindows/>
               <span>Desktop Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Service