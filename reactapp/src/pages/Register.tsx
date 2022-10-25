import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'


const Register = () => {
  return (
    <Container className='mw-10'>
        <Form className='m-5 d-flex flex-column align-items-center bg-white shadow p-3 rounded-3 border' >
            Register
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-muted">
                Already have an account?<Link to="/login">Login here!</Link>
            </Form.Text>
        </Form>
    </Container>
  )
}

export default Register