import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn370WQco7wQbH4jWBvcW5sJSAThmLO3613A&usqp=CAU" 
                alt=""
                className='login_logo'/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
                
            </div>
        </div>
    )
}

export default Login
