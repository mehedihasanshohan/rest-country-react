import React, { use, useState } from 'react'
import Country from './Country';

const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('visited clicked', country);
    setVisitedCountries(countries=> {
      const exists = countries.find(country => country.cca3.cca3 === country.cca3.cca3);
      if(exists){
        return countries.filter(country => country.ccca3.cca3 !==country.cca3.cca3);
      } else{
        return[...countries,  country];
      }
    });
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;


  return (
    <>
      <h1>Countries: {countries.length}</h1>
      <div>
        <input className='bg-amber-100 text-black p-2 rounded-lg mt-2' placeholder='search country' type="text" />
        <button className='ml-4 bg-amber-100'>Search</button>
        <select
           className="border px-3 py-2 rounded mb-4 ml-4"
        >
          <option className='text-black' value="All">All Regions</option>
          <option className='text-black' value="Asia">Asia</option>
          <option className='text-black' value="Europe">Europe</option>
          <option className='text-black' value="Americas">Americas</option>
        </select>

      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 col-span-3'>
          {countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} country={country} key={country.cca3.cca3}></Country>)}
        <div className="col-span-1 border-l pl-4">
            <h2 className="font-bold mb-2">Visited Countries ({visitedCountries.length})</h2>
            <ul className="space-y-2">
               {visitedCountries.map(c => (
                  <li key={c.cca3.cca3} className="flex items-center gap-2">
                  <img src={c.flags.svg} alt={c.name.common} className="h-6 w-10 object-cover rounded" />
                  <span>{c.name.common}</span>
                  </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
     </>
  )
}

export default Countries