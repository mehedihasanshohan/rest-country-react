import React, { useState } from 'react'

const Country = ({country}) => {

  const [visited, setVisited] = useState(false);

  const handleVisit = () =>{
    setVisited(!visited);
  }
  // console.log(country);
  const {area, capital, flags, name, population, region} = country;

  return (
    <>
    <div className='flex justify-between items-center gap-2 border border-amber-300 rounded-lg mt-4 p-4'>
      <div>
        <h2>Name: <span className='text-rose-300 font-medium'>{name.common}</span> </h2>
        <p>Area: {area.area}</p>
        <p> Capital: <span className='text-blue-300 font-medium'>{capital.capital[0]}</span></p>
        <p>Region: {region.region}</p>
        <p>Population: {population.population} <br /> {population.population > 200000 ? 'A Large Country' : 'A Small Country'}</p>
        <button onClick={handleVisit} className='mt-2' >{visited? 'Visited' : 'Not Visit yet'}</button>
      </div>
      <div className=''>
        <img className='h-24 w-40 object-cover rounded-2xl' src={flags.flags.svg} alt="" />
      </div>
    </div>
    </>
  )
}

export default Country