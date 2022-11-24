import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';


const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-4 px-7'>
                <div className='col-span-3'>
                    <Banner></Banner>
                </div >
                <Categories></Categories>
            </div>


            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;