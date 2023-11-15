import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const Search = () => {

    const [username, setUsername] = useState("");

  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control
                className='shadow-none'
                placeholder="Search"
                onChange={e => setUsername(e.target.value)}
            />
        </InputGroup>
        
    </>

  )
}

export default Search