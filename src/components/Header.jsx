"use client";

import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { usePathname } from "next/navigation";
import { Button, Menu } from "antd";
import Link from "next/link";

const items = [
  { key: "1", label: <Link href="/">Home</Link> },
  { key: "2", label: <Link href="/launches">Launches</Link> },
  { key: "3", label: <Link href="/booking">Bookings</Link> },
  { key: "4", label: <Link href="/about">About</Link> },
  { key: "5", label: <Link href="/contact">Contact</Link> },
];

const Headers = () => {
  const pathname = usePathname();
  const noHeader = ["/login", "/register"];
  const showHeader = !noHeader.includes(pathname) && !pathname.startsWith("/admin");

  return (
    <>
      {showHeader && (
        <Header className="w-full bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
            {/* Logo */}
            <div>
              <Image src={Logo} width={100} height={40} alt="Logo" priority />
            </div>

            {/* Menu */}
            <Menu
              theme="white"
              mode="horizontal"
              items={items}
              className="flex-1 justify-center border-none bg-blue-700 text-white"
            />

            {/* Auth Buttons */}
            <div className="flex gap-2">
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </Header>
      )}
    </>
  );
};

export default Headers;
