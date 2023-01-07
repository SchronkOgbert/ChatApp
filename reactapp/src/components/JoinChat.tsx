import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const JoinChat = () => {
  return (
    <>
    <Link to="/chatCheck">
        <div className='d-flex justify-content-center align-items-center bg-dark bg-opacity-75 rounded shadow-lg ' style={{width: 200, height: 80, marginLeft: 50, marginTop: -100}}>
            <div className='fw-bold fs-4' style={{color:'white'}}>
                Join Chat
           </div>
        </div>
    </Link>
    </>
    
  )
}

export default JoinChat