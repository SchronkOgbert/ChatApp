import React from 'react'


interface TextProps{
  content: string
}

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

function Text({ content }: TextProps) {
  const words = content.split(' ');
  return (
    <p>
      {words.map((word) => {
        return word.match(URL_REGEX) ? (
          <>
            <a target='_blank' href={word}>{word}</a>{ ' ' }
          </>
        ) : (
          word + ' '
        );
      })}
    </p>
  );
}
    

const ChatView  = () => {

  const [text,setText]=React.useState("https://elearning.e-uvt.ro/course/view.php?id=87096 CEVA TEXT PE AICI");

  return (
    <>
    <div className='bg-primary bg-opacity-25 w-75 rounded-end shadow-lg'>
        <Text content={text}/>
    </div>
    </>
 
  )
}

export default ChatView