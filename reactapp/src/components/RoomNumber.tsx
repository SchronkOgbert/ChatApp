import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { getRoomCode } from '../api/api-routes'
import Cookies from 'js-cookie';

const RoomNumber = () => {
  
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center bg-primary fw-bold bg-opacity-75 w-25 rounded shadow-lg' style={{color:'white', marginLeft:668, height:50}}>
        <div>
          {'Room code: ' +  Cookies.get("roomCode")}
        </div>
      </Container>
    </>
  )
}

export default RoomNumber