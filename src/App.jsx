import React from "react"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/Layout/DefaultLayout"
import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/auth/SignUpPage"
import SignInPage from "./pages/auth/SignInPage"
import UserLayout from "./components/Layout/UserLayout"
import Dashboard from "./pages/dashboard/Dashboard"

const App = () => {
  return (
    <>
      <Routes>
        {/* public routes  */}
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='signin' element={<SignInPage />} />
        </Route>

        {/* private routes  */}
        <Route path='/user' element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
