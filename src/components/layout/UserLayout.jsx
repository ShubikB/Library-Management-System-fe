import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const UserLayout = () => {
  return (
    <div>
      <Header />

      <div className='d-flex'>
        <div className='left bg-dark text-white' style={{ width: "200px" }}>
          sidbar menu
        </div>
        <main className='main'>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default UserLayout
