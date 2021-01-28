import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const  Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to="/">
                   <h1>Gameflix</h1>
               </NavLink>
               <Bars />

               <NavMenu>
                   <NavLink to = "www.google.com" activeStyle>
                       About
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to = "/signup">Sign Up</NavBtnLink>
                   <NavBtnLink to = "/login">Login</NavBtnLink>
               </NavBtn>
               
           </Nav>
        </>
    )
}

export default Navbar;
