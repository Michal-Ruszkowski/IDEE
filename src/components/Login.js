import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userNameError, setUserNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const messages = {
        incorrectName: "The maximum length is 100 characters",
        incorrectEmail: "Incorrect email address",
        incorrectPassword: "The password must be between 7 and 25 characters long"
    }

    const formValidation = () => {
        const loginKey = /^\w{2,100}$/;
        const emailKey = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const passwordKey = /^\w{7,25}$/;

        let isUserNameCorrect = false
        let isEmailCorrect = false
        let isPasswordCorrect = false
        let isCorrect = false

        if(loginKey.test(userName)) isUserNameCorrect = true
        if(emailKey.test(email)) isEmailCorrect = true
        if(passwordKey.test(password)) isPasswordCorrect = true
        if(isUserNameCorrect && isEmailCorrect && isPasswordCorrect) isCorrect = true

        return ({
            isCorrect,
            isUserNameCorrect,
            isEmailCorrect,
            isPasswordCorrect
        })
    }


    const handleOnChange = (e) => {
        const type = e.target.type
        if(type==="text") setUserName(e.target.value)
        else if(type==="email") setEmail(e.target.value)
        else if(type==="password") setPassword(e.target.value)
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        const validation = formValidation()
        if(validation.isCorrect){
            alert("Logged in")
            setUserNameError(false)
            setEmailError(false)
            setPasswordError(false)
        }else{
            setUserNameError(!validation.isUserNameCorrect)
            setEmailError(!validation.isEmailCorrect)
            setPasswordError(!validation.isPasswordCorrect)

        }
    }

    return (
        <>
        <h1>Login</h1>
        <p>To access your account</p>
        <div className="trapezoid-up"></div>
        <section>
            <form>
                <label htmlFor="name">Username</label>{userNameError && <span>{messages.incorrectName}</span>}
                <input id="name" type="text" onChange={handleOnChange} required maxLength="100"/>
                <label htmlFor="email">Email Address</label>{emailError && <span>{messages.incorrectEmail}</span>}
                <input id="email" type="email" onChange={handleOnChange} required/>
                <label htmlFor="password">Password</label>{passwordError && <span>{messages.incorrectPassword}</span>}
                <input id="password" type="password" onChange={handleOnChange} required minLength="7" maxLength="25"/>
                <a href="#">Forgot password?</a>
                <input type="button" value="Login" onClick={handleOnClick}/>
            </form>
            <div>
                <div>
                    <p>Not a member?</p>
                    <p><Link to="/register">Register today</Link></p>
                </div>
            </div>
        </section>
        <div className="trapezoid-down"></div>
        </>
    );
}

export default Login;