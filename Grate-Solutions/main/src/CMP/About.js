import React from 'react'
import Common from './Common';
import Web from '../Images/about-us.png';
const About = () => {
  return (
    <div>
      
      <Common 
name="Welcome to About Us Page"
text="Graphical components, structural
advices, plans and many more. Check out our services and make your company outstanding. Here is the opportunity to build-up your website."
imgsrc={Web}
visit="/Contact"
btname="Contat Now"
btnname="Watch Demo"

/>

    </div>
  )
}

export default About