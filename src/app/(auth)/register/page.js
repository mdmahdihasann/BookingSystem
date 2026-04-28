
import bg from "../../../../public/bg.jpg"
import RegisterFrom from "@/components/authentication/RegisterFrom"
import Link from "next/link"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-end bg-cover bg-center relative" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex flex-col justify-center w-full md:w-[500px] bg-white min-h-screen rounded-tl-[40px] rounded-bl-[40px] px-10 z-10">
        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-serif font-medium text-gray-800 mb-1">
            Welcome to Norothy.
          </h1>
          <p className="text-sm font-serif font-normal text-gray-600">Let's hel you get strand</p>
        </div>
        <RegisterFrom />
        
        <div>
          <hr className="mt-10 mb-8"/>
          <p className="text-sm font-serif font-normal text-gray-600 text-end">Already have an account? <Link className='font-semibold text-blue-700 hover:text-blue-500 transition' href="/login" >Sign in</Link></p>
        </div>
      </div>
      <div className="text-sm text-white px-4 py-2.5 rounded-lg absolute top-4 left-4 
bg-white-500/20 backdrop-blur-md border border-white-500/20 font-serif">
        Back to Home
      </div>
    </div>
  )
}

export default page