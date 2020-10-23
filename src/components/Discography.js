import React from 'react'
import '../stylesheets/Section.css'

const Bio = (props) => {
  return (
    <div className='Section' id={props.id}>
      <h2>Discography</h2>
      <h4>
        <i>Country Music</i> (
        <a href='https://roundbalerecordings.bandcamp.com/'>
          Round Bale Recordings
        </a>
        , 2015)
      </h4>
      <iframe
        style={{ border: 0, width: '100%', height: '120px' }}
        src='https://bandcamp.com/EmbeddedPlayer/album=1092081322/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/track=2417906687/transparent=true/'
        seamless
      >
        <a href='https://roundbalerecordings.bandcamp.com/album/country-music'>
          Country Music by Tilth
        </a>
      </iframe>
      <h4>
        <i>Angular Music</i> (<a href='https://softabuse.com/'>Soft Abuse</a>,
        2012)
      </h4>
      <iframe
        width='100%'
        height='166'
        scrolling='no'
        frameborder='no'
        allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/61436922&color=%2358734c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
      ></iframe>
    </div>
  )
}

export default Bio
