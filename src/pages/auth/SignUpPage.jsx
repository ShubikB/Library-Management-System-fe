import React from "react"
import { UserSingUpForm } from "../../components/forms/UserSignupForm"

const SignUpPage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: "450px" }} className='card p-3 shadow-lg'>
        <UserSingUpForm />
      </div>
    </div>
  )
}

export default SignUpPage
