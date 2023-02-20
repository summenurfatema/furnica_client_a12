import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Review from './Advertisement/Review';
import BannerSlider from './Banner/BannerSlider';
import Categories from './Categories/Categories';
import Offer from './Offer';
import State from './State';


const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-around md:flex-row md:items-center z-0'>
                <div className=''>
                    <BannerSlider></BannerSlider>
                </div >
                <div>
                    <Categories ></Categories>
                </div>
            </div>

            <Advertisement></Advertisement>
            <State/>
            <Offer/>
            <Review></Review>
        </div>
    );
};

export default Home;