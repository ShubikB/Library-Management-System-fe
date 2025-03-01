import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Navbar expand='md' className='bg-dark  text-white' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className=' '>
          <img
            src='/images/logo/sydneyLibrary.png'
            width='30'
            height='30'
            className='rounded-2 me-2'
            alt='Sydney Library Logo'
          />
          Sydney Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/signup'>
              Sign Up
            </Link>
            <Link className='nav-link' to='/signin'>
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
