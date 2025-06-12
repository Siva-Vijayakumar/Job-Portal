import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import JobListings from '../components/jobListings'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

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