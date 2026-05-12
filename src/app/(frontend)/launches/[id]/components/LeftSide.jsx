"use client";

import Image from "next/image";

import Img from "../../../../../../public/bg.jpg";

import {
  WifiOutlined,
  CoffeeOutlined,
  CustomerServiceOutlined,
  RiseOutlined,
  ClearOutlined,
} from "@ant-design/icons";

// const facilities = [
//   {
//     name: "Non-smoking rooms",
//     icon: <RiseOutlined className="text-lg text-blue-600" />,
//   },
//   {
//     name: "Free Wifi",
//     icon: <WifiOutlined className="text-lg text-blue-600" />,
//   },
//   {
//     name: "Restaurant",
//     icon: <CoffeeOutlined className="text-lg text-blue-600" />,
//   },
//   {
//     name: "24-hour front desk",
//     icon: <CustomerServiceOutlined className="text-lg text-blue-600" />,
//   },
//   {
//     name: "Elevator",
//     icon: <RiseOutlined className="text-lg text-blue-600" />,
//   },
//   {
//     name: "Daily housekeeping",
//     icon: <ClearOutlined className="text-lg text-blue-600" />,
//   },
// ];

const LeftSide = ({ launchData }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* image div */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <img
          src={launchData?.image[0]}
          width="100%"
          height="100%"
          alt="Launch Image"
          className="rounded-xl h-full"
        />
        <div className="flex flex-col gap-4">
          {launchData?.image?.slice(1).map((img, index) => (
            <img
              key={index}
              src={`${img}`}
              alt={`Launch image ${index + 2}`}
              className="rounded-xl"
            />
          ))}
        </div>
      </div>
      {/* image div */}
      {/* content */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{launchData?.name}</h2>
        <p className="text-sm font-normal text-gray-600">
          {launchData?.shortDes}
        </p>
      </div>
      {/* features */}
      <div>
        <h3 className="text-md font-semibold mb-4">Hotel Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {launchData?.Features?.map((facility, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0">{facility.icon}</div>
              <div className="flex-1">
                <span className="text-gray-700 font-medium text-sm">
                  {facility}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* description */}
      <div>
        <h3 className="text-md font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-700 leading-7">
          {launchData?.description}
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
