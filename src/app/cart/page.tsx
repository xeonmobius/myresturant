import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex felx-col text-red-500 lg:flex-row ">
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* Single Item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Title</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$90.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* Single Item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Title</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$90.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* Single Item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Title</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$90.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.70</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost (3 items)</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Total Cost</span>
          <span className="font-bold">$90.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
