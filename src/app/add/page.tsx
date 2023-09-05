"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Option = {
  title: string;
  additionalPrice: number;
};

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

const AddPage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form className="shadow-lg flex flex-wrap gap-4 p-8">
        <h1>Add New Product</h1>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Desc</label>
          <textarea
            name="desc"
            onChange={handleChange}
            className="ring-1 ring-red-200 p-2 rounded-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="number"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Category</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="category"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Options</label>
          <div>
            <input
              className="ring-1 ring-red-200 p-2 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
              onChange={changeOption}
            />
            <input
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
              onChange={changeOption}
              className="ring-1 ring-red-200 p-2 rounded-sm"
            />
          </div>
          <button
            className="w-52 bg-red-500 text-white p-2"
            onClick={() =>
              setOptions((prev) => {
                return [...prev, option];
              })
            }
          >
            Add Option
          </button>
        </div>
        <div>
          {options.map((item) => (
            <div
              className="ring-1 p-2 ring-red-500 rounded-md cursor-pointer"
              key={item.title}
              onClick={() =>
                setOptions(
                  options.filter((option) => option.title !== item.title)
                )
              }
            >
              <span>{item.title}</span>
              <span>{item.additionalPrice}</span>
            </div>
          ))}
        </div>
        <button type="submit" className="p-2 w-full bg-red-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
