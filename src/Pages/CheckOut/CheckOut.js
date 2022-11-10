import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
    

    const order = {
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone,
        message
    }

    fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Order placed successfully')
            form.reset();
        }
    })

    .catch(er => console.error(er));

}

    return (
        <div>
            
        <form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl">You are about to courses: {title}</h2>
            <h4 className="text-3xl">{price}</h4>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name="firstName" type="text" placeholder="First Name" className="input w-full input-bordered" />
            <input name="lastName" type="text" placeholder="Last Name" className="input w-full input-bordered" />
            <input name="phone" type="text" placeholder="Your Phone" className="input w-full input-bordered" required/>
            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input w-full input-bordered" readOnly/>
            </div>

            <textarea name="message" className='textarea textarea-bordered h-24 w-full' placeholder='Your message' required></textarea>

            <input className='btn' type="submit" value="place Your Order" />
        

        </form>
        
            
     </div>
    );
};

export default CheckOut;