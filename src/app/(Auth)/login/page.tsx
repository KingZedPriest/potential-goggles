"use client";
import { useState, useRef } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";


export default function Login() {

 const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <main className="fixed h-screen w-full top-0 left-0">
      <Header />
      <div className="mt-14 p-5 md:py-10 md:px-10 xl:px-20">
        <p className="text-[#9C9DA2] font-semibold text-sm md:text-base">
          START FOR FREE
        </p>
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Login To Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-[#5195EA]"></div>
        </div>
        <p className="text-sm md:text-base mt-4 text-[#595B63]">
          Not A Member? <span className="text-[#5195EA] cursor-pointer hover:text-[#EDEDEE] duration-500"><Link href="/register">Create Account</Link></span>
        </p>
        <form className="mt-10" action="">
          <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between w-[20rem] md:w-[26rem]">
            <div className="relative w-full md:w-[49%]">
              <input
                className="text-sm focus:border-2 focus:border-[#5195EA] w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <FaRegAddressCard size={14} className="absolute top-4 right-2" />
            </div>
            <div className="relative w-full md:w-[49%]">
              <input
                className="text-sm focus:border-2 focus:border-[#5195EA] w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              <FaRegAddressCard size={14} className="absolute top-4 right-2" />
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
              className={`${inputType === "text" ? "hidden" : ""} cursor-pointer absolute top-4 right-2`}
              onClick = {toggleInputType}
            />
            <FaMehRollingEyes size={14} className={`${inputType === "password" ? "hidden" : ""} cursor-pointer absolute top-4 right-2`} onClick = {toggleInputType}/>
          </div>
          <div className="flex w-[20rem] md:w-[26rem] mt-8 justify-between">
            <button className="w-full md:w-[48%] py-4 text-center text-xs rounded-3xl bg-[#595B63] hover:bg-[#5195EA] duration-500">Change Method</button>
            <button className="w-full md:w-[48%] py-4 text-center text-xs rounded-3xl bg-[#5195EA] hover:text-[#5195EA] hover:bg-[#EDEDEE] duration-500 hover:font-semibold" type="submit">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
}
