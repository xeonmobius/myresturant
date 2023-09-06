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
  const [file, setFile] = useState<File>();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  }

  const upload = async () => {

    const data = new FormData();

    data.append("file", file!);
    data.append("upload_preset", "myresturant");

    const res = await fetch("https://api.cloudinary.com/v1_1/depdqxrf6/image/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    });

    const responseData = await res.json();
    return responseData.url;
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

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const url = await upload();
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        })
      })

      const data = await res.json();
      router.push(`/product/${data.id}`);

    } catch (error) {
      console.log(error);}
  }

  return (
    <div>
      <form className="shadow-lg flex flex-wrap gap-4 p-8" onSubmit={handleSubmit}>
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
          <label>Image</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="file"
            name="image"
            onChange={handleChangeImage}
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
            name="catSlug"
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
        <button
          type="submit"
          className="p-2 w-full bg-red-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
