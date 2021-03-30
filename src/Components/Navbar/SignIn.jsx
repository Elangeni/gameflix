import React, {useState}from 'react'
import { NavLink as Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './NavbarStyles.css';
import Navbar from "./index";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <Router>
        <div className="signin-box">
                <button className="close-btn">Close</button>
                <h1>Sign In</h1>
            
            <div >
                {error !== null && <div >{error}</div>}
                <form className="signin-form">
                    <label htmlFor="userEmail" >
                        Email:
          </label>
                    <input
                        type="email"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: someone@domain.com"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword">
                        Password:
          </label>
                    <input
                        type="password"
                        name="userPassword"
                        value={password}
                        placeholder="E.g: AwesomePa$$word38"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <button className="signin-btn" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                        Sign in
          </button>
                </form>
                <p>or</p>
                <button
                    className="">
                    Sign in with Google
        </button>
                <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link to="signUp" >
                        Sign up here
          </Link>{" "}
                    <br />{" "}
                    <Link to="passwordReset">
                        Forgot Password?
          </Link>
                </p>
            </div>
        </div>
        {/* <Route path="/" component={Navbar} /> */}
        </Router>
    );
}

export default SignIn
