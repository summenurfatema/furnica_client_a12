import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {

    const [ads, setAd] = useState([])
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
            <h1 className='text-2xl text-center font-semibold my-3 mb-10'>Best product are there ...</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                {
                    ads.map(ad => <AdvertisementCard
                        key={ad._id}
                        ad={ad}
                        handleDelete={handleDelete}></AdvertisementCard>)
                }
            </div>
        </div>
    );
};

export default Advertisement;