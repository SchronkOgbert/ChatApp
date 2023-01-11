import React from 'react'
import { Container } from 'react-bootstrap'
import RoomNumber from './RoomNumber'
import Cookies from 'js-cookie';
import Image from 'react-bootstrap';

interface TextProps{
  content: string
}

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const IMG_REGEX = /.*\.(gif|jpe?g|bmp|png)$/igm;

function Text({ content }: TextProps) {
  const words = content.split(' ');
  return (
    <p>
      {words.map((word) => {
        return word.match(IMG_REGEX) ? (
          <>
            <img style={{width:200}} src={word} />
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
  );
}

const ChatView  = () => {

  const [text,setText]=React.useState("https://www.emag.ro/ CEVA TEXT PE AICI");
  const [poza,setPoza]=React.useState("https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg");

  return (
    <>
    <div className='bg-primary bg-opacity-25 w-75 rounded-end shadow-lg'>
        <RoomNumber />
        <Text content={text}/>
        
    </div>
    </>
 
  )
}

export default ChatView