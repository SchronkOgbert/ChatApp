import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Message = (props : any) => {

  // const [mesaj, setMesaj] = useState(); 
  // setMesaj(props.message);
  const mesaj = props.message
  return (
    <Container className='d-flex align-items-center bg-white fw-bold bg-opacity-75 rounded shadow-lg' style={{color:'black', height:50}}>
       <div>
        {mesaj}
       </div>
    </Container>
  )
}

export default Message