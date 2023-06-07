import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function TopNav() {
    // const share = useSelector((state) => state.favourites.favourtmovise)

  return (
    <Navbar bg="dark" expand="lg" className=''>
    <Container className='container d-flex flex-column '>
        <Navbar.Brand href="#home" className='text-light  '><h4>Kont-Website</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto "  style={{}}>
                <Link className="mx-4 text-light" to="/" style={{ textDecoration: "none"}}>Home</Link>
                <Link className="mx-4 text-light" to="/Login" style={{ textDecoration: "none" }}>Login</Link>
                <Link className="mx-4 text-light" to="/Registeration" style={{ textDecoration: "none" }}>Registeration</Link>
                <Link to="/Products " style={{ textDecoration: "none" }} className="mx-4 text-light">Products</Link>
                <Link to="/Connected" style={{ textDecoration: "none" }} className="mx-4 text-light">Connected</Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default TopNav