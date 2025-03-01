import React from "react"
import { UserSignInForm } from "../../components/forms/UserSignInForm"

const SignInPage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: "450px" }} className='card p-3 shadow-lg'>
        <UserSignInForm />
      </div>
    </div>
  )
}

export default SignInPage
