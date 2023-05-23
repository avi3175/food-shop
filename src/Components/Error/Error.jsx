import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="text-center">
                    <h1 className="text-6xl mb-32 text-red-600">Oops!</h1>
                    <img src="https://thumbs.dreamstime.com/b/error-page-not-found-glitch-effect-screen-vector-illustration-your-design-114821212.jpg" alt="" />
                    <p className="text-xl text-gray-800 mb-8">The page you're looking for doesn't exist.</p>
                    <Link to="/" className="text-lg text-blue-600 hover:underline">Go back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;