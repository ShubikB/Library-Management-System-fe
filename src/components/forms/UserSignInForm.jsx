import React from "react"
import { Button, Form } from "react-bootstrap"
import { CustomInput } from "../custom-input/CustomInput"
import { userSignInInputs } from "../../assets/form-data/userAuthInput"
import { apiHelper } from "../../helper/axiosHelper"
import useForm from "../../hooks/useForm"

export const UserSignInForm = () => {
  const { form, handleOnChange } = useForm({})

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = await apiHelper({
      method: "post",
      url: "/api/v1/user/signin",
      data: form,
    })
    console.log(data)
  }

  return (
    <div>
      <h3>Sign In</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {userSignInInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className='mb-3 d-grid' controlId='formBasicEmail'>
          <Button type='submit'>Sign In</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
