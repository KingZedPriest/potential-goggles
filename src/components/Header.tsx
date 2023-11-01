import Link from "next/link";

export default function Header() {
  return (
    <main className="flex items-center gap-x-20 p-5 md:py-10 md:px-10 lg:px-20">
      <div className="flex items-center gap-x-3">
        <div className="h-8 w-8 rounded-[50%] bg-[#5195EA]"></div>
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
            We Gist
          </h1>
          <span className="h-1 w-1 rounded-[50%] bg-[#5195EA]"></span>
        </div>
      </div>
      <div className="flex space-x-5 sm:space-x-10 md:space-x-14 lg:gap-x-20 font-semibold">
        <Link href="/" className="text-sm md:text-base hover:text-[#EDEDEE] duration-500 text-[#595B63]">Home</Link>
        <Link href="/register" className="text-sm md:text-base hover:text-[#EDEDEE] duration-500 text-[#595B63]">Join</Link>
      </div>
      
    </main>
  );
}
