import React, { useEffect, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { ApiConstants } from '../api/api-constants'
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import Cookies from 'universal-cookie';
import Cookies from "js-cookie";
import axios from '../api/axios';

//"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" Minim 8 caractere, minim o litera si un numar

const Login = () => {
  const REGEXPWD = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  const REGEXUSER = /^.{5,}$/;
  const [loggedIn, setLoggedIn] = useState(false);
  const [validatedUser, setValidatedUser] = useState(false);
  const [validatedPwd, setValidatedPwd] = useState(false);
  const [errMsgUser, setErrMsgUser] = useState("");
  const [errMsgPwd, setErrMsgPwd] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

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
      }
      
      },[user, pwd])

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
      setErrMsgPwd("Username can't be empty.")}
    else {
      setValidatedPwd(true)
    }
  }

  const handleSubmit = (event:any) => {
    //doLogin(user,pwd);
    if (validatedPwd && validatedUser){//add your own condition from the route) 
      Cookies.set("user", "loggedIn")
      setLoggedIn(true)
      navigate("/");
    } else {
      event.preventDefault();
      checkUserValidation();
      checkPwdValidation();
      setLoggedIn(false);
    }
    
  };


  const doLogin = async (username : String, password : String) => {
    try {
      const loginData = {
        username : username,
        password : password
      }
      console.log(loginData);

      // const loginResult = await fetch(ApiConstants.loginUrl, {
      //   method : ApiConstants.httpPost,
      //   headers : {
      //     'Content-Type' : 'application/json',
      //   },
      //   mode : 'cors',
      //   body : JSON.stringify(loginData)
      // });

      axios.post(ApiConstants.loginUrl ,{
        username: loginData.username,
        password: loginData.password,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost/login/',
          'Acces-Control-Allow-Credentials' : true,
			    'Content-Type': 'application/json'
        },
      }).then((response:any) =>{
        console.log(response.data.token);
      }).catch((e:any) => {
        console.log(e);
      });

      // axios.post(ApiConstants.loginUrl,loginData)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   });

      //console.log(loginResult);

      // const cookies = new Cookies();
      //cookies.set('res',loginData,{ path: '/' });
      //console.log(cookies.get('res')); 
      //console.log(loginResult.json());
     

    } catch (loginError) {
      console.error ("[ERROR]: Error: " + loginError);  
    }
  }

  return (
      <Container className='m-5 d-flex flex-column align-items-center '>
        <Form noValidate onSubmit={handleSubmit} className='m-5 w-50 bg-white shadow p-3 rounded-3 border d-flex flex-column align-items-center' >
            <Container className='m-3 w-25 d-flex flex-column align-items-center fw-bold text-primary fs-4'>
                Login
            </Container>

          <Form.Group className="mb-5 d-flex flex-column align-items-start" controlId="formBasicUsername" >
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation className='d-flex flex-column'>
              <Form.Control 
                required 
                type="username" 
                placeholder="Enter username" 
                value = {user} 
                onChange={(e) => setUser(e.target.value)}
                className='w-100'
                />
              { !validatedUser ? (
              <Form.Text className='mt-2 text-danger'>
                {errMsgUser}
              </Form.Text>) : ('')}
              
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation className='d-flex flex-column d-inline'>
              <Form.Control 
                required 
                type="password" 
                placeholder="Password"
                value = {pwd} 
                onChange={(e) => setPwd(e.target.value)}
                className='w-100'
                />
              { !validatedPwd ? (
              <Form.Text className='mt-2 text-danger'>
                {errMsgPwd}
              </Form.Text>) : ('')}
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-4'>
            Login
          </Button>
          <Form.Text className="text-muted mt-3">
          No account? <Link to="/register">Register here!</Link>
          </Form.Text>
        </Form>
      </Container>
    
    
  )
}

export default Login

