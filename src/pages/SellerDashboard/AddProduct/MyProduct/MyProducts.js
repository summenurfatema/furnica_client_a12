import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/UserContext';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://furnica-server.onrender.com/furnitures?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [user?.email])


    // delete product
    const handleDelete = (product) => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`https://furnica-server.onrender.com/furnitures/${product._id}`, {
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
                        );
                        window.location.reload()
                    }
                })
        }
    }
    //mark it sold
    const handleUpdate = _id =>
        fetch(`https://furnica-server.onrender.com/furnitures/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Marked as Sold !!!')
                    window.location.reload()
                }
            })



    return (
        <div className='flex flex-col items-center'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <MyProductCard
                                    product={product}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></MyProductCard>

                            )}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default MyProducts;