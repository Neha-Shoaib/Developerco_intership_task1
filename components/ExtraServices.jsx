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

  return (
    <div className="max-w-[1440px] mx-auto px-20 py-10 md:py-12 lg:py-5 bg-gray-100">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 text-black">
        Our extra services
      </h2>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative  overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-[280px] h-[200px] mx-auto"
          >
            {/* Image  */}
            <div className="h-[130px] w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute  bg-white" />
            </div>

            <div className="absolute top-[130px] right-4 -translate-y-1/2 z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-md border border-white">
                <Image
                  src={service.icon}
                  width={20}
                  height={20}
                  alt="service icons"
                  className="text-2xl md:text-3xl"
                />
              </div>
            </div>

            <div className="h-[70px] bg-white flex flex-col items-center justify-center px-4 ">
              <p className="text-base font-medium text-gray-800 pr-20">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:mt-20 lg:my-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 text-gray-900">
          Suppliers by region
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            {
              flag: "/assets/icons/flags/UAE.png",
              name: "Arabic Emirates",
              domain: "shopname.ae",
            },
            {
              flag: "/assets/icons/flags/AU.png",
              name: "Australia",
              domain: "shopname.ae",
            },
            {
              flag: "/assets/icons/flags/AM.png",
              name: "United States",
              domain: "shopname.ae",
            },
            {
              flag: "/assets/icons/flags/R.png",
              name: "Russia",
              domain: "shopname.ru",
            },
            {
              flag: "/assets/icons/flags/ITALY.png",
              name: "Italy",
              domain: "shopname.it",
            },
            {
              flag: "/assets/icons/flags/Br.png",
              name: "Denmark",
              domain: "denmark.com.dk",
            },
            {
              flag: "/assets/icons/flags/FR.png",
              name: "France",
              domain: "shopname.fr",
            },
            {
              flag: "/assets/icons/flags/UAE.png",
              name: "Arabic Emirates",
              domain: "shopname.ae",
            },
            {
              flag: "/assets/icons/flags/china.png",
              name: "China",
              domain: "shopname.ae",
            },
            {
              flag: "/assets/icons/flags/ENG.png",
              name: "Great Britain",
              domain: "shopname.co.uk",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-row gap-2 items-center space-x-2">
              <Image
                src={item.flag}
                alt="flags"
                width={10}
                height={5}
                className="w-8 h-6 mb-2"
              />
              <div>
                <p className="text-sm md:text-lg font-medium text-black">
                  {item.name}
                </p>
                <p className="text-xs md:text-sm text-gray-400">
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
