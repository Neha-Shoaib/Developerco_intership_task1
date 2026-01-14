'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Apple, 
  Play, 
  Mail 
} from 'lucide-react';

export default function FooterSection() {

  const footerLinks = [
    { title: "About", links: ["About Us", "Find store", "Categories", "Blogs"] },
    { title: "Partnership", links: ["About Us", "Find store", "Categories", "Blogs"] },
    { title: "Information", links: ["Help Center", "Money Refund", "Shipping", "Contact us"] },
    { title: "For users", links: ["Login", "Register", "Settings", "My Orders"] },
  ];

  const socialIcons = [
    { Icon: Facebook, color: "#4267B2" },
    { Icon: Twitter, color: "#1DA1F2" },
    { Icon: Linkedin, color: "#0077B5" },
    { Icon: Instagram, color: "#E4405F" },
    { Icon: Youtube, color: "#FF0000" }
  ];

  return (
    <div className="w-full font-sans border-t border-[#DEE2E7]">


      <footer className="w-full bg-white pt-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-8 pb-12">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#0D6EFD] w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                <img src="/assets/images/logo-symbol.png" alt="logo" width={30} height={30} />
                </div>
                <span className="text-[#0D6EFD] text-2xl font-bold tracking-tight">Brand</span>
              </div>
              <p className="text-[#505050] text-[16px] leading-6 mb-6 max-w-[260px]">
                Best information about the company gies here but now lorem ipsum is
              </p>
              
              <div className="flex gap-3">
                 {socialIcons.map(({ Icon }, i) => (
                   <a key={i} href="#" className="w-8 h-8 bg-[#BDC4CD] rounded-full hover:bg-[#8B96A5] transition-all flex items-center justify-center text-white">
                     <Icon size={16} fill="currentColor" />
                   </a>
                 ))}
              </div>
            </div>

            {footerLinks.map((group, idx) => (
              <div key={idx} className="md:col-span-1">
                <h3 className="font-bold text-[#1C1C1C] mb-4">{group.title}</h3>
                <ul className="space-y-2 text-[#8B96A5] text-[15px]">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-[#127FFF] hover:underline transition-all">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-1">
              <h3 className="font-bold text-[#1C1C1C] mb-4">Get app</h3>
              <div className="flex flex-col gap-2">
                <button className="w-[124px] h-[40px] bg-[#1C1C1C] rounded-md flex items-center px-2 gap-2 hover:opacity-80">
                   <Apple className="text-white fill-current" size={20} />
                   <div className="flex flex-col items-start leading-none text-white">
                     <span className="text-[7px] uppercase">Download on the</span>
                     <span className="text-[12px] font-bold">App Store</span>
                   </div>
                </button>
                <button className="w-[124px] h-[40px] bg-[#1C1C1C] rounded-md flex items-center px-2 gap-2 hover:opacity-80">
                   <Play className="text-white fill-current" size={18} />
                   <div className="flex flex-col items-start leading-none text-white">
                     <span className="text-[7px] uppercase">Get it on</span>
                     <span className="text-[12px] font-bold">Google Play</span>
                   </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EFF2F4] py-5 border-t border-[#DEE2E7]">
          <div className="max-w-[1140px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#606060]">
            <p className="text-[16px]">© 2023 Ecommerce.</p>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#1C1C1C]">
              <div className="w-6 h-4 overflow-hidden rounded-sm flex flex-col">
                <div className=" h-1/2 w-full flex flex-wrap p-[1px]">
                  <div className="w-[1px] h-[1px] bg-white m-[0.5px]"></div>
                </div>
                <Image src="/assets/icons/flags/AM.png" alt="america" width={20} height={30}/>
              </div>
              <span className="text-[16px]">English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}