
import React from 'react'
import Header from './componets/Header'
import Home from './componets/Home';
import Work from './componets/Work';
import TimeLine from './componets/TimeLine';
import Service from './componets/Service';
import Testimonial from './componets/Testimonial';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
 
  return (
<>
<Header/>
<Home/>
<Work/>
<TimeLine/>
<Service/>
<Testimonial/>
<Contact/>
<Footer/>
<Toaster/>

</>
  );
}

export default App;
