"use client"
import Field from "@/components/Field"
import { addRow } from "@/redux/features/lounchtable/lounchTable";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";

const FormPage = ({onClose}) => {

  const { handleSubmit, formState: { errors }, register, reset } = useForm();
  
  const dispatch = useDispatch();



  const handleFromData = (fromData) => {
    const data = {
      id: Date.now(),
      LauncheName: fromData.LauncheName,
      phone: fromData.phone,
      seatCapacity: fromData.seatCapacity,
      time: fromData.time,
      status: fromData.status,
      image: URL.createObjectURL(fromData.image[0])
    };
    dispatch(addRow(data));
    reset();
    onClose();
  }
  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit(handleFromData)}>
      <Field label="Launche Name" className="font-semibold text-gray-700 text-[14px]" error={errors.LauncheName}>
        <input
          {...register("LauncheName", { required: "This Field is required" })}
          type="text" id="LauncheName" placeholder="Launche Name" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Seat Capacity" className="font-semibold text-gray-700 text-[14px]" error={errors.seatCapacity}>
        <input
          {...register("seatCapacity", { required: "This Field is required" })}
          type="number" id="seatCapacity" placeholder="Seat Capacity" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Time" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("time", { required: "This Field is required" })}
          type="time" id="time" placeholder="Time" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Phone" className="font-semibold text-gray-700 text-[14px]" error={errors.phone}>
        <input
          {...register("phone", { required: "This Field is required" })}
          type="Phone" id="phone" placeholder="Phone" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Status" className="font-semibold text-gray-700 text-[14px]" error={errors.status}>
        <select
          {...register("status", { required: "This Field is required" })}
          id="status" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1">
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </select>
      </Field>
      <Field label="Image" className="font-semibold text-gray-700 text-[14px]" error={errors.image}>
        <input
          {...register("image", { required: "This Field is required" })}
          type="file" id="image" placeholder="Image" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field>
        <button type="submit" className='w-full bg-blue-600 py-2 text-white rounded-lg mt-2 font-semibold border-b-2 border-blue-300 hover:bg-blue-500 transition'>Submit</button>
      </Field>
    </form>
  )
}

export default FormPage