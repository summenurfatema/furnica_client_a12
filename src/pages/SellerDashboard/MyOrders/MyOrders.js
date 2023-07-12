import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { saveSettings, settings } from 'react-hot-toast'
import { AuthContext } from '../../../context/UserContext';
import useTitle from '../../hooks/useTitle';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    useTitle('My Orders-Furnica')

    useEffect(() => {
        fetch(`https://furnica-server.onrender.com/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [user?.email])

    const handleDelete = (booking) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`https://furnica-server.onrender.com/bookings/${booking._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Product deleted !',
                            {

                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            }
                        );; window.location.reload()

                    }
                })
        }

    }


    return (
        <div className="overflow-x-auto py-10">
        <table className="table w-full">
    
                    <thead className='w-full'>
                        <tr className='w-full'>
                            <th className='w-1/6'>Name</th>
                            <th className='w-1/6'>Product Name</th>
                            <th className='w-1/6'>Product Price</th>
                            <th className='w-1/6'>Phone</th>
                            <th className='w-1/6'>Meeting location</th>
                            <th className='w-1/6'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       

            {
                bookings &&

                
                bookings.map((booking, i) =>
                <tr>
                <td >{booking.buyerName}</td>
                <td >{booking?.productName}</td>
                <td >{booking?.productPrice}</td>
                <td >{booking?.buyerPhone}</td>
                <td >{booking?.meetingLocation}</td>
                <td >
                    <button onClick={()=>handleDelete(booking)} className="btn bg-red-600 text-white btn-sm">Delete</button>
                </td>
                    
                    
                    </tr>       
                 
                 ) }
            
            </tbody>
               </table>
               </div>
        
    );
};

export default MyOrders;