import React from 'react'
import '../stylesheets/Section.css'

const Section = (props) => {
  return (
    <div className='Section' id={props.id}>
      <p>{props.text}</p>
    </div>
  )
}

export default Section
