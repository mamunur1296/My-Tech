import React from 'react'

import img1 from "../../assats/Reveow/reveow1.jpg";
import img2 from "../../assats/Reveow/reveow2.jpg";
import img3 from "../../assats/Reveow/reveow3.jpg";

import { FaStar } from 'react-icons/fa';
export default function Reviews() {
    const services = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
    ];
    return (
        <section className="w-full md:w-8/12 mx-auto py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center text-2xl font-bold mb-8 space-x-4">
                    {/* Rating number */}
                    <div className="flex items-center text-yellow-600 text-4xl">
                        <span>4.8</span>
                    </div>
                    {/* Star icons */}
                    <div className="flex items-center space-x-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    {/* Reviews count */}
                    <div className="flex items-center text-sm">
                        <span>150 reviews</span>
                    </div>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between h-full"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center   mb-8 space-x-4">
                   <button className='btn bg-yellow-500  px-3 py-3 rounded-xl mt-16 hover:bg-black hover:text-white'>View More</button>
                </div>
            </div>
        </section>
    )
}
