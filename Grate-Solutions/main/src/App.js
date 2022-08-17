import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './CMP/Nav'
import Home from './CMP/Home';
import './App.css'
import Footer from './CMP/Footer';
import About from './CMP/About';
import Services from './CMP/Services';
import Support from './CMP/Support';
import Contact from './CMP/Contact';
import { Routes, Route } from "react-router-dom";




const App = () => {
  return (
 <>
 <div className='homebg'>
<Nav />
<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Services" element={ <Services/> } />
        <Route path="Support" element={ <Support/> } />
        <Route path="Contact" element={ <Contact/> } />
      </Routes>

{/* <Home />
<About />
<Services />
<Support />
<Contact /> */}


<Footer />
</div>

 </>
  )
}

export default App