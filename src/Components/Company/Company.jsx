import React from 'react';
import welcome from '../../../public/images/shagotam.png'
import borno from '../../../public/images/borno.png'
const Company = () => {
    return (
        <div>

            <div className='bg-orange-300 mt-32'>
                {/* <p>MORE THINGS ARE ABOUT TO HAPPEN?</p> */}
                <div className='flex justify-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3WBfdDlvf_BDO2kjZ6ZA9KkFrKNm6VrCIbpz_6qjtQ&s" alt="" />
                    <img className='w-12 ' src={borno} alt="" />

                </div>

                <img className='mx-auto' src={welcome} alt="" />

                <div>
                    <img className='mx-auto w-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4LVQgvGdu594xZh3sWTOeKaAFL6cJMDy5Lc2foSd8A&s" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Company;