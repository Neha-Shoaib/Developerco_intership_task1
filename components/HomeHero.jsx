'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, User } from 'lucide-react';

export default function HomeHero() {
  const [active, setActive] = useState('Automobiles');

  const categories = [
    'Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech',
    'Tools, equipments', 'Sports and outdoor', 'Animal and pets',
    'Machinery tools', 'More category'
  ];

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-20 p-5 bg-white ">
        <div className="flex gap-5 h-[340px]">

          <div className=" bg-white border rounded-lg flex flex-col text-sm w-[220px] h-[340px]">
            <div className="flex-1 overflow-y-auto ">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full px-4 py-2 text-left hover:bg-blue-50 flex items-center justify-between
                    ${active === cat ? 'bg-blue-50 text-black  border-blue-600' : 'text-gray-700'}`}
                >
                  {cat}
                  {cat !== 'More category' && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative ">
            <img src="/assets/images/Banner.png" alt='banner' width={15} height={15}
              className="absolute inset-0 bg-cover bg-center  w-[665px] h-[340px] object-contain "
            />
            <div className="relative h-full p-8 flex flex-col justify-center ">
              <h1 className="text-black drop-shadow-md">
                <span className='text-3xl md:text-4xl text-black '>Latest trending</span><br/><span className=' font-bold text-3xl md:text-4xl text-black '>Electronic items</span>
              </h1>
              <button className="mt-5 px-6 py-2.5 bg-white text-black rounded font-medium hover:bg-gray-100 w-fit">
                Learn more
              </button>
            </div>
          </div>

          <div className="w-[200px] flex flex-col gap-4 h-[340px]">

    
      <div className="flex flex-col items-center  p-3 bg-blue-100 border border-gray-200 rounded-lg  w-[200px] h-[150px] ">     
        <div className='flex flex-row gap-2 '>   
           <img src="/assets/icons/Avatar.png" alt='avatar' height={44} width={44} className='w-[44px] h-[44px] object-contain'/>
        <div>
         <h3 className="text-md font-medium text-gray-900 mb-1">Hi, user</h3>
        <p className="text-md font-medium text-gray-900 mb-1">let's get stated</p>
</div>
</div>

        <div className="w-full space-y-3">
          <Link
            href="/join"
            className="block w-[180px] h-[30px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-0.5 rounded-md text-center transition-colors"
          >
            Join now
          </Link>

          <Link
            href="/login"
            className="block w-[180px] h-[30px] border border-gray-300 hover:bg-gray-50 bg-white text-blue-600 font-medium py-0.5 rounded-md text-center transition-colors  "
          >
            Log in
          </Link>
        </div>

    </div>
  

            <div className="bg-orange-500 text-white rounded-lg p-4  text-md  w-[200px] h-[85px]">
              Get US$10 off<br/>with a new supplier
            </div>

            <div className="bg-teal-600 text-white rounded-lg p-4  text-md  w-[200px] h-[85px]">
              Send quotes with<br/>supplier preferences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}