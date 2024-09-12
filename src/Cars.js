import React from 'react'

const carsOG = ["MG Hector","Hyundai Venue","Toyota Fortruner","Hyundai Creta","Batmobile"];
const cars = [
    {"brand": "Saab", "models": ["9-3", "9-3 Cabriolet", "9-3 Coupe", "9-3 SportCombi", "9-5", "9-5 SportCombi", "900", "900 C", "900 C Turbo", "9000"]},
    {"brand": "Jeep", "models": ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"]},
    {"brand": "Land Rover", "models": ["109", "Defender", "Discovery", "Discover Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport"]},
]

const Cars = () => {
  return (
    <div>
      <ul>
        {cars.map((car, index) =>
        <li key={index}><h1>{car.brand}</h1>
        <ul>
        {car.models.map((model, i) =>
            <li >{model}</li>
            )}
        </ul>
        </li>
        )}
      </ul>
     </div>
  )
}




export default Cars
