import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios';
import { ApiConstants } from '../api/api-constants';
import { doRegister } from '../api/api-routes';
import RegisterForm from '../components/RegisterForm';


const Register = () => {
  const REGEXEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const REGEXPWD = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  const REGEXUSER = /^.{5,}$/;
  const [validatedUser, setValidatedUser] = useState(false);
  const [validatedEmail, setValidatedEmail] = useState(false);
  const [validatedPwd, setValidatedPwd] = useState(false);
  const [validatedConfirmPwd, setValidatedConfirmPwd] = useState(false);

  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgUser, setErrMsgUser] = useState("");
  const [errMsgPwd, setErrMsgPwd] = useState("");
  const [errMsgConfirmPwd, setErrMsgConfirmPwd] = useState("");

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const navigate = useNavigate();

  let registered = false;

    useEffect(() => {
        if (email.length !== 0){
            checkEmailValidation()
        } else {
            setErrMsgEmail("")
        }
        if (user.length !== 0){
            checkUserValidation()
        } else {
            setErrMsgUser("")
        }
        if (pwd.length !== 0){
            checkPwdValidation()
        } else {
            setErrMsgPwd("")
        }
        if (confirmPwd.length !== 0){
            checkConfirmPwdValidation()
        } else {
            setErrMsgConfirmPwd("");
        }
    },[user, email, pwd, confirmPwd])

  const checkEmailValidation = () => {
    if(email.length === 0){
      setValidatedEmail(false)
      setErrMsgEmail("Please enter an email.")
    } else if (!REGEXEMAIL.test(email)) {
      setValidatedEmail(false)
      setErrMsgEmail("Email not valid!")
    }
    else {
      setValidatedEmail(true)
    }

  }

  const checkUserValidation = () => {
    if(user.length === 0){
      setValidatedUser(false)
      setErrMsgUser("Please enter an username.")
    } else if (!REGEXUSER.test(user)) {
      setValidatedUser(false)
      setErrMsgUser("Username needs more than 5 letters.")
    }
    else {
      setValidatedUser(true)
    }
  }

  const checkPwdValidation = () => {
    if(pwd.length === 0){
      setValidatedPwd(false)
      setErrMsgPwd("Please enter a password.")
    }
    else if(!REGEXPWD.test(pwd)){
      setValidatedPwd(false)
      setErrMsgPwd("Password too weak.")
    } 
    else {
      setValidatedPwd(true)
    }
    
  }

  const checkConfirmPwdValidation = () => {
    if(confirmPwd.length === 0){
      setValidatedConfirmPwd(false)
      setErrMsgConfirmPwd("Please confirm your password.")
    }
    else if(confirmPwd !== pwd){
      setValidatedConfirmPwd(false)
      setErrMsgConfirmPwd("Passwords don't match!")
    } 
    else {
      setValidatedConfirmPwd(true)
    }
    
  }

  const handleSubmit = (event:any) => {
    if (validatedPwd && validatedUser && validatedEmail) {
      doRegister(user,pwd,email,navigate,registered);

    }
      event.preventDefault();
      checkEmailValidation();
      checkUserValidation();
      checkPwdValidation();
      checkConfirmPwdValidation();
      registered = false;
  };

  return (
    <>
      <RegisterForm/>
    </>
  )
}

export default Register