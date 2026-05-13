"use client"
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { Breadcrumb } from "antd";
import LeftSide from "./components/LeftSide";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function LaunchDetailsPage() {
  const params = useParams();
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    const getSingleLaunch = async () => {
      const id = params.id;

      const res = await fetch(`/api/lounchtable/${id}`);
      const data = await res.json();
      setLaunchData(data);
    };

    if (params?.id) {
      getSingleLaunch();
    }
  }, [params?.id]);

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
            title: <span className="text-gray-400 text-sm">{launchData?.name}</span>,
          },
        ]}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1fr] py-8 gap-8">
        <LeftSide launchData={launchData} />
        <div>
          <Sidebar launchData={launchData}/>
        </div>
      </div>
    </div>
  );
}
