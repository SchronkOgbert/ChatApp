import React, { useState } from 'react'
import { MDBView, MDBMask } from "mdbreact";
import { Container } from 'react-bootstrap'

const Chats = () => {
  return (
    <>
      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Kabewh</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: '#4E5F80' }}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Kabewh</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Weekendum</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: '#4E5F80' }}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Weekendum</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Ralph</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: '#4E5F80' }}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Ralph</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Bogdy</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: '#4E5F80' }}>
          <div className='text-white ms-1 ' style={{fontSize: 17, fontWeight: 500}}>Bogdy</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

    </>
    
  )
}

export default Chats