import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{

   render(){
       return(
        <Navbar bg="dark" expand="lg"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav>
        <NavLink className="d-inline p-2 bg.dark-text-white" to="/">
        Home
        
        </NavLink>
        </Nav>
        <NavLink className="d-inline p-2 bg.dark-text-white" to="/books">
        Books
        
        </NavLink>
        <Nav>
        <NavLink className="d-inline p-2 bg.dark-text-white" to="/apply">
        Apply
        </NavLink>

        <Nav>
        <NavLink className="d-inline p-2 bg.dark-text-white" to="/reservation">
        Reservation
        
        </NavLink>
        </Nav>
        <Nav>
        <NavLink className="d-inline p-2 bg.dark-text-white" to="/pay">
        Pay
        
        </NavLink>
        </Nav>
        
        
        

        
        
        </Nav>
        
        
        </Navbar.Collapse>
        
        </Navbar>


       )


   } 
}