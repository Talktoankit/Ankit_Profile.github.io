import React from 'react';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



const Common = (props) => {
  return (
<>

<div className='container-fluid'>
<div className='row'>
<div className='col-md-10 mx-auto' >
<div className='row d-flex justify-content-center align-items-center'>

<div className='col-md-6  order-2 order-lg-1'>
<h1 className='my-4'>{props.name}</h1>
<p className='my-5 headdisc'>{props.text}</p>
   <Link to={props.visit} class="btn btn-outline-dark mx-2 btn-border my-4">{props.btname}</Link>
   <Link to={props.visit} class="btn btn-outline-dark mx-2 btn-border my-4">{props.btnname}</Link>



</div>

<div className='col-md-6 order-1 order-lg-2 my-5 text-align-right'>

<img src={props.imgsrc} className='animated img-fluid' alt='banner' />

</div>

</div>

</div>
</div>
</div>

</>
  )
}

export default Common;