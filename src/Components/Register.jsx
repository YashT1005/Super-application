import React, { useState } from 'react'
import discover from '../assets/discover.png'
import './Register.css'
import { NavLink } from 'react-router-dom';

function Register() {

    const [navLink, setNavLink] = useState("");

    const [registration, setregistration] = useState({
        Name : "",
        UserName : "",
        Email : "",
        Mobile : "",
    });

    const [nameErr, setNameErr] = useState(false);
    const [userNameErr, setUserNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [mobileErr, setMobileErr] = useState(false);
    const [signUpErr, setSignUpErr] = useState(false);

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value);
        // console.log(name);

        setregistration({...registration, [name] : value})
        if(registration.Name != ""){
            setNameErr(false);
            setNavLink("/page2")
            localStorage.setItem("inputName" , registration.Name);
        }
        if(registration.UserName != ""){
            setUserNameErr(false);
            setNavLink("/page2")
            localStorage.setItem("inputUserName" , registration.UserName);
        }
        if(registration.Email != ""){
            setEmailErr(false);
            setNavLink("/page2")
            localStorage.setItem("inputEmail" , registration.Email);
        }
        if(registration.Mobile != ""){
            setMobileErr(false);
            setNavLink("/page2")
        }
        if(registration.Name != "" && registration.UserName != "" &&  registration.Email != "" && registration.Mobile != ""){
            setNavLink("/page2");
            console.log(navLink);
            localStorage.setItem("inputMobile" , registration.Mobile);
        }
        else{
            setNavLink("/")
        }
    }


    const handleClick = (e) => {
        // e.preventDefault();
        const newUser = {...registration};
        console.log(newUser);
        console.log(registration.Name);
        if(registration.Name === ""){
            setNameErr(true);
        }
        else{
            setNameErr(false);
        }

        if(registration.UserName === ""){
            setUserNameErr(true);
        }
        else{
            setUserNameErr(false);
        }

        if(registration.Email === ""){
            setEmailErr(true);
        }
        else{
            setEmailErr(false);
        }

        if(registration.Mobile === ""){
            setMobileErr(true);
        }
        else{
            setMobileErr(false);
        }

        if(registration.Name === "" || registration.UserName === ""||  registration.Email === "" || registration.Mobile === ""){
            setNavLink("/")
        }
        else{
            localStorage.setItem("inputName" , registration.Name);
            localStorage.setItem("inputUserName" , registration.UserName);
            localStorage.setItem("inputEmail" , registration.Email);
            localStorage.setItem("inputMobile" , registration.Mobile);
            setNavLink("/page2")
        }

    }

    return (
        <div className='container'>
            <img src={discover} alt="" />
            <div className='form-box'>
                <div className="box">
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                    <form autoComplete='off'>
                        <input type="text" placeholder='Name' 
                        value={registration.Name}
                        onChange={handleInput}
                        name='Name' id='Name'/>
                        {
                            nameErr ? (
                                <p className='error-msg'>Please fill correctly !</p>
                            ) : (
                                <></>
                            )
                        }

                        <input type="text" placeholder='UserName'
                        value={registration.UserName} 
                        onChange={handleInput}
                        name='UserName' id='UserName' required/>
                        {
                            userNameErr ? (
                                <p className='error-msg'>Please fill correctly !</p>
                            ) : (
                                <></>
                            )
                        }

                        <input type="email" placeholder='Email' 
                        value={registration.Email}
                        onChange={handleInput}
                        name='Email' id='Email' required/>
                        {
                            emailErr ? (
                                <p className='error-msg'>Please fill correctly !</p>
                            ) : (
                                <></>
                            )
                        }

                        <input type="number" placeholder='Mobile' 
                        value={registration.Mobile}
                        onChange={handleInput}
                        name='Mobile' id='Mobile' required/>
                        {
                            mobileErr ? (
                                <p className='error-msg'>Please fill correctly !</p>
                            ) : (
                                <></>
                            )
                        }

                        <div className='checkbox'>
                            <input type="checkbox" required/>
                            <p>&nbsp;  Share my registration data with Superapp</p>
                        </div>
                        
                        <NavLink to={navLink}><button type="submit" onClick={handleClick}>SIGN UP</button></NavLink> 
                        <p className='grey'>By clicking on Sign up. you agree to Superapp <span className='green'> Terms and Conditions of Use </span></p>
                        <p className='grey'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='green'>Privacy Policy</span> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register