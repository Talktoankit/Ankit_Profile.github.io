import React from 'react';
// import { Link } from 'react-router-dom';
import Card from './Card';
import Sdata from './Sdata';


const Services = () => {
  return (
    <>
   <div className='container-fluid'>
<div className='row'>
<div className='col-md-10 mx-auto' >
 <div className='my-5'>
<h2 className='text-center'>Services</h2>

</div>

<div className='row gy-4'>

{
Sdata.map((val, ind) => {
return <Card  key={ind}
imgsrc={val.imgsrc}
title={val.title}
disc={val.disc}
link={val.link}




/>

})
}

</div>


  
  </div>
  </div>
  </div>
    
    </>
  )
}

export default Services