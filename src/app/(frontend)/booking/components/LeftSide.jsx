"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const LeftSide = () => {
  const url = "/api/booking";
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { auth } = useAuth();
  const bookingData = useSelector((state) => state.bookingDetails?.data);

  const onSubmit = async (data) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        userId: auth?.user?.id,
        launchId: bookingData?.id,
        price: bookingData?.price,
        seatNumber: bookingData?.seatNumber,
        journey: bookingData?.journey,
        seatType: bookingData?.seatType,
        seatNumber: bookingData?.seatNumber,
        bookingDate: data.bookingDate,
        price: bookingData?.price,
      }),
    });
    const result = await res.json();
    if (result) {
      router.push(`/order-success`);
    }
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Passenger Information
        </h1>
        <p className="text-gray-500 mt-2">
          Fill all required information carefully.
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Passenger Name */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Passenger Name
          </label>

          <input
            type="text"
            placeholder="Enter passenger name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
            {...register("passengerName")}
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
            {...register("passengerPhone")}
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
            {...register("bookingDate")}
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
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.01] transition-all shadow-md mt-3"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default LeftSide;
