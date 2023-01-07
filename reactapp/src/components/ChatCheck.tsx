import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import NewChat from './NewChat';

const ChatCheck = () => {
const [success, setSuccess] = useState(false);
  return (
    <>
    {success ? (
        <NewChat/> //AICI TREBUIE DUS USERUL LA CHATUL CORESPONDENT CODULUI
    ) : (
      <Container className='d-flex justify-content-center align-items-center bg-primary bg-opacity-75 rounded shadow-lg' style={{height:800}}>
      <div className='d-flex justify-content-center align-items-center bg-dark bg-opacity-75 rounded shadow-lg' style={{height: 150, marginTop: -200}}>
          <div className='d-flex justify-content-center align-items-center flex-column fw-bold fs-5 m-3' style={{color:'white'}}>
              <div>Enter Chat Code</div>
              <input className='mt-3' type="text" name="name"/>
              <Link to="/createChat">
                <Button className='bg-dark mt-2' type="submit" value="Submit">
                  <div className='fw-bold' style={{color:'white'}}>
                      Enter
                  </div>
                </Button>
              </Link>
          </div>
      </div>
    </Container>
    )}
        
    </>
  )
}

export default ChatCheck