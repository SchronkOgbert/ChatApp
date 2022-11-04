import React, { useEffect, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { ApiConstants } from '../api/api-constants'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import axios from '../api/axios';
import { doLogin } from '../api/api-routes';
import LoginForm from '../components/LoginForm';


const Login = () => {
  const [validatedUser, setValidatedUser] = useState(false);
  const [validatedPwd, setValidatedPwd] = useState(false);
  const [errMsgUser, setErrMsgUser] = useState("");
  const [errMsgPwd, setErrMsgPwd] = useState("");
  const [errMsgValid, setErrMsgValid] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  let loggedIn = false;
  useEffect(() => {
    if (user.length !== 0){
      checkUserValidation()
    } else {
        setErrMsgUser("")
    }
    if (pwd.length !== 0){
      checkPwdValidation()
    } else {
        setErrMsgPwd("")
        setErrMsgValid("");
    }

    if (loggedIn){
      navigate('/')
    }
    
    },[user, pwd, loggedIn])

  const checkUserValidation = () => {
    if(user.length === 0){
      setValidatedUser(false)
      setErrMsgUser("Username can't be empty.")}
    else {
      setValidatedUser(true)
    }
  }

  const checkPwdValidation = () => {
    if(pwd.length === 0){
      setValidatedPwd(false)
      setErrMsgPwd("Password can't be empty.")}
    else {
      setValidatedPwd(true)
    }
  }

  const handleSubmit = (event:any) => {
    if (validatedPwd && validatedUser){
      doLogin(user,pwd,navigate,loggedIn,setErrMsgValid);
    }
    setErrMsgPwd("Password can't be empty.")
    event.preventDefault();
    checkUserValidation();
    checkPwdValidation();
    loggedIn = false;
  };

  
  return (
      <>
        <LoginForm/>
      </>
    )
  }
  
export default Login


