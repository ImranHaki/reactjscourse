import React from 'react'

const AccessDenied = () => {
    const login = (e) => {
        e.preventDefault()
        
    };
  return (
    <div>
      <h1>THY ART NOT ALLOWED ACCESS!</h1>
      please login
      <button onClick={login}></button>
    </div>
  )
}

export default AccessDenied
