import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import SendMessage from './SendMessage'

const Chat = () => {
  return (
    <Container className='d-flex flex-column justify-content-center p-5' style={{marginTop:500}}>
        <Message/>
        <SendMessage />
    </Container>
  )
}

export default Chat