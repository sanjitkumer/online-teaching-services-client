import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAdd = () => {
    return (
        <div>
             <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Service Area </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>        
         <div className="card card-compact w-96 bg-base-100 shadow-xl">            
            <figure><img src="https://www.bookjunglejamaica.com/lib/uploads/2021/03/9781510436657.jpg" alt="Shoes" className='w-full h-80'/></figure>      
           
            <div className="card-body">
                <h2 className="card-title">Principle of Accounting</h2>
                <div className='card-actions justify-end'>
                <p className='text-2xl text-orange-600 font-semibold'>$ 4000 </p>               
                <div className="card-actions justify-end">
                    <Link to="/services">
                       <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">            
            <figure><img src="https://dynamics.folio3.com/blog/wp-content/uploads/2021/04/Financial-Management.png" alt="Shoes" className='w-full h-80'/></figure>      
           
            <div className="card-body">
                <h2 className="card-title">Financial Management</h2>
                <div className='card-actions justify-end'>
                <p className='text-2xl text-orange-600 font-semibold'>$ 3000 </p>               
                <div className="card-actions justify-end">
                    <Link to="/services">
                       <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">            
            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEcq_NYmjueWNDyQ5533G29dSb_G1hdyrfw&usqp=CAU" alt="Shoes" className='w-full h-80'/></figure>      
           
            <div className="card-body">
                <h2 className="card-title">Basic Computer</h2>
                <div className='card-actions justify-end'>
                <p className='text-2xl text-orange-600 font-semibold'>$ 5000 </p>               
                <div className="card-actions justify-end">
                    <Link to="/services">
                       <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
       </div>
        </div>
        
      
    );
};

export default ServiceAdd;