import ChatView from './ChatView'
import { Container } from 'react-bootstrap'

const NewChat = () => {
  return (
    <>
    <Container className='d-flex rounded-sm' style={{height: 650}}>
        <ChatView/> 
    </Container>
    
    </>
  )
}

export default NewChat