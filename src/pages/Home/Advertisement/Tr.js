
import React from 'react';
import { toast } from 'react-hot-toast';

const tr = () => {
    const handleAd = event => {
        event.preventDefault()
        const form = event.target
        const productPrice = form.productprice.value;
        const productName = form.productname.value

        const ad = {

            productPrice,
            productName
        }
        fetch('https://furnica-server.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ad)
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

    }
    return (

        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <form onSubmit={handleAd} className='my-7 space-y-3'>


                        <div className="form-control">
                            <label className='font-semibold text-lg'>Product name :</label>
                            <input name='productname' type="text" className="input input-bordered w-full max-w-xs block" />
                        </div>

                        <div className="form-control">
                            <label className='font-semibold text-lg'>Product price :</label>
                            <input name='productprice' type="text" className="input input-bordered w-full max-w-xs block" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default tr; 