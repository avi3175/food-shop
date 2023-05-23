import React from 'react';

const Review = () => {
    return (
        <div>
            <section className="bg-gray-100 py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Customer Reviews</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-start mb-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden">
                                    <img
                                        src="https://pbs.twimg.com/media/ExvL-TLVoAQ8L3Q.jpg"
                                        alt="Customer 1"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">TAHSAN</h4>
                                   
                                </div>
                            </div>
                            <img src="https://w0.peakpx.com/wallpaper/509/337/HD-wallpaper-bangla-life-tea.jpg" alt="" className='h-[250px] w-[300px]'/>
                        </div>


                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-start mb-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden">
                                    <img
                                        src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/03/07/13558943_10153748802173364_5470240456088137960_o_1.jpg"
                                        alt="Customer 2"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">MOSAROF KORIM</h4>
                                  
                                </div>
                            </div>
                            <img src="https://media.images.yourquote.in/post/720/0/0/17/415/4PYY2533.webp" alt="" />
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-start mb-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden">
                                    <img
                                        src="https://www.ekushey-tv.com/media/imgAll/2020June/N-up-2210251235.jpg"
                                        alt="Customer 3"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">NIRMOLENDO GOON</h4>
                                   
                                </div>
                            </div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPf43bk6jDkh-shUNP3-3L49zaVWq9FNt7qwicgI_GP8Sccus16GegDFK75jjdD8Q5eE&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;