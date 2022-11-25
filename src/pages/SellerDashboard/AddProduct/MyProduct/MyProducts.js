import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/UserContext';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/furnitures?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [user?.email])

    const handleDelete = (product) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/furnitures/${product._id}`, {
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
                        );; window.location.reload()

                    }
                })
        }
    }
    return (
        <div>
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
                                    handleDelete={handleDelete}></MyProductCard>

                            )}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default MyProducts;