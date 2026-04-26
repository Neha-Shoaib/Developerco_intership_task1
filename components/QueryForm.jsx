'use client';

import { useState } from 'react';

export default function SendInquiryForm() {
  const [item, setItem] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ item, details, quantity });
    alert('Inquiry sent!');
  };

  return (
    // Max-width [1536px] matches your other sections for a unified look
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-gray-100">
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg"
        style={{ minHeight: '420px' }}
      >
        {/* Background Gradient with an image overlay for a premium tech feel */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#2c7be5] rounded-lg"
        />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

        {/* Grid logic: 
          - Mobile: Stacked (1 col)
          - Tablet: 2 cols (50/50)
          - Ultra-wide: 7/5 split (lg:grid-cols-12) to keep the form compact
        */}
        <div className="relative min-h-[420px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 px-6 sm:px-10 lg:px-16 py-10 items-center">
          
          {/* Left Content - Takes 7/12 on large screens */}
          <div className="lg:col-span-7 text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.1]">
              An easy way to send
              <br />
              requests to all suppliers
            </h2>

            <p className="text-blue-50 text-base sm:text-lg xl:text-xl max-w-lg leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Right Form - Takes 5/12 on large screens */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md lg:ml-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Send quote to suppliers
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="What item you need?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black transition-all"
                  required
                />
              </div>

              <div>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Type more details..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                  placeholder="Quantity"
                />

                <select
                  defaultValue="Pcs"
                  className="w-full text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Pcs">Pcs</option>
                  <option value="Kg">Kg</option>
                  <option value="Set">Set</option>
                  <option value="Box">Box</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition-all mt-4"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}