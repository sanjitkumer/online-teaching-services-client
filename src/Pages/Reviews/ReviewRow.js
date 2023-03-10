import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ReviewRow = ({review, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, phone, customer, price, service, status, message}= review;
    const [reviewService, setReviewService]= useState({})

    useEffect(() =>{
        fetch(`https://online-teaching-services-server.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data));
    },[service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() =>handleDelete(_id) } className='btn btn-warning'>Delete</button>
                </label>
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="rounded w-24 h-24">
                    {
                        reviewService?.img &&
                        <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                    }

                    </div>
                    </div>
                    <div>
                    <div className="font-bold"> {customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>

            <td>
               {serviceName}
                <br/>
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>

            <td><div>{message}</div></td>

            <th>
            <button
            onClick={() => handleStatusUpdate(_id)}
             className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
            </th>
      </tr> 
    );
};

export default ReviewRow;