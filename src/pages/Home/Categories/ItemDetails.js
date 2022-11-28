import React from 'react';
import toast from 'react-hot-toast';
import { FaRegThumbsDown, FaRegHeart } from 'react-icons/fa'


const ItemDetails = ({ _id, product, setItem }) => {
    const { img, actual_price, availablity, condition,
        description, furniture, location, published_date, resale_price,
        sellerName, phone } = product;



    // wishlist
    const handleWish = () => {
        const wishes = {
            image: img,
            productName: furniture,
            productPrice: resale_price,
        }
        fetch('http://localhost:5000/wishlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishes)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`You have added ${furniture} in your wishlistsuccessfully`)
                }
                else {
                    toast.danger('Error')
                }
            })
            .catch(err => console.error(err))
    }
    // report item 
    const handleReportItem = () => {
        const reportItem = {
            productId: _id,
            image: img,
            productName: furniture,
            productPrice: resale_price,
        }
        fetch('http://localhost:5000/admin/reportitem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.error(`You have reported ${furniture}`)
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <div className='flex flex-col items-center'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" className='w-[500px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{furniture}</h2>
                    <p hidden>{_id}</p>
                    <p>{description}</p>
                    <p></p>
                    <p className='font-bold text-xl'>Product Information : </p>
                    <ul>
                        <li>Actual Price : {actual_price} BDT/=</li>
                        <li>Resale Price{resale_price} BDT/=</li>
                        <li>Condition :  {condition}</li>
                        <li>Published Date : {published_date}</li>

                        <li>Availablity: {availablity}</li>

                    </ul>
                    <p className='font-bold text-xl'>Seller Information :</p>
                    <ul>


                        <li>Seller name :{sellerName}</li>
                        {product?.verification && <p>k</p>}
                        <li>Phone :{phone}</li>
                        <li>Location : {location}</li>

                    </ul>
                    <div className="card-actions justify-end my-3">
                        <div onClick={handleWish} className="badge badge-outline cursor-pointer"><FaRegHeart className='mr-2' />
                            Add to Wish-list</div>
                        <div onClick={handleReportItem} className="badge badge-outline cursor-pointer"><FaRegThumbsDown className='mr-2' /> Report this item</div>
                    </div>

                    <div className="card-actions justify-end">


                        {availablity === 'Unsold' ?
                            <label onClick={() => setItem(product)} htmlFor="my-modal-3" className="btn bg-green-700 mt-4">Order Now !</label>

                            :

                            <label className="btn bg-green-700 mt-4">Sold out</label>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;