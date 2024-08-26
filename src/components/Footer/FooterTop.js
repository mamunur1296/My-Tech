import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function FooterTop() {
    return (
        <div className='bg-blue-300'>
            <footer className=" w-10/12 mx-auto py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        {/* Company Section */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-gray-800 font-bold mb-4">Company</h3>
                            <ul className="text-gray-600">
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Who We Are</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Careers</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Refer a Friend</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Logos</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Fonts</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Colors</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Templates</a></li>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-gray-800 font-bold mb-4">Services</h3>
                            <ul className="text-gray-600">
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Managed IT Services & Security</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Software Development</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Custom Websites</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">IT Consulting</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Cloud Services</a></li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-gray-800 font-bold mb-4">Contact Us</h3>
                            <ul className="text-gray-600">
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Contact Form</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Support Center</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">FAQ</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-blue-600">Live Chat</a></li>
                            </ul>
                        </div>

                        {/* Social Media Section */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                            <h3 className="text-gray-800 font-bold mb-4">Follow Us</h3>
                            <ul className="text-gray-600 flex space-x-4">
                                <li className="mb-2">
                                    <a href="#" className="hover:text-blue-600 flex items-center">
                                        <FaFacebookF className="mr-2" /> 
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-blue-600 flex items-center">
                                        <FaTwitter className="mr-2" /> 
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-blue-600 flex items-center">
                                        <FaLinkedinIn className="mr-2" /> 
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-blue-600 flex items-center">
                                        <FaInstagram className="mr-2" /> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
