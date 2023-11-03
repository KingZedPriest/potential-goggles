import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-[#0B0C11] text-[#EDEDEE] h-screen w-full flex flex-col items-center justify-center gap-y-5">
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Not Found</h2>
      <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Could not find requested resource</p>
      <Link href="/" className='py-3 px-8 rounded-3xl bg-[#5195EA] hover:text-[#5195EA] hover:bg-[#EDEDEE] duration-500 hover:font-semibold'>Return Home</Link>
    </div>
  )
}