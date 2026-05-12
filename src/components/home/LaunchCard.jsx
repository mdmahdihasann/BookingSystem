"use client";
import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setLounchTableData } from "@/redux/features/lounchtable/lounchTable";

const LaunchCard = () => {
  const launchAllData = useSelector((state) => state.lounchtable.data);
  const dispatch = useDispatch();
  const url = "/api/lounchtable/";

  useEffect(() => {
    const data = async () => {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(setLounchTableData(data));
    };
    data();
  }, []);

  return (
    <div className="flex flex-col items-end pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Find Your Next Launch
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card */}
        {launchAllData?.length > 0
          ? launchAllData?.map((launch) => <Card launch={launch} />)
          : ""}
      </div>
    </div>
  );
};

export default LaunchCard;
