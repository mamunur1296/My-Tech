import React from 'react';
import { FaLaptopCode, FaHeadset, FaShieldAlt, FaCogs, FaBox, FaPlug, FaCloud, FaUserShield } from 'react-icons/fa';

export default function Services() {
  const services = [
    { id: "1", title: "Managed IT Services & Security", icon: <FaUserShield className="text-orange-400 text-7xl" /> },
    { id: "2", title: "IT Support", icon: <FaHeadset className="text-orange-400 text-7xl" /> },
    { id: "3", title: "Cyber Security", icon: <FaShieldAlt className="text-orange-400 text-7xl" /> },
    { id: "4", title: "Software Development", icon: <FaLaptopCode className="text-orange-400 text-7xl" /> },
    { id: "5", title: "Support & Advanced Custom Software", icon: <FaCogs className="text-orange-400 text-7xl" /> },
    { id: "6", title: "Ecommerce & Custom Websites", icon: <FaBox className="text-orange-400 text-7xl" /> },
    { id: "7", title: "Systems Integration", icon: <FaPlug className="text-orange-400 text-7xl" /> },
    { id: "8", title: "Cloud Computing & Migrations", icon: <FaCloud className="text-orange-400 text-7xl" /> }
  ];

  return (
    <div className="py-8 px-4 min-h-screen flex flex-col items-center">
      <h1 className="text-center text-[15px] font-bold mb-8">
        Our teams provide consulting, implementation, and support in the following areas:
      </h1>
      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map(service => (
          <div
            key={service.id}
            className=" rounded-lg  transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-12">
              <div className=" p-6 rounded-full">
                {service.icon}
              </div>
            </div>
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-[15px] font-semibold">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
