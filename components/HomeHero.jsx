'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, User } from 'lucide-react';

export default function HomeHero() {
  const [active, setActive] = useState('Automobiles');

  const categories = [
    'Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech',
    'Tools, equipments', 'Sports and outdoor', 'Animal and pets',
    'Machinery tools', 'More category'
  ];

  return (
    <div className="bg-gray-100 py-6 mt-28 md:mt-32 pt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 bg-white rounded-lg">

          <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-stretch md:items-center">

            {/* Column 1: Categories Sidebar */}
            <div className="bg-white border rounded-lg flex flex-col text-sm w-full md:w-[220px] md:h-[340px] shrink-0">
              <div className="flex-1 overflow-y-auto max-h-[300px] md:max-h-none">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50 flex items-center justify-between
                      ${active === cat ? 'bg-blue-50 text-black border-l-4 border-blue-600' : 'text-gray-700'}`}
                  >
                    {cat}
                    {cat !== 'More category' && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Banner Image */}
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[340px] rounded-lg overflow-hidden flex-1 min-h-[220px]">
              <Image
                src="/assets/images/Banner.png"
                alt="banner"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
              />

              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h1 className="text-black drop-shadow-md">
                  <span className="text-xl sm:text-3xl md:text-4xl text-black">
                    Latest trending
                  </span>
                  <br />
                  <span className="font-bold text-xl sm:text-3xl md:text-4xl text-black">
                    Electronic items
                  </span>
                </h1>

                <button className="mt-4 sm:mt-5 px-5 sm:px-6 py-2.5 bg-white text-black rounded font-medium hover:bg-gray-100 w-fit transition-colors text-sm sm:text-base">
                  Learn more
                </button>
              </div>
            </div>

            {/* Column 3: User Actions & Promos */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-[200px] shrink-0">

              {/* User Welcome Card */}
              <div className="flex flex-col items-center p-3 sm:p-4 bg-blue-100 border border-gray-200 rounded-lg">
                <div className="flex flex-row gap-2 sm:gap-3 items-center mb-2 sm:mb-3">
                  <Image
                    src="/assets/icons/Avatar.png"
                    alt="avatar"
                    height={44}
                    width={44}
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                  />

                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      Hi, user
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      let s get started
                    </p>
                  </div>
                </div>

                <div className="w-full space-y-2">
                  <Link
                    href="/join"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md text-center transition-colors text-sm sm:text-base"
                  >
                    Join now
                  </Link>

                  <Link
                    href="/login"
                    className="block w-full border border-gray-300 hover:bg-gray-50 bg-white text-blue-600 font-medium py-2 rounded-md text-center transition-colors text-sm sm:text-base"
                  >
                    Log in
                  </Link>
                </div>
              </div>

              {/* Promo Card 1 */}
              <div className="bg-orange-500 text-white rounded-lg p-3 sm:p-4 text-sm">
                Get US$10 off
                <br />
                with a new supplier
              </div>

              {/* Promo Card 2 */}
              <div className="bg-teal-600 text-white rounded-lg p-3 sm:p-4 text-sm">
                Send quotes with
                <br />
                supplier preferences
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}