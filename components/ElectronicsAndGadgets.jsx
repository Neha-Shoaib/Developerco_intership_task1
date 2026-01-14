export default function HomeAndOutdoor() {
  const items = [
    { title: "Smart Watches",        price: "USD 19", img: "/assets/images/tech/watch.png" },
    { title: "Cameras",       price: "USD 89", img: "/assets/images/interior/camera.png" },
    { title: "Headphones",     price: "USD 10", img: "/assets/images/interior/white headphone.png" },
    { title: "Smart Watches",      price: "USD 90", img: "/assets/images/interior/black kettle.png" },
    { title: "Gaming Set",      price: "USD 35", img: "/assets/images/interior/headphones.png" },
    { title: "Laptops and PC",           price: "USD 340", img: "/assets/images/interior/laptop.png" },
    { title: "Smartphones",     price: "USD 19", img: "/assets/images/interior/camon tablet.png" },
    { title: "Electric Kettle",       price: "USD 240", img: "/assets/images/interior/canon camera.png" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-20 py-8 bg-gray-100">
      <div 
        className="
          grid bg-[#f8f6f2] border border-[#e5e0d9] rounded-lg 
          overflow-hidden shadow-sm
        "
        style={{ 
          height: '260px',
          gridTemplateColumns: '1.3fr 4fr' 
        }}
      >
        {/* Left section */}
        <div className="bg-[#f8f6f2] relative flex flex-col justify-between p-8">
          <div>
            <h2 className="text-3xl font-bold text-black leading-tight relative z-10">
              Home and
              <br />
              outdoor
            </h2>
          </div>

          <div className="mt-6">
            <button 
              className="
                bg-white text-gray-800 
                px-6 py-3 mb-15 rounded-md text-sm font-medium
                border border-gray-300 hover:bg-gray-50 transition
                bg-white
                relative
                z-10
              "
            >
              Source now 
            </button>
          </div>

          <img 
            src="/assets/images/electric_banner.png" 
            alt="home banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
          />
        </div>


        <div className="grid grid-rows-2 grid-cols-4 bg-white divide-x divide-y divide-[#e5e0d9]">
          {items.map((item, i) => (
            <div 
              key={i}
              className="
                relative bg-white p-4 flex flex-col justify-between
                hover:bg-gray-50/70 transition-colors group
              "
            >

              <div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  From<br/>{item.price}
                </div>
              </div>

              <div className="absolute bottom-3 right-4 w-20 h-20">
                <img 
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain "
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