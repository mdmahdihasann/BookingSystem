import { Ubuntu } from "next/font/google";
import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const items = [
  { key: "1", label: <Link href="/">Home</Link> },
  { key: "2", label: <Link href="/launches">Launches</Link> },
  { key: "3", label: <Link href="/booking">Bookings</Link> },
  { key: "4", label: <Link href="/about">About</Link> },
  { key: "5", label: <Link href="/contact">Contact</Link> },
];

export default function FrontendLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans`}>
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
              <Button >Sign In</Button>
              <Button >Sign Up</Button>
            </div>
          </div>
        </Header>
        {children}
      </body>
    </html>
  );
}
