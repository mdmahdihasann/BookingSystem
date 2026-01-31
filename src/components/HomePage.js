"use client"

import Image from "next/image"
import Logo from "../../public/Logo.png"

export const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-700">
            <Image
                src={Logo}
                width={100}
                height={100}
                alt="Logo"
                priority
            />
        </div>
    )
}
