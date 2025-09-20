import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Country = ({country, handleVisitedCountries}) => {

  const [visited, setVisited] = useState(false);

  const handleVisit = () =>{
    setVisited(!visited);
    toast(visited ? "Removed Country from visited list!" : "Country added to visited List!");
  }

  // console.log(country);
  const {area, capital, flags, name, population, region} = country;
  const density =  population.population/ area.area ;

  return (
    <>
    {/* <div className='flex justify-between items-center gap-2 border border-amber-300 rounded-lg mt-4 p-4'>
     */}
      <div
      className={`flex justify-between items-center gap-2 border rounded-lg mt-4 p-4 transition-colors duration-300 ${
        visited ? "bg-slate-700 text-white border-green-400" : "bg-[#242424] border-amber-300"
      }`}
    >
      <div>
        <h2>Name: <span className='text-rose-300 font-medium'>{name.common}</span> </h2>
        <p> Capital: <span className='text-blue-300 font-medium'>{capital.capital[0]}</span></p>
        <p>Region: {region.region}</p>

        {/* hover tooptip show on population */}
        <p className="relative group w-fit cursor-pointer">
           Population: {population.population}
           <span className="absolute bottom-full left-0 mb-1 hidden rounded bg-pink-800 px-2 py-1 text-xs text-white group-hover:block">
             {population.population > 200000 ? "A Large Country" : "A Small Country"}
          </span>
        </p>

        {/* density tooltip show on arae hover */}
        <p className="relative group w-fit cursor-pointer mt-2">
          Area: {area.area} km²
         <br />
          Density: {density.toFixed(2)} per km²
         <span
          className={`absolute bottom-full left-0 mb-1 hidden rounded px-2 py-1 text-xs text-white group-hover:block
          ${density > 100 ? "bg-red-600" : "bg-green-600"}`}
         >
          {density > 100 ? "Highly Dense Country" : "Low Density Country"}
         </span>
        </p>


        {/* <p>Population: {population.population} <br /> {population.population > 200000 ? 'A Large Country' : 'A Small Country'}</p> */}
          <button onClick={() => {handleVisit(); handleVisitedCountries(country)}} className='mt-2' >{visited? 'Visited' : 'Not Visit yet'}</button>
      </div>
      <div className=''>
        <img className='h-24 w-40 object-cover rounded-2xl' src={flags.flags.svg} alt="" />
      </div>
    </div>
    </>
  )
}

export default Country