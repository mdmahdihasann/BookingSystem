import Field from "@/components/Field";
import { Breadcrumb } from "antd";
import { Group } from "antd/es/radio";
import Link from "next/link";
import React from "react";

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
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                  Passenger Information
                </h1>
                <p className="text-gray-500 mt-2">
                  Fill all required information carefully.
                </p>
              </div>

              <form className="flex flex-col gap-5">
                {/* Passenger Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Passenger Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter passenger name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Passenger Phone */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Passenger Phone
                  </label>

                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Booking Date */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Booking Date
                  </label>

                  <input
                    type="datetime-local"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-3">
                    Payment Method
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      type="button"
                      className="border border-gray-200 rounded-xl py-3 font-semibold hover:border-pink-500 hover:text-pink-500 transition-all"
                    >
                      bKash
                    </button>

                    <button
                      type="button"
                      className="border border-gray-200 rounded-xl py-3 font-semibold hover:border-orange-500 hover:text-orange-500 transition-all"
                    >
                      Nagad
                    </button>

                    <button
                      type="button"
                      className="border border-gray-200 rounded-xl py-3 font-semibold hover:border-purple-500 hover:text-purple-500 transition-all"
                    >
                      Rocket
                    </button>

                    <button
                      type="button"
                      className="border border-gray-200 rounded-xl py-3 font-semibold hover:border-blue-500 hover:text-blue-500 transition-all"
                    >
                      Card
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.01] transition-all shadow-md mt-3">
                  Confirm Booking
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100 h-fit sticky top-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Booking Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Launch</span>
                  <span className="font-semibold text-gray-800">
                    Sundarban Express
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Journey</span>
                  <span className="font-semibold text-gray-800">
                    Dhaka → Barisal
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Seat Type</span>
                  <span className="font-semibold text-gray-800">VIP</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Seats</span>
                  <span className="font-semibold text-gray-800">A-1, A-2</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Price Per Seat</span>
                  <span className="font-semibold text-gray-800">৳1200</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Quantity</span>
                  <span className="font-semibold text-gray-800">2</span>
                </div>

                <div className="border-t pt-5 mt-5">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      Total Price
                    </span>

                    <span className="text-2xl font-bold text-blue-600">
                      ৳2400
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-700 mb-2">
                  Important Notice
                </h3>

                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Please arrive 30 minutes before departure.</li>
                  <li>• Carry your valid identification document.</li>
                  <li>• E-ticket will be sent via SMS.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
