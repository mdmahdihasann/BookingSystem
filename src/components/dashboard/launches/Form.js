"use client"
import Field from "@/components/Field"
import { addRow } from "@/redux/features/lounchtable/lounchTable";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";

const FormPage = ({ onClose }) => {

  const { handleSubmit, formState: { errors }, register, reset } = useForm();
  const editItem = useSelector((state) => state.lounchtable.editItem)
  const dispatch = useDispatch();


  const createPost = async (e) => {
    const url = "/api/lounchtable";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    })
    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      alert(data.error || "Something went wrong");
      return;
    }
  }


  const handleFromData = async (fromData) => {

    try {
      await createPost(fromData)
    } catch (error) {
      console.log("Error : ", error);
    }


    const data = {
      id: Date.now(),
      lounch_name: fromData.lounch_name,
      phone: fromData.phone,
      seatCapacity: fromData.seatCapacity,
      time: fromData.time,
      status: fromData.status,
      image: fromData.image
    };

    if (editItem) {
      dispatch(updateRow({ ...data, id: editItem.id }));
    } else {
      dispatch(addRow(data));
    }
    reset();
    onClose();
  }
  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit(handleFromData)}>
      <Field label="Launche Name" className="font-semibold text-gray-700 text-[14px]" error={errors.lounch_name}>
        <input
          {...register("lounch_name", { required: "This Field is required" })}
          type="text" id="lounch_name" placeholder="Launche Name" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Seat Capacity" className="font-semibold text-gray-700 text-[14px]" error={errors.seatCapacity}>
        <input
          {...register("seat_capacity", { required: "This Field is required" })}
          type="number" id="seat_capacity" placeholder="Seat Capacity" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
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
          type="text" id="image" placeholder="Image" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field>
        <button type="submit" className='w-full bg-blue-600 py-2 text-white rounded-lg mt-2 font-semibold border-b-2 border-blue-300 hover:bg-blue-500 transition'>Submit</button>
      </Field>
    </form>
  )
}

export default FormPage