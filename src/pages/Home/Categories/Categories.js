import React from 'react';
import bed from '../../../assets/images/category/bed.png'
import chair from '../../../assets/images/category/chair.png'
import sofa from '../../../assets/images/category/sofa.png'
import clothStand from '../../../assets/images/category/cloth-stand.png'
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
        <div className='space-y-5 rounded-md'>
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