'use client';

import React, { useState } from 'react'; 
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail(""); 
  };

  return (
    <>
      <section className="w-full bg-[#EFF2F4] flex justify-center">
        <div className="w-full max-w-[1140px] h-[190px] flex flex-col items-center justify-center px-4">
          <h2 className="text-[20px] font-bold text-[#1C1C1C] mb-1">
            Subscribe on our newsletter
          </h2>
          <p className="text-[#606060] text-[16px] mb-5 text-center">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#8B96A5]" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full sm:w-[274px] pl-10 pr-3 py-2 border border-[#DEE2E7] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#1C1C1C]"
              />
            </div>
            <button 
              type="submit" 
              className="px-5 py-2 bg-[#127FFF] text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}