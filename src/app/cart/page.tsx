"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])
  
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex felx-col text-red-500 lg:flex-row ">
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* Mapping through single Item */}
        {products.map((product) => (
          <div
            className="flex items-center justify-between mb-4"
            key={product.id}
          >
            {product.img && (
              <Image src={product.img} alt="" width={100} height={100} />
            )}
            <div>
              <h1 className="uppercase text-xl font-bold">{product.title} x {product.quantity}</h1>
              <span>{product.optionTitle}</span>
            </div>
            <h2 className="font-bold">${product.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(product)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.70</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost ({totalItems})</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Total Cost</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
