import React, { useState } from 'react'
import { Container } from 'react-bootstrap'




interface TextProps{
  content: string
}

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const IMG_REGEX = /.*\.(gif|jpe?g|bmp|png)$/igm;

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

  const mesaj = props.message
  const user = props.user
  return (
    <Container className='d-flex align-items-center rounded shadow-lg mt-1' style={{background:"white", color:'black', height:"auto", width:"auto", margin:"auto" }}>     
       <div> 
       {user}:
      </div>
      <Text content={mesaj}/>
    
    </Container>
  )
}

export default Message