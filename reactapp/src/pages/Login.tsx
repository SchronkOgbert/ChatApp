import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ApiConstants } from '../api/api-constants'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

const Login = () => {

  const doLogin = async (username : String, password : String) => {

    console.log("dap");
    
    try {
      const loginData = {
        username : username,
        password : password
      }


      console.log(loginData);

      const loginResult = await fetch(ApiConstants.loginUrl, {
        method : ApiConstants.httpPost,
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(loginData)
      });

      const cookies = new Cookies();
      cookies.set('res',loginData,{ path: '/' });
      console.log(cookies.get('res')); 
      console.log(loginResult.json());
     

    } catch (loginError) {
      console.error ("[ERROR]: Error: " + loginError);  
    }
  }

  return (
      <Container className='m-5 d-flex flex-column align-items-center'>
        <Form className='m-5 w-50 bg-white shadow p-3 rounded-3 border d-flex flex-column align-items-center' >
            <Container className='m-3 w-25 d-flex flex-column align-items-center fw-bold text-primary fs-4'>
                Login
            </Container>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => doLogin("test","test1234!")}>
            Login
          </Button>
          <Form.Text className="text-muted">
          No account? <Link to="/register">Register here!</Link>
          </Form.Text>
        </Form>
      </Container>
    
    
  )
}

export default Login