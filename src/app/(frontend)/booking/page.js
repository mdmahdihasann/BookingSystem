"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const page = () => {
  

  return (
    <div className="bg-gray-50">
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
              title: <span className="text-gray-400 text-sm">Booking</span>,
            },
          ]}
        />
        <div className="min-h-screen mt-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT SIDE */}
            <LeftSide />

            {/* RIGHT SIDE */}
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
