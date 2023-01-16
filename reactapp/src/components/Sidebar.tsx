import { useState } from 'react';
import Chats from './Chats'
import Search from './Search'
import SideNav from './SideNav'

const Sidebar = () => {
  
  
  return (
    <div className='bg-primary bg-opacity-75 w-25 rounded-start shadow-lg'>
      <SideNav/>
      <Chats/>
    </div>
  )
}

export default Sidebar