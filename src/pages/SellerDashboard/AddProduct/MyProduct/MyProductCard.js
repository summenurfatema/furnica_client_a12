import React from 'react';
import { toast } from 'react-hot-toast';

const MyProductCard = ({ product, handleDelete, handleUpdate }) => {
    const { img, furniture, eamil } = product;

    const handleAd = () => {

        const adBody = {
            eamil,
            image: img,
            productName: furniture,
            availablity:"Unsold"



        }

        fetch('https://furnica-server.onrender.com/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`You have added ${furniture} for advertisement !!`)

                }
                else {
                    toast.danger('Error')
                }
            })
            .catch(err => console.error(err))
    }






    return (
        <tr>
            <td>
                <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src={img} alt=' ' />
                    </div>
                </div>
            </td>
            <td className='text-xl font-bold'>{furniture}</td>
            <td className='space-x-2'>
                {product?.availablity !== 'Sold' &&
                    <button onClick={() => handleUpdate(product._id)} className="btn btn-sm bg-cyan-600">Mark as Sold</button>
                }
                {product.availablity !== 'Sold' &&
                    <button onClick={handleAd} className="btn btn-sm bg-cyan-600">Advertisement</button>
                }
                <button onClick={() => handleDelete(product)} className="btn btn-sm bg-cyan-600">Delete</button>
            </td>
        </tr>
    );
};

export default MyProductCard;