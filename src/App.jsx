import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <div className='p-4'>
      <Suspense fallback={<p className='text-red-600 text-2xl font-extrabold underline-offset-0'>Countries are loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  )
}

export default App
