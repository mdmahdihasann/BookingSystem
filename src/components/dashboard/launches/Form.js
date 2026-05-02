"use client";

import Field from "@/components/Field";
import { addRow, updateRow } from "@/redux/features/lounchtable/lounchTable";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Select, Space } from "antd";
import { Group } from "antd/es/radio";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const FormPage = ({ onClose }) => {
  const editItem = useSelector((state) => state.lounchtable.editItem);
  const dispatch = useDispatch();
  const url = "/api/lounchtable";

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      from: "",
      to: "",
      departureTime: "",
      arrivalTime: "",
      seatCapacity: "",
      availableSeat: "",
      price: "",
      phone: "",
      status: "1",
      image: "",
      seatTypes: [
        {
          name: "",
          price: "",
          available: "",
        },
      ],
    },
  });

  const {
    fields: seatTypeFields,
    append: appendSeatType,
    remove: removeSeatType,
  } = useFieldArray({
    control,
    name: "seatTypes",
  });

  useEffect(() => {
    if (!editItem) return;

    reset({
      ...editItem,
      seatTypes: editItem.seatTypes?.length
        ? editItem.seatTypes
        : [
            {
              name: "",
              price: "",
              available: "",
            },
          ],
    });
  }, [editItem, reset]);

  const onSubmit = async (data) => {
    const res = await fetch(editItem ? `${url}/${editItem.id}` : url, {
      method: editItem ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.error || "Error");
      return;
    }

    dispatch(editItem ? updateRow(result) : addRow(result));
    toast.success(editItem ? "Updated Successfully" : "Created Successfully");

    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {/* BASIC FIELDS */}
      <Group className="groupBy">
        <Field label="Launch Name">
          <input {...register("name")} className="input" />
        </Field>

        <Field label="Seat Capacity">
          <input
            type="number"
            {...register("seatCapacity")}
            className="input"
          />
        </Field>
      </Group>

      <Group className="groupBy">
        <Field label="From">
          <input {...register("from")} className="input" />
        </Field>

        <Field label="To">
          <input {...register("to")} className="input" />
        </Field>
      </Group>

      <Group className="groupBy">
        <Field label="Departure Time">
          <input
            type="datetime-local"
            {...register("departureTime")}
            className="input"
          />
        </Field>

        <Field label="Arrival Time">
          <input
            type="datetime-local"
            {...register("arrivalTime")}
            className="input"
          />
        </Field>
      </Group>

      <Group className="groupBy">
        <Field label="Available Seat">
          <input
            type="number"
            {...register("availableSeat")}
            className="input"
          />
        </Field>
        <Field label="Phone">
          <input {...register("phone")} className="input" />
        </Field>
      </Group>

      {/* <Field label="Price">
        <input {...register("price")} className="input" />
      </Field> */}

      {/* ================= SEAT TYPES ================= */}
      <Card title="Seat Types" size="small" style={{ marginTop: 16 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          {seatTypeFields.map((field, index) => (
            <Row
              key={field.id}
              gutter={10}
              style={{
                padding: 10,
                border: "1px solid #eee",
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <Col span={8}>
                <Controller
                  name={`seatTypes.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Seat Type Name" />
                  )}
                />
              </Col>

              <Col span={7}>
                <Controller
                  name={`seatTypes.${index}.price`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Price" />
                  )}
                />
              </Col>

              <Col span={7}>
                <Controller
                  name={`seatTypes.${index}.available`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Available Seats" />
                  )}
                />
              </Col>

              <Col span={1}>
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => removeSeatType(index)}
                />
              </Col>
            </Row>
          ))}
        </Space>

        <Button
          type="dashed"
          block
          icon={<PlusOutlined />}
          onClick={() =>
            appendSeatType({
              name: "",
              price: "",
              available: "",
            })
          }
        >
          Add Seat Type
        </Button>
      </Card>

      {/* OTHER FIELDS */}

      <Field label="Status">
        <select {...register("status")} className="input">
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </select>
      </Field>

      <Field label="Image">
        <input {...register("image")} className="input" />
      </Field>

        <button className="bg-blue-600 text-white py-2.5 mt-3 rounded-lg">
          {editItem ? "Update" : "Create"}
        </button>
    </form>
  );
};

export default FormPage;
