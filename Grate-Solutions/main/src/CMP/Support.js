import React from 'react';
import Portfolio from './Portfolio';
import Portimage from './Portimage';

const Support = () => {
  return (
    <>
     <div className='container-fluid'>
<div className='row'>
<div className='col-md-10 mx-auto' >
 <div className='my-5'>
<h2 className='text-center'>Portfolio</h2>

</div>

<div className='row gy-4'>
 
{
Portfolio.map((val, ind) => {
return <Portimage  key={ind}
imgport={val.imgport}




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

export default Support