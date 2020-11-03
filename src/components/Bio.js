import React from 'react'
import '../stylesheets/Section.css'

const Bio = (props) => {
  return (
    <div className='Section' id={props.id}>
      <p>
        Tilth are{' '}
        <a href='https://www.nathanmclaughlin.zone/'>Nathan McLaughlin</a> and{' '}
        <a href='http://codyyantis.com'>Cody Yantis</a>. Rooted in environment
        and place and utilizing strings, tape, horns, keys, and electronics,
        Tilth aims to offer purposeful, intentional music.
      </p>
    </div>
  )
}

export default Bio
