import React from 'react';

const Offer = ({src, link, i}) => {
  return (
    <a href={link}>
        <img src={src} alt={`${i} Offer`} />
    </a>
  )
}

export default Offer