import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Premium from '../components/Premium'
import Footer from '../components/Footer'
import Home from './Home'
import Signup from '../components/Signup'

function PremiumBooks() {
  
  return (
    <div>
        <Navbar/>
      <Premium/> 
      <Footer />
    </div>
  )
}

export default PremiumBooks