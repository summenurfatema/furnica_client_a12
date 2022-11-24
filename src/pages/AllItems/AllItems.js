import React, { useEffect, useState } from 'react';

const AllItems = () => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/furnitures')
            .then(res => res.json())
            .then(data => setProds(data))

    }, [])

    return (
        <div>
            {
                prods.map(p => <li>{p.furniture}</li>)
            }


        </div>
    );
};

export default AllItems;