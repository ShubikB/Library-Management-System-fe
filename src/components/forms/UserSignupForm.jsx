import React from "react"
import { Button, Form } from "react-bootstrap"
import { CustomInput } from "../custom-input/CustomInput"
import { userSignUpInputs } from "../../assets/form-data/userAuthInput"
import useForm from "../../hooks/useForm"

export const UserSingUpForm = () => {
  const { form, setForm, handleOnChange } = useForm({})

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <h3>Join our community !</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {userSignUpInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className='mb-3 d-grid' controlId='formBasicEmail'>
          <Button type='submit'>Sign Up Now</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
