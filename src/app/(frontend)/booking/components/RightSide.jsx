import React from "react";
import { useSelector } from "react-redux";

const RightSide = () => {
  const bookingData = useSelector((state) => state.bookingDetails?.data);
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100 h-fit sticky top-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Launch</span>
          <span className="font-semibold text-gray-800">
            {bookingData?.lounch}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Journey</span>
          <span className="font-semibold text-gray-800">
            {bookingData?.journey}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Seat Type</span>
          <span className="font-semibold text-gray-800">
            {bookingData?.seatType}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Seats</span>
          <span className="font-semibold text-gray-800">
            {bookingData?.seatNumber?.map((data) => data).join(", ")}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Price Per Seat</span>
          <span className="font-semibold text-gray-800">
            ৳{bookingData?.perSeatPrice || "0"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Quantity</span>
          <span className="font-semibold text-gray-800">
            {bookingData?.seatNumber?.length || 1}
          </span>
        </div>

        <div className="border-t pt-5 mt-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total Price</span>

            <span className="text-2xl font-bold text-blue-600">
              ৳{bookingData?.price || "0"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 rounded-2xl p-4 border border-blue-100">
        <h3 className="font-semibold text-blue-700 mb-2">Important Notice</h3>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Please arrive 30 minutes before departure.</li>
          <li>• Carry your valid identification document.</li>
          <li>• E-ticket will be sent via SMS.</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
