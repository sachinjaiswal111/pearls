import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className="h-44 w-[100%] px-14 font-[Poppins] bg-[#24262b] absolute bottom-0">
        <div className="flex text-gray-500 justify-between">
            
            <div className="leading-7 text-lg">
            <h1 className='mb-2 mt-2 text-2xl underline decoration-red-500 text-white font-semibold'>Company</h1>
                <ul>
                    <li className='hover:pl-1 ease-in-out '>Our Services</li>
                    <li className='hover:pl-1 ease-in-out '>About us</li>
                    <li className='hover:pl-1 ease-in-out '>Privacy & Policy</li>
                    <li className='hover:pl-1 ease-in-out '>Terms & Conditions</li>
                </ul>
            </div>

            <div className="leading-7 text-lg">
            <h1 className='mb-2 mt-2 text-2xl underline decoration-red-500 text-white font-semibold'>Get Help</h1>
                <ul>
                    <li className='hover:pl-1 ease-in-out '>FAQ</li>
                    <li className='hover:pl-1 ease-in-out '>Shipping</li>
                    <li className='hover:pl-1 ease-in-out '>Order Status</li>
                    <li className='hover:pl-1 ease-in-out '>Contact us</li>
                </ul>
            </div>

            <div className="leading-7 text-lg">
            <h1 className='mb-2 mt-2 text-2xl underline decoration-red-500 text-white font-semibold'>Follow us</h1>
                <ul>
                    <li className='hover:pl-1 ease-in-out '>Instagram</li>
                    <li className='hover:pl-1 ease-in-out '>Facebook</li>
                    <li className='hover:pl-1 ease-in-out '>Twitter</li>
                </ul>
            </div>

            <div className="leading-7 text-lg">
            <h1 className='mb-2 mt-2 text-2xl underline decoration-red-500 text-white font-semibold'>Categories</h1>
            <Link to="/products">
                <ul>
                    <li className='hover:pl-1 ease-in-out '>All Jewellery</li>
                    <li className='hover:pl-1 ease-in-out '>Rings</li>
                    <li className='hover:pl-1 ease-in-out '>Necklaces</li>
                    <li className='hover:pl-1 ease-in-out '>Anklets</li>
                </ul>
            </Link>
            </div>

            <div className="leading-7 text-lg">
            <h1 className='mb-2 mt-2 text-2xl underline decoration-red-500 text-white font-semibold'>Offline Stores</h1>
                <ul>
                    <li>Store 1</li>
                    <li>Store 2</li>
                </ul>
            </div>

        </div>
    </div>
  );
}

export default Footer