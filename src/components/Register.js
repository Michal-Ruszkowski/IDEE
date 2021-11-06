import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [email2, setEmail2] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [userNameError, setUserNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [email2Error, setEmail2Error] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [password2Error, setPassword2Error] = useState(false)

    const messages = {
        incorrectName: "The maximum length is 100 characters",
        incorrectEmail: "Incorrect email address",
        incorrectEmail2: "The email addresses must match",
        incorrectPassword: "The password must be between 7 and 25 characters long",
        incorrectPassword2: "Passwords must match"
    }

    const formValidation = () => {
        const loginKey = /^\w{2,100}$/;
        const emailKey = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        const passwordKey = /^\w{7,25}$/;

        let isUserNameCorrect = false
        let isEmailCorrect = false
        let isEmail2Correct = false
        let isPasswordCorrect = false
        let isPassword2Correct = false
        let isCorrect = false

        if(loginKey.test(userName)) isUserNameCorrect = true
        if(emailKey.test(email)) isEmailCorrect = true
        if(email===email2) isEmail2Correct=true
        if(passwordKey.test(password)) isPasswordCorrect = true
        if(password===password2) isPassword2Correct=true
        if(isUserNameCorrect && isEmailCorrect && isEmail2Correct && isPasswordCorrect && isPassword2Correct) isCorrect = true

        return ({
            isCorrect,
            isUserNameCorrect,
            isEmailCorrect,
            isEmail2Correct,
            isPasswordCorrect,
            isPassword2Correct
        })
    }


    const handleOnChange = (e) => {
        const type = e.target.type
        const id = e.target.id
        if(type==="text") setUserName(e.target.value)
        else if(type==="email") {
            if(id==="email") setEmail(e.target.value)
            else setEmail2(e.target.value)
        }
        else if(type==="password") {
            if(id==="password") setPassword(e.target.value)
            else setPassword2(e.target.value)
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        const validation = formValidation()
        setUserNameError(false)
        setEmailError(false)
        setEmail2Error(false)
        setPasswordError(false)
        setPassword2Error(false)

        if(validation.isCorrect){
            alert("Registered")
        }else{
            setUserNameError(!validation.isUserNameCorrect)
            setEmailError(!validation.isEmailCorrect)
            setEmail2Error(!validation.isEmail2Correct)
            setPasswordError(!validation.isPasswordCorrect)
            setPassword2Error(!validation.isPassword2Correct)
        }
    }

    return (
        <>
        <h1>Register</h1>
        <p>Create new account</p>
        <div className="trapezoid-up"></div>
        <section>
            <form>
                <label htmlFor="name">Username</label>{userNameError && <span>{messages.incorrectName}</span>}
                <input id="name" type="text" onChange={handleOnChange} required maxLength="100"/>
                <label htmlFor="email">Email Address</label>{emailError && <span>{messages.incorrectEmail}</span>}
                <input id="email" type="email" onChange={handleOnChange} required/>
                <label htmlFor="email2">Retry email adsress</label>{email2Error && <span>{messages.incorrectEmail2}</span>}
                <input id="email2" type="email" onChange={handleOnChange} required/>
                <label htmlFor="password">Password</label>{passwordError && <span>{messages.incorrectPassword}</span>}
                <input id="password" type="password" onChange={handleOnChange} required minLength="7" maxLength="25"/>
                <label htmlFor="password2">Retry password</label>{password2Error && <span>{messages.incorrectPassword2}</span>}
                <input id="password2" type="password" onChange={handleOnChange} required minLength="7" maxLength="25"/>
                <input type="button" value="Register" onClick={handleOnClick}/>
            </form>
            <div>
                <div>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </section>
        <div className="trapezoid-down"></div>
        </>
    );
}

export default Register;