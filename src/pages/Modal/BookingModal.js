import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';

const BookingModal = ({ item }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const buyerName = form.buyername.value
        const email = form.buyeremail.value
        const productName = form.productname.value
        const productPrice = form.productprice.value
        const phone = form.phone.value
        const location = form.location.value

        const booking = {

            buyerName,
            email,
            productName,
            productPrice,
            buyerPhone: phone,
            meetingLocation: location,
        }

        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`You have booked ${productName} successfully`)

                }
                else {
                    toast.danger('Error')
                }
            })
            .catch(err => console.error(err))
        console.log(booking)

    }



    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-2xl font-bold">Booking Informafation of {item?.furniture} !!!</h3>

                    <form onSubmit={handleBooking} className='my-7 space-y-3'>


                        <div className="form-control">
                            <label className='font-semibold text-lg'>Buyer's name :</label>
                            <input name='buyername' type="text" value={user?.displayName} readOnly className="input input-bordered w-full max-w-xs block" />
                        </div>

                        <div className="form-control">
                            <label className='font-semibold text-lg'>Buyer's email :</label>
                            <input name='buyeremail' type="text" value={user?.email} readOnly className="input input-bordered w-full max-w-xs block" />
                        </div>

                        <div className="form-control">
                            <label className='font-semibold text-lg'>Product name :</label>
                            <input name='productname' type="text" value={item?.furniture} readOnly className="input input-bordered w-full max-w-xs block" />
                        </div>

                        <div className="form-control">
                            <label className='font-semibold text-lg'>Product price :</label>
                            <input name='productprice' type="text" value={item?.resale_price} readOnly className="input input-bordered w-full max-w-xs block" />
                        </div>

                        <div className="form-control">
                            <label className='font-semibold text-lg'>Phone number :</label>
                            <input name='phone' type="text" placeholder='01XXXXXXXXX' className="input input-bordered w-full max-w-xs block" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold text-lg'>Meeting Location :</label>
                            <input name='location' type="text" className="input input-bordered w-full max-w-xs block" />
                        </div>
                        <div className="modal-action">
                            <button type='submit' className='btn '>Confirm</button>
                            <label htmlFor="my-modal-3" className="btn">Close</label>
                        </div>

                    </form>





                </div>
            </div>


        </div>
    );
};

export default BookingModal;