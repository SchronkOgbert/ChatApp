import React from 'react'
import { Container } from 'react-bootstrap'
import StartNewChat from './StartNewChat'
import JoinChat from './JoinChat'
import Sidebar from './Sidebar'

const MainChooseChat = () => {
  return (
    <>
        <Container className='d-flex rounded-sm' style={{height: 800}}>
           <Sidebar/>
           <Container className='d-flex justify-content-center align-items-center bg-primary bg-opacity-50 rounded shadow-lg' style={{}}>
               <StartNewChat/>
               <JoinChat/>
          </Container>
        </Container>
       
    </>
  )
}

export default MainChooseChat