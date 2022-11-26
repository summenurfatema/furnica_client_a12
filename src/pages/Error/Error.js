import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center'>

            <img src='https://t3.ftcdn.net/jpg/02/62/17/60/240_F_262176018_xc3S4usgB6DiexaMFRcegMECg3e5ECZ2.jpg' alt='' className='mt-20' />

            <Link to='/'>

                <button className='btn bg-purple-900 mt-5'>Back to Home</button>

            </Link>

        </div>
    );
};

export default Error;