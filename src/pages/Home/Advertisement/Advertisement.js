import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query'

import BookingModal from '../../Modal/BookingModal';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {

    const [ads, setAd] = useState([])
    const [adver, setAdver] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => {
                setAd(data)
            })
    }, [ads])


    // delete product
    const handleDelete = (ad) => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/advertise/${ad._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('This item removed from Advertisement section successfully !',
                            {
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            }
                        );
                        window.location.reload()
                    }
                })
        }
    }

    return (
        <div className='my-10'>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                {
                    ads.map(ad => <AdvertisementCard
                        key={ad._id}
                        ad={ad}
                        handleDelete={handleDelete}
                        setAdver={setAdver}></AdvertisementCard>)
                }
                <BookingModal
                    adver={adver}></BookingModal>
            </div>
        </div>
    );
};

export default Advertisement;