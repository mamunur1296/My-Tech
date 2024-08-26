import React from 'react'
import img1 from "../../assats/Recommendad/th.jpeg";
import img2 from "../../assats/Recommendad/th (1).jpeg";
import img3 from "../../assats/Recommendad/th (2).jpeg";
export default function Recommended() {
    const services = [
        {
            title: "Systems Integration",
            image: img1, // Replace with actual image URL
            description: "Learn More",
        },
        {
            title: "Support & Advance Custom Software",
            image: img2, // Replace with actual image URL
            description: "Learn More",
        },
        {
            title: "Digital Marketing",
            image: img3, // Replace with actual image URL
            description: "Learn More",
        },
    ];
    return (
        <section className=" w-full md:w-8/12 mx-auto py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-bold mb-8">
                    Services Recommended For You
                </h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between h-full"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-44 object-cover"
                        />
                        {/* Container becomes a flex column */}
                        <div className="flex flex-col justify-between p-6 flex-grow">
                          <h3 className="text-xl font-semibold mb-4 text-center">
                            {service.title}
                          </h3>
                          {/* Flex container with margin to push button to the bottom */}
                          <div className="flex mt-auto justify-center">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none">
                              {service.description}
                            </button>
                          </div>
                        </div>
                      </div>
                      
                    ))}
                </div>
            </div>
        </section>
    )
}
