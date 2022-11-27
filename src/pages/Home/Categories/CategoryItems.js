import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Modal/BookingModal';
import ItemDetails from './ItemDetails';

const CategoryItems = () => {



    const products = useLoaderData()
    const [item, setItem] = useState({})

    return (<div>
        <div className='grid grid-cols-1 gap-5'>


            {
                products.map(product => <ItemDetails
                    key={product._id}
                    product={product}
                    setItem={setItem}></ItemDetails>)
            }
            <BookingModal
                item={item}
            ></BookingModal>

        </div>




    </div>


    );
};

export default CategoryItems;
