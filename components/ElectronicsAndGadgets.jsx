import Image from 'next/image';

export default function ElectronicsAndGadgets() {
  const items = [
    { title: "Smart Watches",    price: "USD 19",  img: "/assets/images/tech/watch.png" },
    { title: "Cameras",          price: "USD 89",  img: "/assets/images/interior/camera.png" },
    { title: "Headphones",       price: "USD 10",  img: "/assets/images/interior/white headphone.png" },
    { title: "Smart Watches",    price: "USD 90",  img: "/assets/images/interior/black kettle.png" },
    { title: "Gaming Set",       price: "USD 35",  img: "/assets/images/interior/headphones.png" },
    { title: "Laptops and PC",   price: "USD 340", img: "/assets/images/interior/laptop.png" },
    { title: "Smartphones",      price: "USD 19",  img: "/assets/images/interior/camon tablet.png" },
    { title: "Electric Kettle",  price: "USD 240", img: "/assets/images/interior/canon camera.png" },
  ];

  return (
    // Max-width 1536px (2xl) keeps the section consistent with your HomeAndOutdoor component
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray-100">
      <div 
        className="
          grid bg-[#f8f6f2] border border-[#e5e0d9] rounded-lg 
          overflow-hidden shadow-sm
          grid-cols-1 md:grid-cols-12
        "
        style={{ minHeight: '260px' }}
      >
        {/* Left Sidebar - Banner Section */}
        <div className="md:col-span-3 lg:col-span-2 bg-[#f8f6f2] relative flex flex-col justify-between p-6 lg:p-8">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
              Electronics
              <br />
              & Gadgets
            </h2>
          </div>

          <div className="mt-4 sm:mt-6">
            <button 
              className="
                bg-white text-gray-800 
                px-5 lg:px-6 py-2 lg:py-3 rounded-md text-sm font-medium
                border border-gray-300 hover:bg-gray-50 transition
                relative z-10 w-full sm:w-auto shadow-sm
              "
            >
              Source now 
            </button>
          </div>

          {/* Using Next.js Image for banner optimization */}
          <Image 
            src="/assets/images/electric_banner.png" 
            alt="electronics banner" 
            fill
            className="object-cover opacity-60 pointer-events-none"
            priority
          />
        </div>

        {/* Right Items Grid - Optimized for large screens */}
        <div className="
          md:col-span-9 lg:col-span-10 
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5
          bg-white divide-x divide-y divide-[#e5e0d9]
        ">
          {items.map((item, i) => (
            <div 
              key={i}
              className="
                relative bg-white p-4 lg:p-6 flex flex-col justify-between
                hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.4)] lg:hover:bg-gray-50/70 
                transition-all duration-300 group cursor-pointer min-h-[130px] lg:min-h-[150px]
              "
            >
              <div className="z-10">
                <div className="text-sm lg:text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs lg:text-sm text-gray-500 mt-1">
                  From<br/>
                  <span className="text-gray-900 font-semibold">{item.price}</span>
                </div>
              </div>

              {/* Product Image - Scaled slightly for larger viewports */}
              <div className="absolute bottom-2 right-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100px, 150px"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}