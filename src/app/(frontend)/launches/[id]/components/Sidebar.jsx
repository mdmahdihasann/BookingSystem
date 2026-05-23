"use client";
import React, { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { setBookingDetails } from "@/redux/features/bookingDetails/bookingDetails";
import { useAuth } from "@/hooks/useAuth";

const Sidebar = ({ launchData }) => {
  const router = useRouter();
  const [selectedSeatType, setSelectedSeatType] = useState();
  const [isSelected, setIsSelected] = useState([]);
  const [journey, setJourney] = useState();
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const currentBookedSeats = selectedSeatType?.booked || [];

  function handleCheckout() {
    if (auth) {
      const data = {
        id: launchData?.id,
        lounch: launchData?.name,
        perSeatPrice: selectedSeatType?.price,
        seatType: selectedSeatType?.name,
        seatNumber: isSelected,
        price: totalPrice,
        journey: journey,
      };

      dispatch(setBookingDetails(data));
      router?.push("/booking");
    } else {
      router?.push("/login");
    }
  }

  function handleSeatSelected(seat) {
    if (isSelected.includes(seat)) {
      setIsSelected(isSelected.filter((s) => s !== seat));
    } else {
      setIsSelected([...isSelected, seat]);
    }
  }

  const totalPrice = isSelected.length * (selectedSeatType?.price || 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h3 className="text-white text-lg font-semibold">Select Your Seat</h3>
        <p className="text-blue-100 text-sm mt-1">
          Choose your preferred seat and complete booking
        </p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Select Journey
          </label>
          <Radio.Group
            onChange={(e) => setJourney(e.target.value)}
            value={journey}
          >
            <Radio value={launchData?.from}>{launchData?.from}</Radio>
            <Radio value={launchData?.to}>{launchData?.to}</Radio>
          </Radio.Group>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Select Seat Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {launchData?.seatTypes?.map((seat) => (
              <div
                key={seat?.id}
                onClick={() => {
                  setSelectedSeatType(seat);
                  setIsSelected([]);
                }}
                className={`
                  rounded-xl p-2 cursor-pointer transition-all relative
                  ${
                    selectedSeatType?.name === seat?.name
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border-2 border-gray-200 hover:border-blue-300"
                  }
                `}
              >
                {selectedSeatType?.name === seat?.name && (
                  <CheckCircleOutlined className="absolute top-2 right-2 text-blue-600 text-lg" />
                )}
                <div
                  className={`font-bold text-sm mb-1 ${selectedSeatType === seat.key ? "text-blue-600" : "text-gray-700"}`}
                >
                  {seat?.name}
                </div>
                <div className="text-gray-600 text-sm">৳{seat.price}</div>
                <div className="text-green-600 text-[10px] mt-1">
                  {seat?.available?.length} seats available
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Select Seat Number
          </label>

          <div className="grid grid-cols-6 gap-2">
            {selectedSeatType?.available?.map((seat) => {
              const isBooked = currentBookedSeats.includes(seat);
              const slectedSeat = isSelected.includes(seat);

              return (
                <button
                  key={seat}
                  onClick={() => !isBooked && handleSeatSelected(seat)}
                  className={`
                    w-full py-2 border rounded-lg font-semibold transition-all relative
                    ${isBooked ? "bg-gray-300 cursor-not-allowed" : ""}
                    ${slectedSeat ? "bg-blue-100 border-blue-400" : ""}
                  `}
                >
                  {seat}
                  {slectedSeat && (
                    <CheckCircleOutlined className="absolute -top-1 -right-1 text-blue-500 bg-white rounded-full text-xs p-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mt-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 border border-gray-300 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              <span>Booked</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-gray-700 mb-3">Booking Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Seat Type</span>
              <span className="font-medium">{selectedSeatType?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Seat Number</span>
              <span className="font-medium">
                {isSelected.length > 0 ? isSelected.join(", ") : 0}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Price</span>
              <span className="font-medium">৳{selectedSeatType?.price}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total Payable</span>
                <span className="text-blue-600">৳{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleCheckout()}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
        >
          Book Now
        </button>

        <p className="text-center text-xs text-gray-400 mt-4">
          No cancellation fee • Instant confirmation • E-ticket will be sent via
          SMS
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
