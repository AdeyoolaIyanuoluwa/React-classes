import React from 'react'
import './App.css'
// import google  from './google.png'
import google  from './gg.svg'
import dots from './dots.png'
import search from './search.png'
import voice from './voice.png'

const Home=()=>{
   return (
    <div>
        <Navbar/>
        <Search/>
        <Shortcut/>
    </div>
  )
}

const Navbar=()=> {
  return (
    <nav>
      <div className='flex-end'>
        <a href='#' className='text-dark fw-normal'>Gmail</a>
        <a href='#' className='ms-3 text-dark fw-normal'>Images</a>
        <img className='ms-3' src={dots} alt=""/>
        <button className='rounded-circle btn btn-primary fw-semibold ms-3'>A</button>
      </div>
    </nav>
  )
}

const Search=()=>{
  return (
  <center className='container cont'>
      <div>
       <img className='img' src={google} alt=""/>
        <br/>
        {/* <div className='shadow-sm w-50 rounded-pill'> */}
        <div className='shadow w-50 rounded-pill'>
        <img className='pb-2' src={search} alt=""/>
        <input className='rounded-pill fs-5 p-1 input' placeholder='Search Google or type a URL'/>
        <img className='pb-2' src={voice} alt=""/>
        </div>
    </div>
  </center>
  )
}


const Shortcut=()=> {
  return (
      <center className='container'>
        <div className='p-5'>
        <button className='rounded-circle btn btn-secondary fw-semibold'>A</button>
        <button className=' ms-4 btn-secondary fw-semibold rounded-circle btn'>A</button>
        <button className=' ms-4 btn-secondary fw-semibold rounded-circle btn'>A</button>
        <div className='mt-4'>
        <button className='rounded-circle btn btn-secondary fw-semibold'>A</button>
        <button className=' ms-4 btn-secondary fw-semibold rounded-circle btn'>A</button>
        <button className=' ms-4 btn-secondary fw-semibold rounded-circle btn'>A</button>
        </div>
      </div>
      </center>
  )
}


export default Home