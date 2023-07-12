import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AllUserCard from './AllUserCard';

const AllUser = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://furnica-server.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })
    }, [users])


    const handleDelete = (user) => {

        const agree = window.confirm('Are you confirm to delete ?')
        if (agree) {
            fetch(`https://furnica-server.onrender.com/admin/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('This user has been deleted !',
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
        <div className='flex flex-col items-center'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <AllUserCard
                                key={user._id}
                                user={user}
                                handleDelete={handleDelete}></AllUserCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;