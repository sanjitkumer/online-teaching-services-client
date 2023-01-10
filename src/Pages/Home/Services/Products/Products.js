import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Products = ({product}) => {   
    const products = useLoaderData();

    const { _id, img, price, title, description} = products;

    return (        
        <div className="card card-compact h-auto w-full mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-full h-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>                
                <p>{description}</p>          

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

export default Products;