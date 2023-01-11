import React from 'react';
import images1 from '../../../assets/about/images1.png'


const Course = () => {
    return (
        <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row"> 
          <div className='w-1/2'>
              <p className='my-5 text-2xl font-bold text-orange-600'>Services details</p>
              <h1 className="text-5xl font-bold">
                Instructor to student  <br/>
                course delivery<br />
                in this services.</h1>
              <p className="py-6">A course plan is an essential part of designing any course and helps communicate the core values and goals of the course you'll be teaching. The lesson plan is a detailed outline of course objectives, schedule, readings, assignments, and information about how the course will be taught and measured. </p>
          </div>

          <div className=' w-1/2'>        
            <img src={images1}  alt="" className="  w-full border-8 rounded-lg shadow-2xl" />
          </div>         
          
        </div>
        </div>
    );
};

export default Course;