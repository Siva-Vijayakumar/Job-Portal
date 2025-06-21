import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import JobListings from '../components/JobListings.jsx'
import AppDownload from '../components/AppDownload.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <JobListings />
        <AppDownload />
        <Footer />
    </div>
  )
}

export default Home