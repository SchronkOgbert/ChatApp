import React from 'react'
import { Container } from 'react-bootstrap'

const RoomNumber = () => {
  //trebuie generat un cod random la fiecare render
  return (
    <Container className='d-flex justify-content-center align-items-center bg-primary fw-bold bg-opacity-75 w-25 rounded shadow-lg' style={{color:'white', marginLeft:668, height:50}}>
        <div>
            Room code: H321G39
        </div> 
    </Container>
  )
}

export default RoomNumber