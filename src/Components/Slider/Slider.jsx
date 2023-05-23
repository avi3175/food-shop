import React from 'react';
import tongGhor from '../../../public/images/images.jpg'
import tongCha from '../../../public/images/tong.jpg'
import welcome from '../../../public/images/shagotam.png'
import borno from '../../../public/images/borno.png'
const Slider = () => {
    return (
        <div className='bg-orange-300 mt-32'>
            {/* <p>MORE THINGS ARE ABOUT TO HAPPEN?</p> */}
            <div className='flex justify-center animate-bounce '>
               <img src={tongGhor} alt="" />
               <img className='w-12 ' src={borno} alt="" />
               
            </div>
          
          <img  className='mx-auto' src={welcome} alt="" />

            <div>
               <img className='mx-auto w-32 animate-bounce ' src={tongCha} alt="" />
            </div>
        </div>
    );
};

export default Slider;