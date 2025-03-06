import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const UserLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default UserLayout
