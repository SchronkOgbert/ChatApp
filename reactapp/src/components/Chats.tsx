import React, { useState } from 'react'
import { MDBView, MDBMask } from "mdbreact";
import { Container } from 'react-bootstrap'

const Chats = () => {
  return (
    <>
      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Kabewh</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: 'rgba(91, 14, 214, 0.3)' }}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Kabewh</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Weekendum</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: 'rgba(91, 14, 214, 0.3)' }}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Weekendum</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Ralph</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: 'rgba(91, 14, 214, 0.3)' }}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Ralph</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

      <Container className='userChat border-bottom border-1 bg-image hover-overlay' style={{minHeight: 60}}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Bogdy</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        <Container className='mask' style={{ backgroundColor: 'rgba(91, 14, 214, 0.3)' }}>
          <div className='text-white ms-1 ' style={{fontSize: 18, fontWeight: 600}}>Bogdy</div>
          <div className='text-white fs-6 ms-1 '>Hello!</div>
        </Container>
      </Container>

    </>
    
  )
}

export default Chats