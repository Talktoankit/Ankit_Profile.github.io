import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import { Link } from "react-router-dom";



function BasicExample() {
  return (

    
    
   <Container fluid >
   <Row>

<Col md={10} className="mx-auto">


<Navbar  expand="lg">
        <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="About">About</Link>
            <Link className='nav-link' to="Services">Services</Link>
            <Link className='nav-link' to="Support">Support</Link>
            <Link className='nav-link' to="Contact">Contact</Link>
          
            
          </Nav>
        </Navbar.Collapse>
        </Navbar>

{/* <Home />
<About />
<Services />
<Support />
<Contact /> */}
</Col>

   </Row>
   
   
       
      </Container>
   
  );
}

export default BasicExample;