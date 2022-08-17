import React from 'react'
import { Link } from 'react-router-dom';


const Services = (props) => {
  return (
    <>

 

<div className='col-md-4 col-10 mx-auto '>
<div className="card shadow-sm border-0" >
  <img src={props.imgsrc} className="card-img-top" alt="Services"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.disc}</p>
    <Link to={props.link} className="btn btn-outline-dark mx-2 btn-border">More...</Link>
    
  </div>
</div>
</div>





  

    
    </>
  )
}

export default Services