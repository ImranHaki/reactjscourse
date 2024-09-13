import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const FactURL = 'https://api.themoviedb.org/3/movie/popular?api_key='
const apiKey = 'e4943bb541605c50d3877eebda6ea42c'

const FactTitleURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`

const planetSearchUrl = "https://api.api-ninjas.com/v1/planets?name="
const starSearchUrl = "https://api.api-ninjas.com/v1/stars?name="

axios.defaults.headers['X-API-KEY'] = 'tL/BKoOp7Qj17ct4pzLbxw==VAzD9Xo0b4tsFNiz';

const Facts = () => {

    const [planets, setPlanets] = useState([])
    const [stars, setStars] = useState([])
    const [celestialBody, setcelestialBody] = useState('')

    const searchCelestialBody = async(searchCelestialBody) => {
        const planetsResponse = await axios.get(`${planetSearchUrl}${searchCelestialBody}`)
        console.log(`Searching for ${searchCelestialBody} with url ${planetSearchUrl}`)
        const starsResponse = await axios.get(`${starSearchUrl}${searchCelestialBody}`)
        console.log("planets API response: " + planetsResponse.data)
        console.log("stars API response: " + starsResponse)
        setPlanets(planetsResponse.data)
        setStars(starsResponse.data)
    }

    const handleChange = (event) => {
        setcelestialBody(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        searchCelestialBody(celestialBody)
    }



  return (
    <section className='facts-section bg-light' id='facts'>
    <Tooltip id="my-tooltip" />
    <div className="container ">
        <form>
            <div className='input-group mb-3'>
                <input type='text' name='searchCelestialBody' onChange={handleChange} value={celestialBody}
                className='form-control' placeholder='search planet or star'/>
                <span>
                    <button className='btn btn-primary' type='submit' onClick={handleSearch}>Search</button>
                </span>
            </div>
        </form>
            <div className="row row-cols-1 row-cols-md-3 g-4" id='planetFacts'>           
                {planets.map((planetlist) => {
                    return (
                        <div className="col" key={planetlist.name}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{planetlist.name}</h5>
                                <p className="card-text" >Mass (compared to Earth): {planetlist.mass ? planetlist.mass:'Information not found'}</p>
                                <p className="card-text">Radius: {planetlist.radius ? planetlist.radius:'Information not found'}</p>
                                <p className="card-text">Period: {planetlist.period ? planetlist.period:'Information not found'}</p>
                                <p className="card-text">Semi Major Axis: {planetlist.semi_major_axis ? planetlist.semi_major_axis:'Information not found'}</p>
                                <p className="card-text">Temperature: {planetlist.temperature ? planetlist.temperature:'Information not found'}</p>
                                <p className="card-text">Distance in light year: {planetlist.distance_light_year ? planetlist.distance_light_year:'Information not found'}</p>
                                <p className="card-text">Host star mass: {planetlist.host_star_mass ? planetlist.host_star_mass:'Information not found'}</p>
                                <p className="card-text">Host star temperature: {planetlist.host_star_temperature ? planetlist.host_star_temperature:'Information not found'}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Classification: Planet</small>
                            </div>
                        </div>
                        </div>
                    )
                })}
                {stars.map((starlist) => {
                    return (
                        <div className="col" key={starlist.name}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{starlist.name}</h5>
                                <p className="card-text">Part of Constellation: {starlist.constellation ? starlist.constellation:'Information not found'}</p>
                                <p className="card-text">Right ascension: {starlist.right_ascension ? starlist.right_ascension:'Information not found'}</p>
                                <p className="card-text">Declination: {starlist.declination ? starlist.declination:'Information not found'}</p>
                                <p className="card-text">Apparent magnitude: {starlist.constellation ? starlist.constellation:'Information not found'}</p>
                                <p className="card-text">Absolute magnitude: {starlist.constellation ? starlist.constellation:'Information not found'}</p>
                                <p className="card-text">Distance in light year: {starlist.distance_light_year ? starlist.distance_light_year:'Information not found'}</p>
                                <p className="card-text">Spectral_class: {starlist.spectral_class ? starlist.spectral_class:'Information not found'}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Classification: Star</small>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>   
</div>
</section>
  )
}

export default Facts
