import React from 'react'
import { Container } from 'react-bootstrap'
import StartNewChat from './StartNewChat'
import JoinChat from './JoinChat'

const MainChooseChat = () => {
  return (
    <>
        <Container className='d-flex justify-content-center align-items-center bg-primary bg-opacity-75 rounded shadow-lg' style={{}}>
           <StartNewChat/>
           <JoinChat/>
        </Container>
    </>
  )
}

export default MainChooseChat