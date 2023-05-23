import React from 'react';
import Header from '../Header/Header';
import Company from '../Company/Company';
import Review from '../Review/Review';
import Future from '../Future/Future';
import Footer from '../Footer/Footer';

const LandingPage = () => {
    return (
        <div>
            
            <Company></Company>
            <Review></Review>
            <Future></Future>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;