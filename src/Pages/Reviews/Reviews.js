import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const[reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch(`https://online-teaching-services-server.vercel.app/reviews?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("services-token")}`
          }
        })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
              return logOut();
          }
          return res.json();
      })

      .then(data => {
        setReviews(data);
    })
}, [user?.email, logOut])
    

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to cancel this Services');
        if(proceed){
            fetch(`https://online-teaching-services-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                  authorization: `Bearer ${localStorage.getItem("services-token")}`
                }
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deleteCount > 0)
               
                alert ('deleted successfully')
                const remaining = reviews.filter(odr => odr._id !==id);
                setReviews(remaining);
            })           
        }

    }

    const handleStatusUpdate = id => {
      fetch(`https://online-teaching-services-server.vercel.app/reviews/${id}`, {
        method: 'PATCH',
        headers: {
           'content-type': 'application/json',
           authorization: `Bearer ${localStorage.getItem('genius-token')}`
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