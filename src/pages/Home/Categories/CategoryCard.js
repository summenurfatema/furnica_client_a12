import React from 'react';
import { Link } from 'react-router-dom';



const CategoryCard = ({ items }) => {


    const { name, image, category } = items;
    return (

        <Link to={`/furnitures/${category}`}>

            <div className='flex items-center shadow-md rounded-md p-2 space-x-4 text-gray-700 mb-3'>

                <img className='h-16 w-28' src={image} alt='category' />
                <div className='space-y-5'>
                    <h2 className='font-medium text-xl'>{name}</h2>
                </div>
            </div>
        </Link>

    );
};

export default CategoryCard;