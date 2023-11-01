"use client";
import { useState, useRef } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";

export default function Register() {
  const [inputType, setInputType] = useState<"text" | "password">("password");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <main className="fixed h-screen w-full top-0 left-0">
      <Header />
      <div className="mt-14 p-5 md:py-10 md:px-10 xl:px-20 flex flex-col items-center md:items-start">
        <p className="text-[#9C9DA2] font-semibold text-sm md:text-base">
          GIST FOR FREE
        </p>
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Create Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-[#5195EA]"></div>
        </div>
        <p className="text-sm md:text-base mt-4 text-[#595B63]">
          Already A Member?{" "}
          <span className="text-[#5195EA] cursor-pointer hover:text-[#EDEDEE] duration-500">
            <Link href="/login">Log In</Link>
          </span>
        </p>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:w-full">
          <form className="mt-10 w-full md:w-[70%]" action="">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between w-[20rem] md:w-[26rem]">
              <div className="relative w-full md:w-[49%]">
                <input
                  className="text-sm focus:border-2 focus:border-[#5195EA] w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
                <FaRegAddressCard
                  size={14}
                  className="absolute top-4 right-2"
                />
              </div>
              <div className="relative w-full md:w-[49%]">
                <input
                  className="text-sm focus:border-2 focus:border-[#5195EA] w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
                <FaRegAddressCard
                  size={14}
                  className="absolute top-4 right-2"
                />
              </div>
            </div>
            <div className="relative mt-4 w-[20rem] md:w-[26rem]">
              <input
                className="text-sm focus:border-2 focus:border-[#5195EA] bg-[#595B63] px-2 py-3 w-full outline-none rounded-xl placeholder:text-xs"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <MdEmail size={14} className="absolute top-4 right-2" />
            </div>
            <div className="relative mt-4 w-[20rem] md:w-[26rem]">
              <input
                ref={inputRef}
                className="text-sm focus:border-2 focus:border-[#5195EA] bg-[#595B63] px-2 py-3 w-full outline-none rounded-xl placeholder:text-xs"
                type={inputType}
                name="password"
                id="password"
                placeholder="Password"
              />
              <BsEmojiHeartEyesFill
                size={14}
                className={`${
                  inputType === "text" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
              <FaMehRollingEyes
                size={14}
                className={`${
                  inputType === "password" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
            </div>
            <div className="flex w-[20rem] md:w-[26rem] mt-8 justify-between">
              <button className="w-full md:w-[48%] py-4 text-center text-xs rounded-3xl bg-[#595B63] hover:bg-[#5195EA] duration-500">
                Change Method
              </button>
              <button
                className="w-full md:w-[48%] py-4 text-center text-xs rounded-3xl bg-[#5195EA] hover:text-[#5195EA] hover:bg-[#EDEDEE] duration-500 hover:font-semibold"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="w-full md:w-[30%]">
            <div className="loader">
              <svg
                viewBox="0 0 18.528 35.424"
                version="1.1"
                y="0"
                x="0"
                height="369"
                width="193"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.358 35.05c.435-.175.646-.408.861-.95.374-.94.698-1.52 1.145-2.05.78-.92 1.757-1.638 2.666-1.957.603-.212.9-.204 1.505.041.843.343 1.597.25 2.062-.254.95-1.029 3.95-6.873 5.841-11.376.869-2.07.831-1.882.797-3.962-.034-2.106-.024-2.064-.927-3.887-1.639-3.31-4.426-6.582-7.147-8.392C8.71 1.298 6.715.504 5.296.328c-.718-.09-2.465-.001-3.183.16C.943.752.279 1.268.279 1.917c0 .119.437 1.136.97 2.26.533 1.126 1.044 2.291 1.135 2.591.334 1.106.776 3.567.945 5.27.065.652.357 1.286.751 1.633.419.367 1.351.786 1.964.883.286.044.534.096.553.115.018.018-.129.128-.327.244-.761.446-1.432 1.439-1.74 2.574-.216.802-.194 2.914.045 4.121.24 1.212.575 2.318 1.031 3.403.46 1.092.535 1.458.439 2.135-.223 1.575-1.958 4.03-3.489 4.937-.693.41-.885.587-1.066.98-.173.375-.185.535-.069.953.223.802 1.206 1.326 1.937 1.033z"
                  fill="#000"
                ></path>
              </svg>

              <svg
                viewBox="0 0 2.4 14.4"
                version="1.1"
                y="0"
                x="0"
                height="150"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.2 13c0 .641-.447 1.16-1 1.16-.553 0-1-.519-1-1.16V1.4C.2.759.647.24 1.2.24c.553 0 1 .519 1 1.16z"
                  fill="#000"
                ></path>
              </svg>

              <svg
                viewBox="0 0 18.528 35.424"
                version="1.1"
                y="0"
                x="0"
                height="369"
                width="193"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.105 35.155c-.42-.196-.627-.482-.902-1.253-.544-1.517-2.145-3.126-3.636-3.652-.69-.243-.887-.242-1.486.01-.617.26-1.342.278-1.798.045-.555-.283-1.76-2.262-3.476-5.708C2.628 22.232.984 18.575.455 17.144c-.236-.637-.237-.655-.237-2.485 0-2.164.01-2.209.9-4.013 1.011-2.049 2.53-4.189 4.185-5.9C7.679 2.293 9.783.995 12.49.313c.782-.197 1.554-.236 2.695-.137 1.619.14 2.38.38 2.882.909.21.22.246.321.243.684-.002.373-.122.67-.959 2.395-1.277 2.63-1.59 3.806-2.035 7.63-.111.951-.316 1.426-.809 1.87-.52.47-1.306.807-2.165.928l-.391.054.35.224c.897.574 1.58 1.674 1.834 2.956.193.969.12 2.791-.164 4.15-.222 1.061-.696 2.518-1.12 3.443-.336.735-.411 1.584-.203 2.3.505 1.738 2.056 3.692 3.736 4.705.693.417.938.83.874 1.476-.104 1.071-1.193 1.706-2.153 1.256z"
                  fill="#000"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
