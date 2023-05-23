import React from 'react';

const Future = () => {
    return (
        <div>
            <div className="bg-gray-100">
                
                <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <section className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Future Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <img src="https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2eaad473ae3298f97f999_Jhal%20muri_1500%20x%201200.jpg" alt="Product 1" className="mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Product 1</h4>
                                <p className="font-bold text-orange-500">JHAL MURI</p>
                                
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <img src="https://media.istockphoto.com/id/1323098892/photo/a-plate-of-chotpoti-tasty-famous-street-food.jpg?s=612x612&w=0&k=20&c=d7wrW3s8uzY6buPmRm7SL7At5FZ3aVpCB_M_nFtezbA=" alt="Product 2" className="mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Product 2</h4>
                                <p className="font-bold text-orange-500">CHOTPOTI</p>
                               
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/nhwxuyd8hg7lchujuchr" alt="Product 3" className="mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Product 3</h4>
                                <p className="font-bold text-orange-500">FUCHKA</p>
                              
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <img src="https://c1.wallpaperflare.com/preview/32/142/341/falooda-beverage-color-indian-thumbnail.jpg" alt="Product 4" className="mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Product 4</h4>
                                <p className="font-bold text-orange-500">LACCHI</p>
                               
                            </div>
                        </div>
                    </section>
                   
                   
                </main>
               
            </div>
        </div>
    );
};

export default Future;