import React from 'react';
import upImg from '../../assets/images/homeBg2.png';
import downImg from '../../assets/images/homeBg.png';
import alphalogo from "../../assets/images/alphageek-logo.png"

const Home = () => {
  return (
    <div className='h-[65vh]'>
    <div className='relative h-full'>
            <img src={upImg} alt="bg" className='absolute top-0 right-0 '/>
        <img src={downImg} alt="bg" className='absolute left-0 top-full'/>
        
        <img src={alphalogo} alt="" className='absolute left-[30%] top-1/2'/>
    
    </div>
    
    </div>
  )
}

export default Home
