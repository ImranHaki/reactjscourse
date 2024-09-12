import logo from './logo.svg';
import './App.css';
import Cars from './Cars';
import Headers from './Headers';
import Buttons from './Buttons';
import FormSubmit from './FormSubmit';
import Products from './Products';
import Module6Challenge from './Module6Challenge';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigationbar from './Navigationbar';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'; 
import Errors from './Errors';
import ContactNumber from './ContactNumber';
import Admin from './Admin';
import React, { useState, useEffect } from "react";
import AccessDenied from './AccessDenied';
import Product from './Product';
import { UserContext } from './TimeInfoContext';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import EditRegistration from './EditRegitration';
import Movies from './Movies';


const price = 2000;
const tax = price * 0.10;

const price2 = 8000;

const price3 = 9000;

const car = "MG Hector";

const specifications = {
  length : 4655,
  width : 1835,
  height : 1760
}

const getDimensions = specifications => (
  `${specifications.length}(mm) ${specifications.width}(mm) ${specifications.height}(mm) `
)

const result = () =>{
  if(price < 5000)
  {
    return <h2> Car3 price {price3 + (price3 * 0.05)}</h2>
  }
  else
  {
    return <h2> Car3 price {price3 + (price3 * 0.15)}</h2>
  }
}

const cars = ["MG Hector","Hyundai Venue","Toyota Fortruner","Hyundai Creta","Batmobile"];

const carList = cars.map((car) =>
  <li key={car.toString()}>{car}</li>
)

// challenges

const countries = [
{name: 'Singapore', city: 'Singapore', population: '6,014,723'},
{name: 'Thailand', city: 'Bangkok', population: '71,801,279'},
{name: 'Malaysia', city: 'Kuala Lumpur', population: '34,308,525'},
{name: 'Indonesia', city: 'Jakarta', population: '227,534,122'},
{name: 'Phillipines', city: 'Manila', population: '117,337,368'},
]

const countriesList = countries.map((country) =>
  <li key={country.name.toString()}>{`${country.name} - ${country.population}
${country.city}`}</li>
  
)

const data = [
  {name: 'John', age: 23, gender: 'Male'},
  {name: 'Mary', age: 32, gender: 'Female'},
  {name: 'Crystal', age: 18, gender: 'Female'},
]

const prodData = [
  {
    img: 'https://tinyurl.com/2z4ee56f', 
    name: "Cyxus", 
    desc: 'Non-Slip Sneakers',
    price: '$29'
  },
  {
    img: 'https://tinyurl.com/ypfsydte', 
    name: "Vitike", 
    desc: 'Black Sneakers',
    price: '$100'
  },
  {
    img: 'https://tinyurl.com/47vkbjex', 
    name: "Aomei", 
    desc: 'Sports shoe',
    price: '$40'
  }
]

const newProdData = [
  {
    img: 'https://tinyurl.com/ycx377jd', 
    name: "Fjallraven bag", 
    desc: 'Its a bag. You put stuff in it to carry around.',
    price: '$109.95'
  },
  {
    img: 'https://tinyurl.com/mwk67v87', 
    name: "T-shirt", 
    desc: 'Its a T-shirt. Wear it',
    price: '$22.3'
  },
  {
    img: 'https://tinyurl.com/yhn58smv', 
    name: "Cotton Jacket", 
    desc: 'Dont wear this in the summer. Unless you wanna swim while walking.',
    price: '$55.99'
  }
]





function App() {
  const [user, setUser] = useState("null")

  const ProtectedRoute = ({user,redirectPath = '/accessdenied'}) => {
    if(!user){return <Navigate to={redirectPath}replace/>;
  }
  return <Outlet/>
  }

  const Layout = () => {
    return (
      <div>
        <Navigationbar/>
        <Outlet/>
      </div>
    )
  }

  const [count, setCount] = useState(0)

  const [date,setDate] = React.useState(new Date())

  // React.useEffect(() => {
  //   const timerID = setInterval(() => tick(), 1000)
  //   return function cleanup() {
  //     clearInterval(timerID)
  //   }
  // })

  // function tick() {
  //   setDate(new Date())
  // }

  React.useEffect(() => {
    if(!userData){
      const timerID = setInterval(() => tick(), 1000)
      return function cleanup() {
        clearInterval(timerID)
      }
    }else{
      setUserInfo(userData.name)
    }
    
  })

  function tick() {
    setDate(new Date())
  }

useEffect(()=> {
  document.title = `you clicked ${count} times`
},[count])

const handleClick = (e) => {
  e.preventDefault()
  setCount(count + 1)
}

const [userInfo, setUserInfo] = React.useState('')

const userData = JSON.parse(sessionStorage.getItem("userName"))



  return (
    <div>
      {/* <UserContext.Provider value= {date.toLocaleTimeString()}> */}
      <UserContext.Provider value= {userInfo? "Welcome " + userInfo : "The time now is: " + date.toLocaleTimeString()}>
      <Navigationbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/products' element={<Product prodList={[...prodData, ...newProdData]}/>}/>
        <Route path='/about/:yourname' element={<About/>}/>
        <Route path='/contact' element={<Contact customer={data}/>}>
          <Route path='contactnumber' element={<ContactNumber/>}/>
        </Route>
        <Route path='/error' element={<Errors/>}/>
        <Route path='/accessdenied' element={<AccessDenied/>}/>
        <Route path='/registration' element={<RegistrationForm/>}/>
        <Route path='/editregistration' element={<EditRegistration/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path='/dashboard' element={<Admin/>}/>
        </Route>
      </Routes>
      </UserContext.Provider>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo"/>
    //     <p>You clicked {count} times</p>
    //     <button type="submit" onClick={handleClick}>CLICK ME!</button>
    //   </header>
    // </div>
  );
}

export default App;
