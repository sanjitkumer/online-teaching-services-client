import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://online-teaching-services-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div>
            <div className='text-center mb-4'>
                {/* <p className="text-4xl font-bold text-orange-600">Service</p> */}
                <h2 className="text-5xl font-semibold">Our Service Area </h2>
                <p className='m-4'>Online Teaching Services is a growing community of teachers from different multicultural backgrounds who connects learners with the future.</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>               
                {
                  services.map(service => <ServiceCard
                  key={service._id}
                  service = {service}
                  ></ServiceCard>)
                }                
            </div>           
        </div>
    );
};

export default Services;