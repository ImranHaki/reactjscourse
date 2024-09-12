import React, { useState } from 'react' 

const Products = () => {

    const [fruits, setFruits] = useState([
        { id: 1, name: "Apple" },
        { id: 2, name: "Orange" },
        { id: 3, name: "Banana" },
        { id: 4, name: "Grapes" },
    ])

    const deleteById = id => {
        setFruits(oldValues => {
            return oldValues.filter(fruit => fruit.id !== id)
        })
    }

    


  return (
    <div>
      <ul>
        {fruits && fruits.map(fruit => (
            <li key={fruit.id}>
                <span>{fruit.name}</span>
                <button onClick={() => deleteById(fruit.id)}>Delete</button>
            </li>
        ))}

      </ul>
    </div>
  )
}

export default Products
