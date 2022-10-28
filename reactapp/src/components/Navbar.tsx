import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';


  const Navbar = (props:any) => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    readCookie();
  }, []);

  function logout() {
    Cookies.remove("user")
    setLoggedIn(false);
    window.location.reload();
  }



  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setLoggedIn(true);
    }
    };

  return (
    <>
    {!loggedIn ? (
       <NavbarBs sticky='top' className='bg-white shadow-sm'>
        <Container className='d-flex flex-column align-items-center justify-content-between'>
          <Nav className='me-auto fw-bold fs-4'>
            <Nav.Link as={NavLink} to='/' className='text-primary'>Chat App</Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    ) : (
      <NavbarBs sticky='top' className='bg-white shadow-sm'>
        <Container className='d-flex flex-column align-items-center justify-content-between'>
          <Nav className='me-auto fw-bold fs-4'>
            <Nav.Link as={NavLink} to='/' className='text-primary'>Chat App</Nav.Link>
            <Button
              variant="outline-primary"
              className='fw-bold'
              onClick={() => logout()}
              >Log out
            </Button>
          </Nav>
        </Container>
      </NavbarBs>
    )}
    </>
  )   
}

export default Navbar