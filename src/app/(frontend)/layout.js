import { Ubuntu } from "next/font/google";
import { Menu } from "antd";
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
        <Header>
          <div>
            <Image src={Logo} width={100} height={100} alt="Logo" priority />
          </div>
          <Menu theme="white" mode="horizontal" items={items} />
          <div></div>
        </Header>
        {children}
      </body>
    </html>
  );
}
