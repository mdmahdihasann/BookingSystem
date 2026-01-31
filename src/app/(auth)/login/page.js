import Image from "next/image"
import Logo from "../../../../public/Logo.png"
import LoginFrom from "@/components/authentication/LoginFrom"
const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row w-full max-w-3xl gap-2 bg-gray-200 p-2 md:p-2 rounded-2xl mx-auto">
                <div className="bg-blue-700 w-full md:w-1/2 h-64 md:h-[380px] flex flex-col items-center justify-center rounded-xl">
                    <Image
                        src={Logo}
                        width={120}
                        height={120}
                        alt="Logo"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center w-full md:w-1/2 p-2 md:p-4">
                    <h1 className="mb-4 text-lg md:text-xl font-semibold text-gray-800">
                        Please Login your Credentials
                    </h1>
                    <LoginFrom />
                </div>
            </div>


        </div>
    )
}

export default page