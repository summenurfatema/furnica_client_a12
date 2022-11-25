import React, { useEffect, useState } from 'react';
import WishCard from './WishCard';
import { toast } from 'react-hot-toast';

const WishList = () => {
    const [wishes, setWishes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/wishlists')
            .then(res => res.json())
            .then(data => {
                setWishes(data)
            })
    }, [wishes])

    const handleDelete = (wish) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/wishlists/${wish._id}`, {
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
                            <th>Product Price</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            wishes.map(wish =>



                                <WishCard
                                    wish={wish}
                                    handleDelete={handleDelete}></WishCard>

                            )}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default WishList;