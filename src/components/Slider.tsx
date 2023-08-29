"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Fresh and always crispy and always spicy!",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We will deliver your order wherever you are in NY!",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza in town!",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center p-4 md:p-10 uppercase md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="relative w-full flex-1">
        <Image
          src={data[currentSlide].image}
          alt="slider"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
