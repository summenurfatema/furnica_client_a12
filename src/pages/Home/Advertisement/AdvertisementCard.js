import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import useSeller from '../../hooks/useSeller';

const AdvertisementCard = ({ ad, handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { image, productName, category } = ad
    const [isSeller] = useSeller(user?.email)
    return (
        <div className='flex flex-col items-center'>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='h-80 w-80' /></figure>
                <div className="">
                    <h2 className="text-center text-xl font-semibold my-4">{productName}</h2>
                </div>
                {isSeller &&
                    <Link>
                        <button onClick={() => handleDelete(ad)} className='btn btn-success w-full'>Remove</button>
                    </Link>

                }
            </div>
        </div>
    );
};

export default AdvertisementCard;