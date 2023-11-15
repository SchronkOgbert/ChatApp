import RoomNumber from './RoomNumber'
import Chat from './Chat';

const ChatView  = () => {
  return (
    <>
    <div className='bg-primary bg-opacity-50 w-100 rounded shadow-lg' style={{overflow: "none"}}>
        <RoomNumber />
        <Chat/> 
    </div>
    </>
 
  )
}

export default ChatView