import Header from "@/components/Header";
export default function Login() {
  return (
    <main className="fixed h-screen w-full top-0 left-0">
      <Header />
      <div className="mt-20  p-5 md:p-10">
        <p className="text-[#9C9DA2] font-semibold text-sm md:text-base">START FOR FREE</p>
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Login To Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-[#5195EA]"></div>
        </div>
         <p className="text-sm md:text-base mt-4">Not A Member? <span className="text-[#5195EA]">Create Account</span></p>
        <form action=""></form>
      </div>
    </main>
  );
}
