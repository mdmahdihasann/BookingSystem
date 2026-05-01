import Image from "next/image";
import React from "react";
import BookImg from "../../../../../public/why-book/train.png";

const WhyBooking = () => {
  return (
    <div className="flex mt-auto items-end py-20">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-black">Why Booking.com?</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-8">
            <Image
              src={BookImg}
              width={70}
              height={70}
              alt="booking"
              className="mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1.5">
              Book now, pay at the property
            </h3>
            <p className="text-sm font-normal text-gray-500">
              FREE cancellation on most rooms
            </p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-8">
            <Image
              src={BookImg}
              width={70}
              height={70}
              alt="booking"
              className="mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1.5">
              300M+ reviews from fellow travelers
            </h3>
            <p className="text-sm font-normal text-gray-500">
              Get trusted information from guests like you
            </p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-8">
            <Image
              src={BookImg}
              width={70}
              height={70}
              alt="booking"
              className="mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1.5">
              2+ million properties worldwide
            </h3>
            <p className="text-sm font-normal text-gray-500">
              Hotels, guest houses, apartments, and more…
            </p>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-8">
            <Image
              src={BookImg}
              width={70}
              height={70}
              alt="booking"
              className="mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1.5">
              Trusted 24/7 customer service you can rely on
            </h3>
            <p className="text-sm font-normal text-gray-500">
              We're always here to help{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBooking;
