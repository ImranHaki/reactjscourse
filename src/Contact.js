import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = (myprop) => {
  const [customers, setCustomers] = useState(myprop.customer)
  
  return (
    <div>
      {customers.map((customerList) => {
        return (<div>
          <h1>{customerList.name}</h1>
          <h1>{customerList.age}</h1>
          <h1>{customerList.gender}</h1>
        </div>)
      }
      )}
    </div>
  )
}

export default Contact
