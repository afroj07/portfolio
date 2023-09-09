import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>

        <section>
          
        <TestimonialCard name={'Akash'} feedback={'You are a good Developer.'}/>

        <TestimonialCard name={'Shreyansh'} feedback={'Awesome websites keep On.'}/>

        <TestimonialCard name={'Vikram'} feedback={'Great Work, You are a hard worker with sharp mind.'}/>
          </section>
        </div>
  )
}

const TestimonialCard=({name, feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
        
    </article>
)

export default Testimonial