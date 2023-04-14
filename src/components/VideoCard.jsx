import React from 'react';
import '../styles/VideoCard.css'

const VideoCard = ({index, image, name}) => {
    const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M320 853V293l440 280-440 280Z"/></svg>;
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
        {/* <img src={image} alt={`${index} img`} /> */}
        <a href="#/">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard