import React from 'react';
import HotItemCard from './HotItemCard.jsx';
import '../styles/HotAccessories.css';


const  HotAccessories = ({dataImage, dataImageCover}) => {
  return (
    <div className='HotAccessories'>
      <div >
        <img className='coverBgImage' src={dataImageCover} alt="Cover" />
      </div>
      <div className='accessoriesWraper'>
        {
          dataImage.map((e,i)=>(
            <HotItemCard key={i} name={e.name} price={e.price} image={e.image} index={i}/>
          ))
        }
            <HotItemCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg' />

      </div>
      
    </div>
  )
}

export default HotAccessories