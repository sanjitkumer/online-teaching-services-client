import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const[reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to cancel this Services');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deleteCount > 0)
                alert ('deleted successfully')
                const remaining = reviews.filter(odr => odr._id !==id);
                setReviews(remaining);
            })           
        }

    }

    const handleStatusUpdate = id => {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'PATCH',
        headers: {
           'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})        
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0) {
          const remaining = reviews.filter(odr => odr._id !== id);
          const approving = reviews.find(odr => odr._id === id);
          approving.status = 'Approved'

          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
        }
      })
    }




    return (
        <div>
        <h2 className="text-5xl">You have review : {reviews.length}</h2> 
        <div className="overflow-x-auto w-full">
<table className="table w-full">

 <thead>
   <tr>
     <th>Delete</th>
     <th>Name</th>
     <th>Course Title</th>
     <th>Message</th>
     <th>Update</th>
   </tr>
 </thead>
 <tbody>
     {
         reviews.map(review => <ReviewRow
         key={review._id}
         review={review}
         handleDelete ={handleDelete}
         handleStatusUpdate = {handleStatusUpdate}            
         ></ReviewRow>)
     }
         
 </tbody>
 
 
 
</table>
</div>
</div>
    );
};

export default Reviews;