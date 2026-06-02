import Link from "next/link";

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            {/* <CheckCircle className="w-14 h-14 text-green-600" /> */}
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Booking Confirmed!
        </h1>

        <p className="text-slate-600 mb-8">
          Your launch ticket has been booked successfully. A confirmation has
          been saved to your account.
        </p>

        <div className="bg-slate-100 rounded-xl p-4 mb-8 text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-500">Booking Status</span>
            <span className="font-semibold text-green-600">Confirmed</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Payment Status</span>
            <span className="font-semibold">Paid</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Booking Date</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href="/dashboard/bookings"
            className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            My Bookings
          </Link>

          <Link
            href="/"
            className="flex-1 py-3 rounded-lg border border-slate-300 font-medium hover:bg-slate-100"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
