import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Review from './Advertisement/Review';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';


const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-around md:flex-row'>
                <div className=''>
                    <Banner></Banner>
                </div >
                <div>
                    <Categories ></Categories>
                </div>
            </div>

            <Advertisement></Advertisement>
            <Review></Review>
        </div>
    );
};

export default Home;