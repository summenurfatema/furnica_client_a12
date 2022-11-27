import React from 'react';

const Review = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
                <div>
                    <img
                        className="object-cover w-24 h-24 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center mt-2">
                        <p className="text-lg font-bold">Farhan Kabir</p>

                        <p className="text-sm tracking-wide text-gray-800">
                            Delivery on time schedule well done guys phoned before arriving
                            at house cleared all packaging to
                            van very well satisfied excellent
                            service from order placed to
                            delivery
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-24 h-24 rounded-full shadow"
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center mt-2">
                        <p className="text-lg font-bold">Maisha Khanom</p>

                        <p className="text-sm tracking-wide text-gray-800">
                            Onk shundor sofa bad ta thnx.jemon ta picture e dekhesi,tik temon e peyesi.Well done Furnico!!!
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-24 h-24 rounded-full shadow"
                        src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center mt-2">
                        <p className="text-lg font-bold">Ayesha Rahman</p>

                        <p className="text-sm tracking-wide text-gray-800">
                            The whole progress from start to end was very easy.Easy to order,pay and communication.
                        </p>
                    </div>
                </div>
                {/* <div>
                    <img
                        className="object-cover w-24 h-24 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center mt-2">
                        <p className="text-lg font-bold">Martin Garix Potter</p>
                        <p className="mb-4 text-xs text-gray-800">Good guy</p>
                        <p className="text-sm tracking-wide text-gray-800">
                            Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
                            Williamsburg sustainable aliqua, umami shabby chic artisan duis
                            pickled.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Review;