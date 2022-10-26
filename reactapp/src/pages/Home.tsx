import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'

const Home = () => {
  const [auth, setAuth] = useState(false);
  if (!auth) {
    return <Navigate to="/login"/>
  }
  return (
    <div>Home


    </div>
  )
}
export default Home