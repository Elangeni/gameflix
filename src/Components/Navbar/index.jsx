import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

class Navbar extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.status
        };
    }
    

    render() {
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

                    {this.state.data.status ?
                        <NavBtn>
                        </NavBtn>
                        :
                        <NavBtn onClick={() => {
                            console.log(this.state.data)
                        }}>
                            <NavBtnLink to="/signup" onClick={() => {
                                this.setState({data: {
                                    userStatus: {
                                      loggedIn: "true",
                                      user:null,
                                      avatar:null
                                    }
                                }});
                            }}>Sign Up</NavBtnLink>
                            <NavBtnLink to="/login" onClick={() => {
                                console.log("login was pressed")
                            }}>Login</NavBtnLink>
                        </NavBtn>
                        
                    }


                    
                </Nav>
            </>
        )
    }
}

export default Navbar;
