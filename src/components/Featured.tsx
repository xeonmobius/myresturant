import { featuredProducts } from "@/data";
import Image from "next/image";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vh] xl:w-[33vh] xl:h-[90vh]"
          >
            {/* Image Container */}
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={product.img}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="text-xl font-bold">{product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
