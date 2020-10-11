import React from 'react'
import './stylesheets/App.css'
import Section from './components/Section.js'
import Footer from './components/Footer.js'
import { bio, player } from './assets/Text.js'

const App = () => {
  return (
    <div className='App'>
      <h1>Tilth</h1>
      <Section text={bio} id={'bio'} player={player} />
      <Footer />
    </div>
  )
}

export default App
