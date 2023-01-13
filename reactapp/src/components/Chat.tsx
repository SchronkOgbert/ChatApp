import React, { useState } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import Message from './Message'
import SendMessage from './SendMessage'
import getChatSocket from '../api/WebSockets';
import Cookies from 'js-cookie';


class messageInfo{
    userName:String | undefined;
    postDate:Date | undefined;
    text:String | undefined;
}

const Chat = () => {
    const [message, setMessage] = useState("");

    console.log(Cookies.get("roomNumber") + " this is roomNumber");
    const chatSocket = getChatSocket(
        Cookies.get("roomNumber"),
        Cookies.get("user"),
        Cookies.get("roomCode"),
        (e:any) => {
            console.log(e);
            messages.push(e);
        },
        (e:any) => {
            
        }
    )

    function handleSubmit(event:any){
        chatSocket.send(JSON.stringify({
            'message': message,
            'user': Cookies.get("user")
        }));
        
        setMessage("")
        event.preventDefault();
      }
    
    const messages: messageInfo[] = [];

    const listMessages = messages.map((message) => 
      <div>
        <Message message/>
      </div>
    )
  return (
    <Container className='d-flex flex-column justify-content-center p-5' style={{marginTop:500}}>

        {listMessages}
        {/* This sends chat */}
        <Form noValidate onSubmit={handleSubmit} className='' style={{marginTop:50}}>
        <Form.Group className="d-flex flex-column align-items-start" controlId="sendMessageForm" >
            <InputGroup className='d-flex flex-column' style={{height:55}}>
                <Form.Control 
                  required 
                  value = {message} 
                  placeholder={"Enter message"}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-100'
                  />      
            </InputGroup>
        </Form.Group>
        </Form>
    </Container>
  )
}

export default Chat