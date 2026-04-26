// components/Header.tsx
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, MessageSquare, Heart, Menu, ChevronDown, X, Search } from 'lucide-react';

export default function Header() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/hot-offers', label: 'Hot offers' },
    { href: '/gift-boxes', label: 'Gift boxes' },
    { href: '/projects', label: 'Projects' },
    { href: '/menu-item', label: 'Menu item' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 ">
 
       {/* Top row - responsive padding */}
       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between gap-3 sm:gap-6 mb-5">

        {/* Logo */}
        <div className="flex items-center shrink-0">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">
                    <Image
                                src="/assets/images/logo-symbol.png"
                                alt="logo"
                                width={24}
                                height={24}
                              />
            </span>
          </div>
          <span className="ml-2 text-lg sm:text-xl font-bold text-blue-600">BRAND</span>
        </div>

        {/* Search bar - hidden on mobile, visible on tablet+ */}
        <div className="flex-1 max-w-3xl flex items-center min-w-[200px] sm:min-w-[300px] md:min-w-[380px] text-gray-600 border border-blue-500 focus:ring-blue-500 rounded hidden md:flex" >
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-9 sm:h-10 px-3 sm:px-4 border border-blue-300 rounded-l focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <select className="h-9 sm:h-10 px-2 sm:px-3 border border-blue-400 bg-gray-50 text-gray-700 focus:outline-none focus:ring-blue-500 text-xs sm:text-sm">
            <option>All category</option>
          </select>
          <button className="h-9 sm:h-10 px-4 sm:px-6 bg-blue-600 text-white font-medium rounded-r hover:bg-blue-700 transition-colors text-sm">
            Search
          </button>
        </div>

        {/* Icon buttons - responsive gap and size */}
        <div className="flex items-start gap-3 sm:gap-6 md:gap-8 text-gray-400">
          <Link href="/profile" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <User className="h-4 w-4 sm:h-5 sm:w-5 mb-0.5 sm:mb-1" />
            <span className="text-[10px] sm:text-xs">Profile</span>
          </Link>

          <Link href="/messages" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mb-0.5 sm:mb-1" />
            <span className="text-[10px] sm:text-xs">Message</span>
          </Link>

          <Link href="/orders" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 mb-0.5 sm:mb-1" />
            <span className="text-[10px] sm:text-xs">Orders</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center hover:text-blue-600 transition-colors">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mb-0.5 sm:mb-1" />
            <span className="text-[10px] sm:text-xs">My cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom row - navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 flex items-center justify-between text-sm">

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-black">
            {/* Desktop: Full navigation - hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8">
              <button className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600">
                <Menu className="h-5 w-5" />
                All category
              </button>

              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="relative">
                <button
                  onClick={() => setHelpOpen(!helpOpen)}
                  className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors"
                  aria-label="Help menu"
                  aria-expanded={helpOpen}
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

            {/* Mobile: Hamburger menu button - hidden on desktop */}
            <button 
              className="lg:hidden flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600 p-1.5 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
              <span className="text-sm sm:text-base">Menu</span>
            </button>
          </div>

          {/* Desktop: Language and ship to - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-700">
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

      {/* Mobile slide-down menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
            {/* Mobile search - visible on mobile */}
            <div className="flex items-center text-gray-600 border border-blue-500 rounded md:hidden" >
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-9 sm:h-10 px-3 sm:px-4 border border-blue-300 rounded-l focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="h-9 sm:h-10 px-4 sm:px-6 bg-blue-600 text-white font-medium rounded-r hover:bg-blue-700 transition-colors text-sm">
                Search
              </button>
            </div>

            {/* Mobile nav links */}
            <button className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600 w-full py-2">
              <Menu className="h-5 w-5" />
              All category
            </button>

            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block font-medium text-black hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile help dropdown */}
            <div className="relative">
              <button
                onClick={() => setHelpOpen(!helpOpen)}
                className="flex items-center gap-1 font-medium text-black hover:text-blue-600 transition-colors w-full py-2"
                aria-label="Help menu"
                aria-expanded={helpOpen}
              >
                Help
                <ChevronDown className="h-4 w-4" />
              </button>

              {helpOpen && (
                <div className="py-2 bg-gray-50 rounded border border-gray-200">
                  <Link href="/help" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                    Help Center
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                    Contact us
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile language and ship to */}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-200">
              <button className="flex items-center gap-1 text-black hover:text-blue-600 text-left">
                English, USD
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <div className="flex items-center gap-1.5 text-black hover:text-blue-600">
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
      </div>
    </header>
  );
} 
 