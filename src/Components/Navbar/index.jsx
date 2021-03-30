import React, { useState } from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

const Navbar = ({ userStatus }) => {
    const [status, setStatus] = useState(userStatus);

    return (

        <>
            <Nav>
                <NavLink to="/">
                    <h1>Gameflix</h1>
                </NavLink>
                <Bars />

                <NavMenu>
                    <NavLink to="www.google.com" activeStyle>
                        About
                       </NavLink>
                </NavMenu>

                {status ?
                    <ProfilePage />
                    :
                    <Router>
                        <NavBtn>
                            <NavBtnLink to="/signUp" onClick={() => {
                                setStatus({
                                    loggedIn: "true",
                                    user: null,
                                    avatar: null
                                }
                                );

                            }}>Sign Up</NavBtnLink>
                            <NavBtnLink to="/login">Login</NavBtnLink>
                        </NavBtn>

                        <Route path="/login" component={SignIn} />
                    </Router>



                }


            </Nav>
        </>
    )
}

export default Navbar;
