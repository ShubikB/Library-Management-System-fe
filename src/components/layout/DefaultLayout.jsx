import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
