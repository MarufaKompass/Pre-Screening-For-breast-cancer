import React from 'react'
import Sidebar from '../sidebar/Sidebar'

export default function Layout({children}) {
  return (
    <div>
        <Sidebar></Sidebar>
        <main>{children}</main>
    </div>
  )
}
