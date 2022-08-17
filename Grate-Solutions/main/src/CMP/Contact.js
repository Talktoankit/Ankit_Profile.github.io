import React, { useState } from 'react'

const Contact = () => {
const [data, setData] = useState ({

  fullname:'',
  phone:'',
  email: '',
  message: '',

}) ;

const InputEvent = (event) => {
const {name, value} = event.target;

setData ((preVal) => {
return {

  ...preVal,
  [name] : value,

}

})

};

const  formSubmit = (e) =>{
e.preventDefault();
alert(`${data.fullname} ${data.phone} ${data.email} ${data.message}`);


};

  return (
    <>
    <div className='container-fluid'>
<div className='row'>
<div className='col-md-10 mx-auto' >
<div className='my-5'>
<h2 className='text-center'>Contact Us</h2>

</div>

<div className='row gy-4 '>
<div className='col-md-4 mx-auto'>
  <form onSubmit={formSubmit}>

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" 
  name='fullname'
  value={data.fullname}
  onChange={InputEvent}
  placeholder="name@example.com" />
  <label for="floatingInput">User Name</label>
</div>

<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" 
  name='email'
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com" />
  <label for="floatingInput">Email Address</label>
</div>
<div className="form-floating mb-3">
  <input type="Phone" className="form-control" id="floatingInput" 
  name='phone'
  value={data.phone}
  onChange={InputEvent}
  placeholder="name@example.com" />
  <label for="floatingInput">Phone Number</label>
</div>

<div className="form-floating">
  <textarea className="form-control" 
  name='message'
  value={data.message}
  onChange={InputEvent}
  placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'180px'}}></textarea>
  <label for="floatingTextarea2">Message</label>
</div>


<div class="col-12 my-4 d-flex justify-content-end align-items-end">
    <button class="btn  btn-outline-dark  btn-border" type="submit">Submit form</button>
  </div>
  </form>
</div>


</div>


 
 </div>
 </div>
 </div>
   </>
  )
}

export default Contact