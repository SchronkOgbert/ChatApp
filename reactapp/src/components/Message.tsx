import React, { useState } from 'react'
import { Container } from 'react-bootstrap'




interface TextProps{
  content: string
}

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const IMG_REGEX = /^(.*(jpg|jpeg|png|webp|bmp).*)$/igm;

function Text({ content }: TextProps) {
  const words = content.split(' ');
  return (
    <div className='d-flex align-items-center rounded mt-3'  style={{color:'black', marginLeft: 7}}>
    <p>
      {words.map((word) => {
        return word.match(IMG_REGEX) ? (
          <>
            <img style={{width:400}} src={word} />
          </>
        ) : (
          word.match(URL_REGEX) ? (
            <>
            <a target='_blank' href={word}>{word}</a>{ ' ' }
          </>
        ) : (
          word + ' '
        ));
      })}
    </p>
    </div>
  );
}



const Message = (props : any) => {

  let message = props.message
  const user = message.split(' ',1);
  message=message.slice(user.length-1);
  return (
    <>
   
    <Container className='d-flex  rounded bg-white bg-opacity-75 shadow-sm mt-1 flex-column justify-content-start' style={{color:'black', height:"auto", width:"auto", margin:"auto" }}>
    <div>
      {user}
    </div>     
      <Text content={message}/>
    
    </Container>
    </>
  )
}

export default Message