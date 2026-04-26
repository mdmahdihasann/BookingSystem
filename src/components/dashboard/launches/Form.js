"use client"
import Field from "@/components/Field"
import { addRow, updateRow } from "@/redux/features/lounchtable/lounchTable";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";


const FormPage = ({ onClose }) => {
  const editItem = useSelector((state) => state.lounchtable.editItem);
  const { handleSubmit, formState: { errors }, register, reset } = useForm();
  const dispatch = useDispatch();
  const url = "/api/lounchtable";


  useEffect(() => {
    if (!editItem) {
      reset({
        name: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        seatCapacity: "",
        availableSeat: "",
        price: "",
        phone: "",
        status: true,
        image: "",
      });
      return;
    }

    reset({
      name: editItem.name || "",
      from: editItem.from || "",
      to: editItem.to || "",
      departureTime: editItem.departureTime || "",
      arrivalTime: editItem.arrivalTime || "",
      seatCapacity: editItem.seatCapacity || "",
      availableSeat: editItem.availableSeat || "",
      price: editItem.price || "",
      phone: editItem.phone || "",
      status: editItem.status ?? true,
      image: editItem.image || "",
    });
  }, [editItem, reset]);

  // create data
  const createPost = async (e) => {

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    })
    const data = await res.json();
    dispatch(addRow(data));
    if (!res.ok) {
      alert(data.error || "Something went wrong");
      return;
    }
  }

  // edit 
  const editPost = async (e) => {
    try {
      const res = await fetch(`${url}/${editItem.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      })
      const eData = await res.json();

      dispatch(updateRow(eData))
      if (!res.ok) {
        alert(eData.error || "Something went wrong");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }


  const handleFromData = async (fromData) => {

    try {
      if (editItem) {
        await editPost(fromData);
        toast.success("Items Updated Successfully")
      } else {
        await createPost(fromData);
        toast.success("Items Create Successfully")
      }

    } catch (error) {
      console.log("Error : ", error);
    }

    reset();
    onClose();
  }



  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit(handleFromData)}>
      <Field label="Launche Name" className="font-semibold text-gray-700 text-[14px]" error={errors.lounch_name}>
        <input
          {...register("name", { required: "This Field is required" })}
          type="text" id="name" placeholder="Launche Name" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Seat Capacity" className="font-semibold text-gray-700 text-[14px]" error={errors.seatCapacity}>
        <input
          {...register("seatCapacity", { required: "This Field is required" })}
          type="number" id="seatCapacity" placeholder="Seat Capacity" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="From" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("from", { required: "This Field is required" })}
          type="text" id="from" placeholder="from" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="To" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("to", { required: "This Field is required" })}
          type="text" id="to" placeholder="to" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Departure Time" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("departureTime", { required: "This Field is required" })}
          type="datetime-local" id="departureTime" placeholder="departureTime" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Arrival Time" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("arrivalTime", { required: "This Field is required" })}
          type="datetime-local" id="arrivalTime" placeholder="arrivalTime" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Available Seat" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("availableSeat", { required: "This Field is required" })}
          type="number" id="availableSeat" placeholder="available seat" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
      </Field>
      <Field label="Price" className="font-semibold text-gray-700 text-[14px]" error={errors.time}>
        <input
          {...register("price", { required: "This Field is required" })}
          type="text" id="price" placeholder="price" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
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
        <button type="submit" className='w-full bg-blue-600 py-2 text-white rounded-lg mt-2 font-semibold border-b-2 border-blue-300 hover:bg-blue-500 transition'>{editItem ? "Update" : "Create"}</button>
      </Field>
    </form>
  )
}

export default FormPage