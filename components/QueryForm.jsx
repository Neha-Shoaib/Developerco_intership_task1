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
    <div className="relative max-w-[1440px] mx-auto px-20 py-0 bg-gray-100">
      <div 
        className="relative rounded-lg "
        style={{ height: '420px' }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-200 rounded-lg"
        />

        <div className="relative h-full grid md:grid-cols-2 gap-8 px-10 items-center">
          <div className="text-white space-y-5">
            <h2 className="text-4xl md:text-4xl font-bold leading-tight">
              An easy way to send
              <br />
              requests to all suppliers
            </h2>

            <p className="text-blue-50 text-base md:text-lg max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-5 max-h-[350px] max-w-[490px] ">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Send quote to suppliers
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="What item you need?"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>

              <div>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Type more details..."
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                    placeholder="Quantity"
                  />
                </div>

                <div>
                  <select
                    defaultValue="Pcs"
                    className="w-30 text-gray-500 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                  >
                    <option value="Pcs">Pcs</option>
                    <option value="Kg">Kg</option>
                    <option value="Set">Set</option>
                    <option value="Box">Box</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-1/4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
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