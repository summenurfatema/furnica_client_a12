import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const sellerName = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const productName = form.productname.value
        const description = form.description.value
        const availability = form.availability.value
        const category = form.category.value
        const parchaseYear = form.parchaseyear.value
        const publishedDate = form.publisheddate.value
        const location = form.location.value
        const condition = form.condition.value
        const actualPrice = form.actualprice.value
        const resalePrice = form.resaleprice.value

        // console.log( email, phone, productName, description, availability, category, parchaseYear, publishedDate, location, condition)

        const addProduct = {
            furniture: productName,
            email,
            actual_price: actualPrice,
            resale_price: resalePrice,
            condition,
            description,
            purchase_year: parchaseYear,
            published_date: publishedDate,
            location,
            availability,
            category,
            phone,
            sellerName,

        }
        console.log(addProduct)

        console.log(addProduct)
        fetch('http://localhost:5000/furnitures', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
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
        console.log(addProduct)

    }

    return (

        <div className="flex flex-col items-center justify-center">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-5">

                <form onSubmit={handleBooking} className='my-7 space-y-3'>


                    <div className="form-control">
                        <label className='font-semibold text-lg'  >Name :</label>
                        <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Email :</label>
                        <input value={user?.email} name='email' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>


                    <div className="form-control">
                        <label className='font-semibold text-lg'>Phone :</label>
                        <input name='phone' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Location :</label>
                        <input name='location' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>

                    <div className="form-control">
                        <label className='font-semibold text-lg'>Product Image :</label>
                        <input name='productimg' type="file" className="input input-bordered w-full max-w-xs block" />
                    </div>

                    <div className="form-control">
                        <label className='font-semibold text-lg'>Product name :</label>
                        <input name='productname' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>About Product :</label>
                        <input name='description' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="select select-bordered select-md w-full max-w-xs">
                            <option >Select</option>
                            <option >bed</option>
                            <option >sofa</option>
                            <option >chair</option>

                            <option >cloth-stand</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Actual Price :</label>
                        <input name='actualprice' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Resale Price :</label>
                        <input name='resaleprice' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select name='condition' className="select select-bordered select-md w-full max-w-xs">
                            <option>Exceillent</option>
                            <option>Good</option>
                            <option >Fair</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Availablity</span>
                        </label>
                        <select name='availability' className="select select-bordered select-md w-full max-w-xs">
                            <option selected>Select</option>
                            <option>Sold</option>
                            <option >Unsold</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Purchase year :</label>
                        <input name='parchaseyear' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>
                    <div className="form-control">
                        <label className='font-semibold text-lg'>Published date :</label>
                        <input name='publisheddate' type="text" className="input input-bordered w-full max-w-xs block" />
                    </div>




                    <button type='submit' className='btn '>Submit</button>



                </form>





            </div>
        </div>

    );
};

export default AddProduct;