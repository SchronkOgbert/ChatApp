import React from 'react'
import { Container } from 'react-bootstrap'
import RoomNumber from './RoomNumber'
import Cookies from 'js-cookie';

const ChatView = () => {
  return (
    <Container className='bg-primary bg-opacity-25 w-75 rounded-end shadow-lg'>
      <RoomNumber/>
    </Container>
  )
}

export default ChatView