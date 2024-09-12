import React, { useState } from 'react' 
const FormSubmit = () => {
    const [inputBox, setInputBox] = useState("");
    const [name, setName] = useState("");
    

    const handleFormSubmit = (event) => {
        setInputBox(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        let inputValue = inputBox
        alert("OIIIIIIIIIIIIIIIIIIIIII")
        setName(inputBox)
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:
            <input type='text' value={inputBox} onChange={handleFormSubmit}/>
        </label>
      <input type='submit' value="Submit"></input>
      <br/>
      <label>{name}</label>

      </form>
    </div>
  )
}

export default FormSubmit
