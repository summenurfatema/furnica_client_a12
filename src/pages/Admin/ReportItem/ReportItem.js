import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReportItemCard from './ReportItemCard';

const ReportItem = () => {
    const [reportItems, setReportItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reportitem')
            .then(res => res.json())
            .then(data => {
                setReportItems(data)
            })
    }, [reportItems])

    const handleDelete = (reportItem) => {

        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/reportitem/${reportItem._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(' This Reported Item deleted !',
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

                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportItems.map(reportItem =>



                                <ReportItemCard
                                    reportItem={reportItem}
                                    handleDelete={handleDelete}></ReportItemCard>

                            )}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default ReportItem;