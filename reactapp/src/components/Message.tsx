import React from 'react'
import { Container } from 'react-bootstrap'

const Message = (props : any) => {
  return (
    <Container className='d-flex align-items-center bg-white fw-bold bg-opacity-75 rounded shadow-lg' style={{color:'black', height:50}}>
       <div>
        props.message

       </div>
    </Container>
  )
}

export default Message