'use client';

import { useEffect, useState } from 'react';

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
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-100 ">
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden mx-auto w-[1100px] h-[240px]">
        <div className="flex">

          <div className="w-72 min-w-[18rem] border-r border-gray-100 bg-white p-5 flex flex-col gap-3 ">
            <div className='flex flex-col'>
            <h2 className="text-2xl font-bold text-gray-800">Deals and offers</h2>
          <p className="text-gray-600 ">Hygiene equipments</p>
</div>
            <div className="grid grid-cols-4 gap-3 text-center">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hour' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-500 rounded-lg p-0.5 min-w-[40px] h-[50px]">
                  <div className="text-1xl font-bold text-white">
                    {pad(item.value)}
                  </div>
                  <div className="text-xs text-white mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-5 divide-x divide-blue-200 bg-white">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between p-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="relative w-full aspect-square mb-4">
                 <img src={product.image} alt="product" className='w-[130px] h-[120px] object-contain' />
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </p>
                  <div className="inline-block bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-sm">
                    {product.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}