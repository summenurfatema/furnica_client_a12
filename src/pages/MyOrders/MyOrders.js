import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { saveSettings, settings } from 'react-hot-toast'
import { AuthContext } from '../../context/UserContext';
import useTitle from '../hooks/useTitle';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    useTitle('My Orders-Furnica')

    useEffect(() => {
        fetch(`https://furnica-server.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [user?.email])

    const handleDelete = (booking) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`https://furnica-server.vercel.app/bookings/${booking._id}`, {
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
        <div>
            {
                bookings &&
                bookings.map((booking, i) => <OrderCard
                    key={booking.i}
                    booking={booking}
                    handleDelete={handleDelete}></OrderCard>)
            }
        </div>
    );
};

export default MyOrders;