import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen my-5" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/mock-up-living-room-interior-with-armchair-empty-dark-blue-wall-wall-background-3d-rendering_41470-4089.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Furnica...</h1>
                    <p className="mb-5">Furnica is a brand that is recongnised and loved in Bangladesh.We are helping people buy and sell second hand furniture everyday !!!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;