import React from 'react'
import './App.css'
import {Nav, Navbar, NavbarCollapse, NavLink} from 'react-bootstrap'
import {useLocation} from 'react-router-dom';
import TimeInfo from './TimeInfo';
import { Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

const Navigationbar = () => {
    const location = useLocation();
    const userData = JSON.parse(sessionStorage.getItem('userName'))

    const clearStorage = (e) => {
      e.preventDefault()
      sessionStorage.clear("userName")

      alert("Session storage has been cleared")
      window.location.href = '/'
    }
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Toggle aria-controls='navbarscroll' data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarscroll">
            <Nav style={{width:'100%'}} activeKey={location.pathname}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/movies">Movies</NavLink>
                <NavLink href="/products">Product</NavLink>
                <NavLink href="/about/defaultname">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/dashboard">Admin</NavLink>
                <NavLink href="/registration" style={userData ? {visibility:"hidden",display:"none"}:{}}>Registration</NavLink>
                <NavLink href="/editregistration" style={!userData ? {visibility:"hidden",display:"none"}:{}}>Edit Registration</NavLink>
                <NavLink href="/login" style={userData ? {visibility:"hidden",display:"none"}:{}}>Login</NavLink>
                <NavLink href="#" onClick={clearStorage} className="btn btn-dark" style={!userData ? {visibility:"hidden",display:"none"}:{}}>Logout</NavLink>
                <NavLink className="ms-auto"><TimeInfo/></NavLink>
            </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default Navigationbar
