import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog-Furnica')
    return (
        <div className='flex flex-col items-center bg-gray-200 py-7 space-y-6'>

            <div className='px-4 py-3 bg-white w-[500px] rounded-2xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-gray-800 border-l-4 my-3'>What are the different way to manage state in a react app !!!</h1>
                <p className='w-[470px]'>There are four main types of state you need to properly manage in React apps.  (1)Local (UI) state – Local state is data we manage in one or another component. (2)Server state – Data that comes from an external server that must be integrated with our UI state. (3)URL state – Data that exists on our URLs, including the pathname and query parameters.(4)URL state – Data that exists on our URLs, including the pathname and query parameters. </p>
            </div>
            <div className='px-4 py-3 bg-white w-[500px] rounded-2xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-gray-800 border-l-4 my-2'>How does prototypical inheritance works ?</h1>
                <p className='w-[470px]'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object. getPrototypeOf and Object. </p>
            </div>
            <div className='px-4 py-3 bg-white w-[500px] rounded-2xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-gray-800 border-l-4 my-2 '>What is unit test ? why should we write unit test  !!!</h1>
                <p className='w-[470px]'> Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
            </div>
            <div className='px-4 py-3 bg-white  rounded-2xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-gray-800 border-l-4 my-2 w-96'>React vs Angular vs Vue !!!</h1>
                <p className='w-[470px]'> React - React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up.React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools.
                    Angular -  Angular would be preferred for those working on larger apps.A large library like Angular would require more diligence in keeping up with what’s new.
                    Vue - Vue, also known as Vue.js.Vue is generally more suited to smaller, less complex apps</p>
            </div>

        </div>
    );
};

export default Blog;