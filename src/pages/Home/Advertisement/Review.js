

import React from "react";


const Review = () => {

    const testimonials = [
        {
            "id": 1,
            "img": "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.2.1540219272.1675657721&semt=sph",
            "name": "Md.Ariyan khan",
            "review": "Delivery on time schedule well done guys phoned before arriving at house cleared all packaging to van very well satisfied excellent service from order placed to delivery"
        },
        {
            "id": 2,
            "img":"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1540219272.1675657721&semt=sph",
            "name": "Md. Farhan Karim",
            "review": "Onk shundor sofa bad ta thnx.jemon ta picture e dekhesi,tik temon e peyesi.Well done Furnico!!!"
        },
        {
            "id": 3,
            "img": "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.1540219272.1675657721&semt=sph",
            "name": "Ms Annee",
            "review": "The whole progress from start to end was very easy.Easy to order,pay and communication.."
        },
    ]
    return (
    <div>
    <section className="my-8">
    <div  className='flex -space-x-20 justify-center items-center '>
                
                <h1 className='text-2xl md:text-4xl font-bold tracking-wider'>Testimonial</h1>
            </div>
        <div data-aos="fade-up"  className="container flex flex-col items-center mx-auto mb-1 md:p-10 md:px-12 lg:-mt-14">
{/* <p className='text-2xl text-gray-800 '>OUR TESTIMONIAL</p> */}
            <h1 className="pt-7 text-2xl lg:text-4xl font-semibold text-center">What our customers are saying about us</h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">

            {
                testimonials.map(testimonial => <div data-aos="flip-left"  className="flex flex-col max-w-sm mx-4 my-6 border shadow-gray-300 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                        <div className="flex flex-col items-center justify-center rounded-b-lg">
                            <img src={testimonial.img} alt="" className="w-32  h-32 border-2 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                            <p className="text-xl font-semibold leading-tight">{testimonial.name}</p>

                        </div>
                        <p className="relative px-6 py-1 text-lg text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-blue-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p>{testimonial.review}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-blue-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                </div>)
            }
        </div>

        {/* 1   2  3  4  5  6  7  8  9  10 */}
     
    </section>
</div>
    )
};

export default Review;
//    <p className="text-sm tracking-wide text-gray-800">
// Delivery on time schedule well done guys phoned before arriving
// at house cleared all packaging to
// van very well satisfied excellent
// service from order placed to
// delivery
// </p>

// <p className="text-sm tracking-wide text-gray-800">
//                             Onk shundor sofa bad ta thnx.jemon ta picture e dekhesi,tik temon e peyesi.Well done Furnico!!!
//                         </p>

// <p className="text-sm tracking-wide text-gray-800">
// The whole progress from start to end was very easy.Easy to order,pay and communication.
//</p>