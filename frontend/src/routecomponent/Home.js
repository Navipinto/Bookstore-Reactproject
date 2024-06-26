import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebooks from '../components/Freebooks'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Banner/>
        <Freebooks/>
        <Footer/>
    </div>
  )
}

export default Home