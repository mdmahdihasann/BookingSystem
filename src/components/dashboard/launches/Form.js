"use client";

import Field from "@/components/Field";
import { Features, launchSeats } from "@/data/data";
import { addRow, updateRow } from "@/redux/features/lounchtable/lounchTable";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Select, Space, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Group } from "antd/es/radio";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const FormPage = ({ onClose }) => {
  const editItem = useSelector((state) => state.lounchtable.editItem);
  const dispatch = useDispatch();
  const url = "/api/lounchtable";

  const optionData = launchSeats.map((seat) => ({
    value: seat,
    label: seat,
  }));

  const optionFeatues = Features.map((seat) => ({
    value: seat,
    label: seat,
  }));

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const {
    fields: seatTypeFields,
    append: appendSeatType,
    remove: removeSeatType,
  } = useFieldArray({
    control,
    name: "seatTypes",
  });

  useEffect(() => {
    if (editItem) {
      reset({
        name: editItem.name || "",
        from: editItem.from || "",
        to: editItem.to || "",
        departureTime: editItem.departureTime || "",
        arrivalTime: editItem.arrivalTime || "",
        phone: editItem.phone || "",
        status: editItem.status || true,
        image: editItem.image || "",
        seatTypes: editItem.seatTypes?.length
          ? editItem.seatTypes
          : [{ name: "", price: "", available: "" }],
      });
    } else {
      reset({
        name: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        phone: "",
        status: true,
        image: "",
        seatTypes: [{ name: "", price: "", available: "" }],
      });
    }
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
          <input {...register("name", {required: "Name Filed is Required"})} className="input" />
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
        <Field label="Start Price">
          <input {...register("startPrice")} className="input" />
        </Field>
        <Field label="Phone">
          <input {...register("phone")} className="input" />
        </Field>
      </Group>
      <Group className="groupBy">
        <Field label="Features">
          <Select
            className="py-1 mt-1 rounded-lg"
            mode="tags"
            style={{ width: "100%" }}
            tokenSeparators={[","]}
            options={optionFeatues}
          />
        </Field>
        <Field label="Short Description">
          <input {...register("shortDes")} className="input" />
        </Field>
      </Group>

      {/* ================= SEAT TYPES ================= */}
      <Card title="Seat Types" size="small" style={{ marginTop: 16 }}>
        <Space orientation="vertical" style={{ width: "100%" }}>
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
                    <Select
                      mode="tags"
                      style={{ width: "100%" }}
                      tokenSeparators={[","]}
                      options={optionData}
                    />
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
              available: [],
            })
          }
        >
          Add Seat Type
        </Button>
      </Card>

      {/* OTHER FIELDS */}

      <Field label="Description">
        <TextArea rows={5} placeholder="Type here..." className="input" />
      </Field>

      <Field label="Image">
        <Upload listType="picture-card" multiple className="input">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Field>

      <Field label="Status">
        <select
          {...register("status")}
          className="input"
          value={editItem?.status || true}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </Field>

      <button className="bg-blue-600 text-white py-2.5 mt-3 rounded-lg">
        {editItem ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPage;
