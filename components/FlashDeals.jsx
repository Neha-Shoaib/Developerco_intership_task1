'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DealsAndOffers() {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(targetDate.getHours() + 13);
    targetDate.setMinutes(targetDate.getMinutes() + 34);
    targetDate.setSeconds(targetDate.getSeconds() + 56);

    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    { name: 'Smart watches', discount: '-25%', image: '/assets/images/tech/watch.png' },
    { name: 'Laptops', discount: '-15%', image: '/assets/images/tech/laptop.png' },
    { name: 'GoPro cameras', discount: '-40%', image: '/assets/images/tech/camera.png' },
    { name: 'Headphones', discount: '-25%', image: '/assets/images/tech/headphones.png' },
    { name: 'Canon cameras', discount: '-25%', image: '/assets/images/tech/canon-camera.png' },
  ];

  const pad = (num) => String(num).padStart(2, '0');

  return (
    // Max-width ensures it doesn't stretch infinitely on ultrawide monitors
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray-100">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row">

          {/* Timer Section - Fixed width on desktop for stability */}
          <div className="w-full sm:w-64 lg:w-72 border-b sm:border-b-0 sm:border-r border-gray-200 p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Deals and offers</h2>
              <p className="text-sm lg:text-base text-gray-500 mt-1">Hygiene equipments</p>
            </div>
            
            <div className="flex sm:grid sm:grid-cols-4 gap-2 lg:gap-3 text-center mt-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hour' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
              ].map((item, i) => (
                <div key={i} className="bg-[#464646] rounded-md p-1 lg:p-2 min-w-[50px] lg:min-w-[60px]">
                  <div className="text-lg lg:text-xl font-bold text-white">
                    {pad(item.value)}
                  </div>
                  <div className="text-[10px] lg:text-xs text-white uppercase opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid - Adapts from 2 to 5 columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 lg:p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white"
              >
                <div className="relative w-full aspect-square mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                <div className="text-center w-full">
                  <p className="text-sm lg:text-base text-gray-800 mb-2 font-medium">
                    {product.name}
                  </p>
                  <span className="inline-flex items-center justify-center bg-red-50 text-red-600 font-semibold px-3 py-1 rounded-full text-xs lg:text-sm">
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}