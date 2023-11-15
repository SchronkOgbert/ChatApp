import Cookies from 'js-cookie';
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { doesRoomExist } from '../api/api-routes';
import NewChat from './NewChat';

const ChatCheck = () => {
const [success] = useState(false);
const [roomNumber,setRoomNumber] = useState("");

  return (
    <>
    {success ? (
        <NewChat/>
    ) : (
      <Container className='d-flex justify-content-center align-items-center bg-primary bg-opacity-50 rounded shadow-lg' style={{height:650}}>
      <div className='d-flex justify-content-center align-items-center bg-dark bg-opacity-75 rounded shadow-lg' style={{height: 150, marginTop: -200}}>
          <div className='d-flex justify-content-center align-items-center flex-column fw-bold fs-5 m-3' style={{color:'white'}}>
              <div>Enter Chat Code</div>
              <input className='mt-3' type="text" name="name"  value = {roomNumber} onChange={(e) => setRoomNumber(e.target.value)}/>
              <Link to="/chatCheck">
                <Button className='bg-dark mt-2' type="submit" value="Submit" onClick={() => doesRoomExist(Cookies.get("csrfToken"),roomNumber)}>
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