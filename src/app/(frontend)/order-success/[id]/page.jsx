import Link from "next/link";

export default async function OrderDetailsPage({ params }) {
  const { id } = await params;
  const url = `/api/booking/${id}`;

  // API Call
  const res = await fetch(url,
    {
      cache: "no-store",
    }
  );

  const booking = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">
            Booking Details
          </h1>
          <p className="text-blue-100 mt-1">
            Booking ID: #{booking?._id}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500 text-sm">
                Journey
              </p>
              <p className="font-semibold text-lg">
                {booking?.journey}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500 text-sm">
                Travel Date
              </p>
              <p className="font-semibold text-lg">
                {booking?.bookingDate}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500 text-sm">
                Seat Number
              </p>
              <p className="font-semibold text-lg">
                {booking?.seatNumber}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500 text-sm">
                Seat Type
              </p>
              <p className="font-semibold text-lg">
                {booking?.seatType}
              </p>
            </div>
          </div>

          {/* Passenger */}
          <div className="border rounded-xl p-5">
            <h2 className="font-bold text-xl mb-4">
              Passenger Information
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Name</span>
                <span className="font-medium">
                  {booking?.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Email</span>
                <span className="font-medium">
                  {booking?.email}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Phone</span>
                <span className="font-medium">
                  {booking?.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="border rounded-xl p-5">
            <h2 className="font-bold text-xl mb-4">
              Payment Information
            </h2>

            <div className="flex justify-between mb-2">
              <span>Status</span>
              <span className="text-green-600 font-semibold">
                Paid
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Amount</span>
              <span className="font-bold text-2xl text-blue-600">
                ৳ {booking?.price}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/dashboard/bookings"
              className="px-5 py-3 rounded-lg bg-blue-600 text-white"
            >
              My Bookings
            </Link>

            <Link
              href="/"
              className="px-5 py-3 rounded-lg border"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}