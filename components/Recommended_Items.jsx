import Image from 'next/image';
import Link from 'next/link';

export default function RecommendedItems() {
  const products = [
    { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", img: "/images/clothes/cloth1.png", desc: "T-shirts with multiple colors, for men" },
    { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", img: "/images/clothes/cloth3.jpg", desc: "Jeans shorts for men blue color" },
    { id: 3, name: "Brown winter coat medium size", price: "$12.50", img: "/images/clothes/cloth7.png", desc: "Brown winter coat medium size" },
    { id: 4, name: "Jeans bag for travel for men", price: "$34.00", img: "/images/clothes/cloth6.png", desc: "Jeans bag for travel for men" },
    { id: 5, name: "Leather wallet", price: "$99.00", img: "/images/clothes/cloth5.png", desc: "Leather wallet" },
    { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", img: "/images/interior/white headphone.png", desc: "Canon camera zoom black, 100x zoom" },
    { id: 7, name: "Headset for gaming with mic", price: "$8.99", img: "/images/clothes/cloth4.png", desc: "Headset for gaming with mic" },
    { id: 8, name: "Smartwatch silver color modern", price: "$10.30", img: "/images/interior/pot.png", desc: "Smartwatch silver color modern" },
    { id: 9, name: "Blue wallet for men leather", price: "$10.30", img: "/images/interior/black kettle.png", desc: "Blue wallet for men leather" },
    { id: 10, name: "Jeans bag for travel for men", price: "$80.95", img: "/images/clothes/cloth5.png", desc: "Jeans bag for travel for men" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-20 py-8 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Recommended items
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-all"
          >
            <div className="relative aspect-square bg-white overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>

            <div className="p-3 ">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {product.price}
              </div>
              <p className="mt-1.5 text-xs md:text-sm text-gray-600 line-clamp-2">
                {product.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}