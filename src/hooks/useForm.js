import { useState } from "react"

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  return {
    form,
    setForm,
    handleOnChange,
  }
}

export default useForm
