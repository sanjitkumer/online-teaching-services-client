import React from 'react';
import images1 from '../../../assets/about/images1.png'
import images2 from '../../../assets/about/images2.jpeg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
      
          <div className='relative w-1/2'>
          <img src={images2} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={images1}  alt="" className="absolute top-1/2 right-5 w-2/4 border-8 rounded-lg shadow-2xl" />
          </div>
         
          <div className='w-1/2'>
              <p className='my-5 text-2xl font-bold text-orange-600'>About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br/>
             & of experience <br />
              in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='py-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;