import React from 'react';
import BookingModal from '../../Modal/BookingModal';
import toast from 'react-hot-toast';

const ItemDetails = ({ product, setItem }) => {
    const { img, actual_price, availablity, condition,
        description, furniture, location, published_date, resale_price, sellerName, phone } = product;

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
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{furniture}</h2>
                <p>{description}</p>
                <p></p>
                <p className='text-semibold font-xl'>Product Info : </p>
                <ul>
                    <li>Actual Price : {actual_price} BDT/=</li>
                    <li>Resale Price{resale_price} BDT/=</li>
                    <li>Condition :  {condition}</li>
                    <li>Published Date : {published_date}</li>
                    <li>Availablity: {availablity}</li>
                </ul>
                <p className='text-semibold font-xl'>Seller Information :</p>
                <ul>
                    <li>Seller name :{sellerName}</li>
                    <li>Phone :{phone}</li>
                    <li>Location : {location}</li>

                </ul>
                <div className="card-actions justify-end">
                    <div onClick={handleWish} className="badge badge-outline">Add to Wish-list</div>
                    <div className="badge badge-outline">Report this item</div>
                </div>

                <div className="card-actions justify-end">

                    <label onClick={() => setItem(product)} htmlFor="my-modal-3" className="btn  btn-primary">Order Now !</label>

                </div>
            </div>
        </div>
    );
};

export default ItemDetails;