import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Course></Course>
            <Services></Services>
        </div>
    );
};

export default Home;