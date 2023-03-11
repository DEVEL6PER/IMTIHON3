import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <h1>HELLO</h1>
      <h1>XR_DEVELOPER</h1>
    </div>
  )
}

export default Layout
