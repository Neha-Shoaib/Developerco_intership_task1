// components/Header.tsx
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, MessageSquare, Heart, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-15">
 
       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        <div className="flex items-center shrink-0">
          <div className=" bg-white p-1.5 rounded">
            <Image src="/images/logo-symbol.png" alt='brand-logo' width={600} height={600} className="h-10 w-10" />
          </div>
          <span className="ml-1 text-xl font-bold text-blue-300">Brand</span>
        </div>

        <div className="flex-1 max-w-3xl flex items-center min-w-[380px] text-gray-600 border border-blue-500 focus:ring-blue-500 rounded" >
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-10 px-4 border border-blue-300 rounded-l focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <select className="h-10 px-3 border  border-blue-400 bg-gray-50 text-gray-700 focus:outline-none focus:ring-blue-500">
            <option>All category</option>
          </select>
          <button className="h-10 px-6 bg-blue-600 text-white font-medium rounded-r hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        <div className="flex items-start gap-8 text-gray-400">
          <Link href="/profile" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Image src = "/icons/profile.png" alt='profile' width={50} height={50} className="h-5 w-5 mb-1" />
            <span className="text-xs">Profile</span>
          </Link>

          <Link href="/messages" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Image src = "/icons/message.png" alt='message' width={50} height={50} className="h-5 w-5 mb-1" />
            <span className="text-xs">Message</span>
          </Link>

          <Link href="/orders" className="flex flex-col items-center hover:text-blue-600 transition-colors">
  <Image src = "/icons/heart.png" alt='heart' width={50} height={50} className="h-5 w-5 mb-1" />
              <span className="text-xs">Orders</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center hover:text-blue-600 transition-colors">
             <Image src = "/icons/cart.png" alt='cart' width={50} height={50} className="h-5 w-5 mb-1" />
            <span className="text-xs">My cart</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-sm">

          <div className="flex items-center gap-8 text-black">
            <button className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600">
              <Menu className="h-5 w-5" />
              All category
            </button>

            <Link href="/hot-offers" className="font-medium hover:text-blue-600 transition-colors">
              Hot offers
            </Link>

            <Link href="/gift-boxes" className="font-medium hover:text-blue-600 transition-colors">
              Gift boxes
            </Link>

            <Link href="/projects" className="font-medium hover:text-blue-600 transition-colors">
              Projects
            </Link>

            <Link href="/menu-item" className="font-medium hover:text-blue-600 transition-colors">
              Menu item
            </Link>

            <div className="relative">
              <button
                onClick={() => setHelpOpen(!helpOpen)}
                className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors"
              >
                Help
                <ChevronDown className="h-4 w-4" />
              </button>

              {helpOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 bg-white shadow-lg rounded border border-gray-200 z-50 min-w-[140px]">
                  <Link href="/help" className="block px-4 py-1.5 hover:bg-gray-50 text-sm">
                    Help Center
                  </Link>
                  <Link href="/contact" className="block px-4 py-1.5 hover:bg-gray-50 text-sm">
                    Contact us
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-700">
            <button className="flex items-center gap-1 hover:text-blue-600">
              English, USD
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-center gap-1.5 hover:text-blue-600">
              <span>Ship to</span>
              <img 
                src="https://flagcdn.com/24x18/de.png" 
                alt="Germany" 
                className="h-3.5" 
              />
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}