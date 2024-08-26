import React from 'react'
import System from "../../assats/AssurancePlan/system.jpg";
import Unlimited from "../../assats/AssurancePlan/unlimited.jpg";
import Proactive from "../../assats/AssurancePlan/Proactive.jpg";
import Powerful  from "../../assats/AssurancePlan/Powerful.jpg";
import LongTerm from "../../assats/AssurancePlan/LongTerm.jpg";
export default function AssurancePlan() {
    return (
        <div>
            <div className="bg-blue-300 mt-10npm pb-16 ">
                <div className="container mx-auto text-center">
                    <h2 className="text-gray-800 text-[14px] font-semibold  uppercase pt-16 ">Our Comprehensive Managed IT Services Plan</h2>
                    <h3 className="text-gray-600 text-[25px] font-bold  mt-2">The Miles Assurance Plan</h3>
                    <p className="text-gray-600 text-[20px] w-full mt-5 md:w-4/12 mx-auto mb-12">The Miles Assurance Plan offers unlimited helpdesk support, powerful cyber security, and proactive optimizations for your systems.</p>

                    <div className=" mx-auto w-10/12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <img src={System} alt="System Oversight Icon" className="w-24 h-20 object-cover" />
                            </div>
                            <h4 className="text-2xl font-bold mb-5  text-gray-800">System Oversight</h4>
                            <p className="text-gray-600 text-[18px]">Our goal is to keep you focused on doing business while we take care of the technology. Our team will manage all technology assets to ensure your employees have the equipment they need to support the work they do.</p>
                        </div>

                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <img src={Unlimited} alt="Remote Support Icon" className="w-24 h-20 object-cover"  />
                            </div>
                            <h4 className="text-2xl font-bold mb-5 text-gray-800">Unlimited Remote & Onsite Support</h4>
                            <p className="text-gray-600 text-[18px]">Our services are available all the time, 24/7/365. After hours, weekends, and holidays. We're always here when you need it most. We GUARANTEE a 1-hour response, but we're typically much faster!</p>
                        </div>

                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4 object-cover">
                                <img src={Proactive} alt="Proactive Services Icon" className="w-24 h-20 object-fill" />
                            </div>
                            <h4 className="text-2xl font-bold mb-5 text-gray-800">Proactive Services</h4>
                            <p className="text-gray-600 text-[18px]">We do a lot in the background to keep your business up and running. Consistent backups, 24/7 server monitoring, event logging, and more.</p>
                        </div>

                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <img src={Powerful} alt="Powerful Security Icon" className="w-20 h-18 " />
                            </div>
                            <h4 className="text-2xl font-bold mb-5 text-gray-800">Powerful Security</h4>
                            <p className="text-gray-600 text-[18px]">Experience true peace of mind with our comprehensive cyber security. Our security services not only include the tools to prevent incidents from happening but experts with the know-how to eliminate emerging threats.</p>
                        </div>

                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <img src={LongTerm} alt="No Long-Term Contracts Icon" className="w-20 h-24 object-cover" />
                            </div>
                            <h4 className="text-2xl font-bold mb-5 text-gray-800">No Long-Term Contracts</h4>
                            <p className="text-gray-600 text-[18px]">No longer need service? All of our plans are month-to-month, so you can easily make adjustments as your needs change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
