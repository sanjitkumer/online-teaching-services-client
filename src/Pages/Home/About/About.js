import React from 'react';
// import images1 from '../../../assets/about/images1.png'
import images2 from '../../../assets/about/images2.jpeg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row gap-x-10">
      
          <div className='relative w-1/2'>
          <img src={images2} alt="" className="w-full h-full rounded-lg shadow-2xl" />
          {/* <img src={images1}  alt="" className="absolute top-1/2 right-5 w-2/4 border-8 rounded-lg shadow-2xl" /> */}
          </div>
         
          <div className='w-1/2'>
              <p className='my-5 text-2xl font-bold text-orange-600'>Online Teaching Services</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br/>
             & of experience <br />
              in this teaching Service.</h1>
            <p className="py-6">Online Teaching Services is a growing community of teachers from different multicultural backgrounds who connects learners with the future. We focus on hiring and training ESL teachers. We deliver online classes in different formats to students based in different countries providing a very enriching multicultural learning environment. We service the world's largest provider of English language training. </p>
          </div>
        </div>
      </div>
    );
};

export default About;