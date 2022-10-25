import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Register = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className='m-5 d-flex flex-column align-items-center'>
        <Form  noValidate validated={validated} onSubmit={handleSubmit} className='m-5 w-50 bg-white shadow p-3 rounded-3 border d-flex flex-column align-items-center'>
            <Container className='m-3 w-25 d-flex flex-column align-items-center fw-bold text-primary fs-4'>
                Register
            </Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="m-2">
                Register
            </Button>
            <Form.Text className="text-muted m-1">
                Already have an account? <Link to="/login">Login here!</Link>
            </Form.Text>
        </Form>
    </Container>
  )
}

export default Register