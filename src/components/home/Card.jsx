import formateDate from "@/utils/formateDate";
import Link from "next/link";

const Card = ({launch}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* IMAGE */}
      <div className="h-[320px] w-full relative">
        <img
          src={
            launch?.image[0] ||
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
          }
          alt="launch"
          className="w-full h-full object-cover"
        />

        {/* status badge */}
        <span className="absolute top-3 right-3 text-xs bg-green-500 text-white px-3 py-1 rounded-full">
          {launch?.status ? "Available" : "Closed"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* NAME + ROUTE */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            {launch?.name || "MV Green Line"}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {launch?.from || "Bhola"} → {launch?.to || "Barishal"}
          </p>
        </div>

        {/* TIME */}
        <div className="mt-3 flex justify-between text-sm text-gray-700">
          <div>
            <p className="font-semibold">Departure</p>
            <p> {formateDate(launch?.departureTime)} </p>
          </div>
          <div>
            <p className="font-semibold">Arrival</p>
            <p>{formateDate(launch?.arrivalTime)}</p>
          </div>
        </div>

        {/* PRICE */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Starting From</p>
            <p className="text-xl font-bold text-blue-600">
              ৳{launch?.startPrice}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Per Seat Type</p>
            <p className="text-sm font-semibold text-gray-700">
              Economy / Cabin
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="w-full">
          <Link
            href={`/launches/${launch?.id}`}
            className="mt-5 w-full block bg-blue-600 hover:bg-blue-700 
               text-white py-2.5 px-6 rounded-lg font-medium 
               text-center transition-all active:scale-[0.97]"
          >
            See Availability
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
