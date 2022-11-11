import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { _id, img, price, title, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full h-80'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                description.length > 250 ?
                <p>{description.slice(0, 250) + '...'} <Link to ={`/services/${_id}`}>Read more</Link> </p>
                :
                <p>{description}</p>
            }  
                {/* <p>${description.slice(0, 100) + '...'} <Link to ={`/services/${_id}`}>Read more</Link> </p> */}

                <div className='card-actions justify-end'>
                <p className='text-2xl text-orange-600 font-semibold'>$ {price} </p>               
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                       <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;