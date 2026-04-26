'use client';

import React from 'react';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Apple,
  Play
} from 'lucide-react';

export default function FooterSection() {
  const footerLinks = [
    { title: "About", links: ["About Us", "Find store", "Categories", "Blogs"] },
    { title: "Partnership", links: ["About Us", "Find store", "Categories", "Blogs"] },
    { title: "Information", links: ["Help Center", "Money Refund", "Shipping", "Contact us"] },
    { title: "For users", links: ["Login", "Register", "Settings", "My Orders"] },
  ];

  const socialIcons = [
    { Icon: Facebook },
    { Icon: Twitter },
    { Icon: Linkedin },
    { Icon: Instagram },
    { Icon: Youtube }
  ];

  return (
    <footer className="w-full bg-white border-t border-[#DEE2E7] font-sans">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#0D6EFD] w-10 h-10 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src="/assets/images/logo-symbol.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#0D6EFD] text-2xl font-bold tracking-tight">
                Brand
              </span>
            </div>

            <p className="text-[#505050] text-sm sm:text-base leading-relaxed mb-6 max-w-[280px]">
              Best information about the company goes here but now lorem ipsum is simply dummy text.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialIcons.map(({ Icon }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[#BDC4CD] rounded-full hover:bg-[#0D6EFD] transition-all duration-300 flex items-center justify-center text-white"
                >
                  <Icon size={18} fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, idx) => (
            <div
              key={idx}
              className="sm:col-span-1 md:col-span-1 lg:col-span-2"
            >
              <h3 className="font-bold text-[#1C1C1C] mb-4 text-base sm:text-lg">
                {group.title}
              </h3>

              <ul className="space-y-2 sm:space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[#8B96A5] hover:text-[#0D6EFD] hover:underline transition-colors text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* App Download */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-bold text-[#1C1C1C] mb-4 text-base sm:text-lg">
              Get app
            </h3>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <button className="w-full sm:w-[160px] lg:w-[104px] h-[42px] bg-[#1C1C1C] rounded-lg flex items-center px-3 gap-2 hover:bg-gray-800 transition-colors shadow-sm">
                <Apple className="text-white fill-current" size={20} />
                <div className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[7px] uppercase opacity-80">
                    Download on
                  </span>
                  <span className="text-[11px] font-bold">
                    App Store
                  </span>
                </div>
              </button>

              <button className="w-full sm:w-[160px] lg:w-[104px] h-[42px] bg-[#1C1C1C] rounded-lg flex items-center px-3 gap-2 hover:bg-gray-800 transition-colors shadow-sm">
                <Play className="text-white fill-current" size={18} />
                <div className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[7px] uppercase opacity-80">
                    Get it on
                  </span>
                  <span className="text-[11px] font-bold">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#EFF2F4] border-t border-[#DEE2E7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#606060]">

          <p className="text-sm sm:text-base text-center md:text-left">
            © 2026 Ecommerce. All rights reserved.
          </p>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#0D6EFD] transition-colors group">
            <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-gray-200">
              <Image
                src="/assets/icons/flags/AM.png"
                alt="English"
                fill
                className="object-cover"
              />
            </div>

            <span className="text-sm font-medium">English</span>

            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}