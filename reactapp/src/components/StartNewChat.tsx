import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getRoomCode } from '../api/api-routes'
import Cookies from 'js-cookie'

const StartNewChat = () => {
  return (
    <>
    <Link to="#" onClick={() => getRoomCode(Cookies.get("csrfToken"))}> 
        <div className='d-flex justify-content-center align-items-center bg-dark bg-opacity-75 rounded shadow-lg' style={{width: 200, height: 80, marginTop: -100}}>
           <div className='fw-bold fs-4' style={{color:'white'}}>
                Create Chat
           </div>
        </div>
    </Link>
    </>
  )
}

export default StartNewChat