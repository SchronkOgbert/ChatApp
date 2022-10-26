import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ApiConstants } from '../api/api-constants'
import { Link, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from '../api/axios';

const Login = () => {

  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    <Navigate to = "/home"></Navigate>
    console.log(user, pwd, validated);

    //setValidated(true);
  };

  function onClickEvent() {
    
  }


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
      }).then((response) =>{
        console.log(response.data.token);
      }).catch((e) => {
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

      const cookies = new Cookies();
      //cookies.set('res',loginData,{ path: '/' });
      //console.log(cookies.get('res')); 
      //console.log(loginResult.json());
     

    } catch (loginError) {
      console.error ("[ERROR]: Error: " + loginError);  
    }
  }

  return (
      <Container className='m-5 d-flex flex-column align-items-center'>
        <Form noValidate onSubmit={handleSubmit} validated={validated} className='m-5 w-50 bg-white shadow p-3 rounded-3 border d-flex flex-column align-items-center' >
            <Container className='m-3 w-25 d-flex flex-column align-items-center fw-bold text-primary fs-4'>
                Login
            </Container>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              required 
              type="username" 
              placeholder="Enter username" 
              value = {user} 
              onChange={(e) => setUser(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required 
              type="password" 
              placeholder="Password"
              value = {pwd} 
              onChange={(e) => setPwd(e.target.value)}/>
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

