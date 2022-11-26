import React from 'react';
import bed from '../../../assets/category/bed2.png'
import chair from '../../../assets/category/chair1.png'
import sofa from '../../../assets/category/bed1.png'
import clothStand from '../../../assets/category/stand.png'
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categories = [
        {
            id: 1,
            image: bed,
            name: 'Bed',
            category: 'bed'
        },
        {
            id: 2,
            image: sofa,
            name: 'Sofa',
            category: 'sofa',
        },
        {
            id: 3,
            image: chair,
            name: 'Chair',
            category: 'chair'
        },
        {
            id: 4,
            image: clothStand,
            name: 'Cloth Stand',
            category: 'cloth-stand'
        },
    ]
    return (
        <div className='space-y-7 rounded-md'>
            <h1 className='text-2xl  text-center font-semibold my-3'>Categories</h1>
            {
                categories.map(items => <CategoryCard
                    key={items.id}
                    items={items}
                ></CategoryCard>)
            }

        </div>
    );
};

export default Categories;