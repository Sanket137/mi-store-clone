import React from 'react';
import Offer from './Offer';
import '../styles/Offer.css';


const Offers = (data) => {
   const offer = data.offers
  return (
    <div className='offersSection'>
        {
            offer.map((e,i)=>(
                // console.log(e.image, e.url)
                <Offer key={e.image} index={i} src={e.image} link={e.url}/>   
            ))
            // console.log(data.offers)
        }
    </div>
  )
}

export default Offers