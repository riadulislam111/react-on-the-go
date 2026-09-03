
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './Country/Countries/Countries';



const countriesPromise = async ():Promise<CountryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries
}



function App() {

  return (
    <>
      <h1>World On The Go</h1>
      <Suspense fallback = {<div>World Loading...</div>}>
     <Countries countriesPromise = {countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
