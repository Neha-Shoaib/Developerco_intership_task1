import Image from 'next/image';

export default function HomeAndOutdoor() {
  const items = [
    { title: "Soft chairs",     price: "USD 19", img: "/assets/images/interior/sofa.png" },
    { title: "Sofa & chair",    price: "USD 19", img: "/assets/images/interior/lamp.png" },
    { title: "Kitchen dishes",  price: "USD 19", img: "/assets/images/interior/mattress.png" },
    { title: "Smart watches",   price: "USD 19", img: "/assets/images/interior/pot.png" },
    { title: "Kitchen mixer",   price: "USD 100", img: "/assets/images/interior/juicer.png" },
    { title: "Blenders",        price: "USD 39", img: "/assets/images/interior/coffee_maker.png" },
    { title: "Home appliance",  price: "USD 19", img: "/assets/images/interior/towel_stand.jpg" },
    { title: "Coffee maker",    price: "USD 10", img: "/assets/images/interior/plant_pot.png" },
  ];

  return (
    // Increased max-width to 2xl (1536px) to accommodate wider screens
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray-100">
      
      <div 
        className="
          grid bg-[#f8f6f2] border border-[#e5e0d9] rounded-lg 
          overflow-hidden shadow-sm
          grid-cols-1 md:grid-cols-12
        "
        style={{ minHeight: '260px' }}
      >
        {/* Left Sidebar - Adjusted col-span for 1440px+ screens */}
        <div className="md:col-span-3 lg:col-span-2 xl:col-span-2 bg-[#f8f6f2] relative flex flex-col justify-between p-6 sm:p-8">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
              Home and
              <br />
              outdoor
            </h2>
          </div>

          <div className="mt-4 sm:mt-6">
            <button 
              className="
                bg-white text-gray-800 
                px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-medium
                border border-gray-300 hover:bg-gray-50 transition
                relative z-10 w-full sm:w-auto
              "
            >
              Source now 
            </button>
          </div>

          {/* Using Next.js Image for the banner */}
          <Image 
            src="/assets/images/home_banner.jpg" 
            alt="home banner" 
            fill
            className="object-cover opacity-60 pointer-events-none"
            priority
          />
        </div>

        {/* Right Items Grid - Added xl:grid-cols-4 and 2xl:grid-cols-5 */}
        <div className="
          md:col-span-9 lg:col-span-10 
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5
          bg-white divide-x divide-y divide-[#e5e0d9]
        ">
          {items.map((item, i) => (
            <div 
              key={i}
              className="
                relative bg-white p-4 sm:p-6 flex flex-col justify-between
                hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.5)] lg:hover:bg-gray-50/70 
                transition-all group min-h-[130px] lg:min-h-[150px]
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

              {/* Responsive Image container for large screens */}
              <div className="absolute bottom-2 right-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}