import React from 'react'
// import Sidebar from '../sidebar/Sidebar'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
