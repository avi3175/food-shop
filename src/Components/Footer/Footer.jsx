import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Our Team</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Products</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Featured</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">New Arrivals</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Sale</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Clearance</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Shipping</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Returns</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-gray-300 mt-8">© 2023 Future Store Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;