import React, { use } from 'react'
import Country from './Country';

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <>
      <h1>Countries: {countries.length}</h1>
      <div className='grid grid-cols-3 gap-4'>
        {countries.map(country => <Country country={country}></Country>)}
      </div>
     </>
  )
}

export default Countries