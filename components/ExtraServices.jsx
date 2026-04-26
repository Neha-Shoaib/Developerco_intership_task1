import Image from "next/image";

export default function ExtraServices() {
  const services = [
    {
      title: "Source from Industry Hubs",
      icon: "/assets/images/services/search.png",
      image: "/assets/images/services/1.png",
    },
    {
      title: "Customize Your Product",
      icon: "/assets/images/services/box.png",
      image: "/assets/images/services/2.png",
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      icon: "/assets/images/services/arrow.png",
      image: "/assets/images/services/3.png",
    },
    {
      title: "Product monitoring and inspection",
      icon: "/assets/images/services/sheild.png",
      image: "/assets/images/services/4.png",
    },
  ];

  const regions = [
    { flag: "/assets/icons/flags/UAE.png", name: "Arabic Emirates", domain: "shopname.ae" },
    { flag: "/assets/icons/flags/AU.png", name: "Australia", domain: "shopname.ae" },
    { flag: "/assets/icons/flags/AM.png", name: "United States", domain: "shopname.ae" },
    { flag: "/assets/icons/flags/R.png", name: "Russia", domain: "shopname.ru" },
    { flag: "/assets/icons/flags/ITALY.png", name: "Italy", domain: "shopname.it" },
    { flag: "/assets/icons/flags/Br.png", name: "Denmark", domain: "denmark.com.dk" },
    { flag: "/assets/icons/flags/FR.png", name: "France", domain: "shopname.fr" },
    { flag: "/assets/icons/flags/UAE.png", name: "Arabic Emirates", domain: "shopname.ae" },
    { flag: "/assets/icons/flags/china.png", name: "China", domain: "shopname.ae" },
    { flag: "/assets/icons/flags/ENG.png", name: "Great Britain", domain: "shopname.co.uk" },
  ];

  return (
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-8 xl:mb-10 text-black">
        Our extra services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg bg-white group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-32 md:h-36 xl:h-44 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Icon badge */}
            <div className="absolute right-6 top-[110px] md:top-[125px] xl:top-[155px] z-20">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#D1E7FF] rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform group-hover:rotate-12">
                <Image
                  src={service.icon}
                  width={24}
                  height={24}
                  alt="service icon"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="p-5 lg:p-6 pt-8">
              <p className="text-base lg:text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Suppliers by region */}
      <div className="mt-16 xl:mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-10 text-gray-900">
          Suppliers by region
        </h2>

        {/* Region Grid - Scales to 6 columns on ultra-wide */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-6">
          {regions.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 p-3 xl:p-4 bg-white rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="relative w-8 h-6 flex-shrink-0 shadow-sm border border-gray-100">
                <Image
                  src={item.flag}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {item.domain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}