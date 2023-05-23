import React from 'react';

const Chefs = () => {

const gotThedata = localStorage.getItem("chefdata")
const real = JSON.parse(gotThedata)
// console.log(gotThedata)
console.log(real)

    return (
       <div className='flex mt-32'>

            <div className='w-[65%]'>


                    <div className='flex gap-5'>
                        <div>
                            <div className='flex flex-row-reverse bg-yellow-400 '>



                                <div>
                                    <p className='font-bold text-xl'>{real.cool_tea_item[0].item_name}</p>
                                    <p className='font-bold'>{real.cool_tea_item[0].instructions}</p>
                                    <p className='font-bold'>RATING:{real.cool_tea_item[0].item_rate}</p>
                                </div>

                                <div className='w-48'>
                                    <img className='w-full' src={real.cool_tea_item[0].item_image} alt="" /> 
                                </div>

                                
                            </div>

                            
                        </div>
                    {/*         
                        <div className='w-80 h-48'>
                            <img className='w-full h-full' src={real.profile_picture} alt="" />
                        </div> */}
                    </div>

                    <div className='flex gap-5'>
                        <div>
                            <div className='flex flex-row-reverse bg-yellow-400 '>



                                <div>
                                    <p className='font-bold text-xl'>{real.cool_tea_item[1].item_name}</p>
                                    <p className='font-bold'>{real.cool_tea_item[1].instructions}</p>
                                    <p className='font-bold'>RATING:{real.cool_tea_item[1].item_rate}</p>
                                </div>

                                <div className='w-48'>
                                    <img className='w-full' src={real.cool_tea_item[1].item_image} alt="" /> 
                                </div>

                                
                            </div>

                            
                        </div>

                        {/* <div className='w-80 h-48'>
                            <img className='w-full h-full' src={real.profile_picture} alt="" />
                        </div> */}
                    </div>

                    <div className='flex gap-5'>
                        <div>
                            <div className='flex flex-row-reverse bg-yellow-400 '>



                                <div>
                                    <p className='font-bold text-xl'>{real.cool_tea_item[2].item_name}</p>
                                    <p className='font-bold'>{real.cool_tea_item[2].instructions}</p>
                                    <p className='font-bold'>RATING:{real.cool_tea_item[2].item_rate}</p>
                                </div>

                                <div className='w-48'>
                                    <img className='w-full' src={real.cool_tea_item[2].item_image} alt="" /> 
                                </div>

                                
                            </div>

                            
                        </div>

                        {/* <div className='w-80 h-48'>
                            <img className='w-full h-full' src={real.profile_picture} alt="" />
                        </div> */}
                    </div>


            </div>

            <div className='w-80 '>
                            <img className='w-full h-full' src={real.profile_picture} alt="" />
             </div>


</div>
    );
};

export default Chefs;