import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from 'react-router-dom'


const Navbar = (props:any) => {
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm'>
        <Container className='d-flex flex-column align-items-center'>
          <Nav className='me-auto fw-bold fs-4'>
            <Nav.Link as={NavLink} to='/' className='text-primary'>Chat App</Nav.Link>
          </Nav>
          <Nav className=''>
            {/* <Nav.Link as={NavLink} to='/register' className='text-primary'>
              <Button style={{position: 'relative'}}
              variant="outline-primary"
              className='fw-bold'
              >Register
          </Button></Nav.Link> */}
          </Nav>
          
        </Container>
    </NavbarBs>
  )
}

export default Navbar