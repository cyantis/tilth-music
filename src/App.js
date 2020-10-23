import React from 'react'
import './stylesheets/App.css'
import Bio from './components/Bio.js'
import Footer from './components/Footer.js'
import Discography from './components/Discography'

const App = () => {
  return (
    <div className='App'>
      <h1>Tilth</h1>
      <Bio id={'bio'} />
      <Discography id={'discography'} />
      <Footer />
    </div>
  )
}

export default App
