import React, { useState } from 'react'
import {routes} from '../../../constant'
import Navbar from './Navbar'
import Drawer from './Drawer'
export default function Navigation() {

  const [isOpen,setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);

  }
  return (


    <div>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer}></Drawer>
      <Navbar routes={routes} toggleDrawer={toggleDrawer}/>
    </div>
  )
}
