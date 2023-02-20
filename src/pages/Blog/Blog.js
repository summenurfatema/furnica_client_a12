import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog-Furnica')
    return (
       <div className='my-20'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>

        </div>
    );
};

export default Blog;