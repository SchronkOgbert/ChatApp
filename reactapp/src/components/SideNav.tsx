import Cookies from 'js-cookie';
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const SideNav = () => {
    let user = Cookies.get("user");

  return (
    <Navbar className='bg-dark bg-opacity-50 rounded-start fw-bold text-white' style={{height: 75}}>
        <Container>
            <h5 className='fw-bold'>Chat App</h5>
            <div>
                <span className='userName'>{user}</span>
                <img className='img-fluid' src="" alt=""></img>
            </div>
        </Container>
    </Navbar>
  )
}

export default SideNav