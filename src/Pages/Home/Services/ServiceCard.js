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
                <p>{description.slice(0, 100) + '...'} <Link to ={`/products/${_id}`}><span className='text-blue-600'>Read more</span></Link> </p>
                :
                <p>{description}</p>
            }  

                <div className='card-actions justify-end'>
                <p className='text-2xl text-orange-600 font-semibold'>$ {price} </p>               
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                       <button className="btn btn-primary">Order View</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;