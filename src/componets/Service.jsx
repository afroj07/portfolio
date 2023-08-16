import React from 'react'
import {motion} from 'framer-motion';
import {AiFillAndroid, AiFillIeCircle, AiFillWindows} from 'react-icons/ai'

const Service = () => {
  return (
    <div id='services'>
        <h2>Service</h2>
        <section>
            <motion.div className=''serviceBox1>
                <h3>5+</h3>
                <p>Years Experince</p>
                </motion.div>
                <motion.div className=''serviceBox2>
               <AiFillIeCircle/>
               <span>Web Development</span>
            </motion.div>
            <motion.div className=''serviceBox3>
               <AiFillAndroid/>
               <span>App Development</span>
            </motion.div>
            <motion.div className=''serviceBox4>
               <AiFillWindows/>
               <span>Desktop Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Service