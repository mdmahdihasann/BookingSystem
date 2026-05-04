import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { Breadcrumb } from "antd";
import LeftSide from "./components/LeftSide";

export default function LaunchDetailsPage() {

 

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 mt-2">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: (
              <Link href="/" className="!text-blue-600">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link href="" className="!text-blue-600">
                Launch
              </Link>
            ),
          },
          {
            title: <span className="text-gray-400 text-sm">MV Parhan 10</span>,
          },
        ]}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1fr] py-8 gap-8">
        <LeftSide/>
        <div>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}
