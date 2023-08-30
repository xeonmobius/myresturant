import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerbg.png')] md:h-[70vh]">
      {/* Text container */}
      <div className="flex-1 flex flex-col justify-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burgers and Fries Combo!</h1>
        <p className="text-white xl:text-xl">Really good deal. Try our new burger combo. Limited time offer!</p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* Image container */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
