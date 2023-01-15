import React, {useEffect, useRef, useState} from 'react'
import {Container, Form, InputGroup} from 'react-bootstrap'
import Message from './Message'
import SendMessage from './SendMessage'
import getChatSocket from '../api/WebSockets';
import Cookies from 'js-cookie';
import {useReducer} from 'react';


var chatSocket: any = null;
let listMessages: any[] = []
let messages: any[] = []
var rendering = false;

// chatSocket = getChatSocket(
//   Cookies.get("roomNumber"),
//   Cookies.get("user"),
//   Cookies.get("roomCode")
// )

// chatSocket.onopen = () => {
//   console.log('connected')
// }

// chatSocket.onmessage = (message:any) => {
//   rendering = false;
//   let mesajJSON = JSON.parse(message.data);
//   console.log("inside webhook"+mesajJSON.message);
//   messages.push(JSON.stringify(mesajJSON.message).slice(1,-1));
//   rendering = true;
// }


const Chat = () => {
    const [message, setMessage] = useState("");
    const [isPaused, setPause] = useState(false);
    const [ws, setWS] = useState(getChatSocket(
        Cookies.get("roomNumber"),
        Cookies.get("user"),
        Cookies.get("roomCode")
    ))
    const [webSocketReady, setWebSocketReady] = useState(false);

    useEffect(() => {
        ws.onopen = (e) => {
           setWebSocketReady(false);
           console.log('connected to websocket')
        }

        ws.onmessage = (message: any) => {
            let mesajJSON = JSON.parse(message.data);
            console.log("inside webhook: " + mesajJSON.message);
            messages.push(JSON.stringify(mesajJSON.message).slice(1, -1));
            listMessages = messages.map((item) =>
                <div>
                    <Message message={item}/>
                </div>)
            setWebSocketReady(true);
        }
        return () => ws.close();
        }, [ws]
    );


    function handleSubmit(event: any) {
        event.preventDefault();
        if (ws === null) return;
        ws.send(JSON.stringify({
            'message': message,
            'user': Cookies.get("user")
        }));
        setWebSocketReady(false);
        setMessage("");
    }

    return (
        <Container className='d-flex flex-column justify-content-center p-5' style={{marginTop: 500}}>

            {webSocketReady ? listMessages : listMessages + "loading.."}
            {/* This sends chat */}
            <Form noValidate onSubmit={handleSubmit} className='' style={{marginTop: 50}}>
                <Form.Group className="d-flex flex-column align-items-start" controlId="sendMessageForm">
                    <InputGroup className='d-flex flex-column' style={{height: 55}}>
                        <Form.Control
                            required
                            value={message}
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

function newDate() {
    throw new Error('Function not implemented.');
}
