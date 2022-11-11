import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import ServiceAdd from '../Services/ServiceAdd/ServiceAdd';
// import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Course></Course>
            <ServiceAdd></ServiceAdd>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;