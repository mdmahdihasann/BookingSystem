"use client";

import { Space, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteRow,
  setLounchTableData,
  updatedRow,
} from "@/redux/features/lounchtable/lounchTable";
import { useEffect } from "react";
import toast from "react-hot-toast";
import formateDate from "@/utils/formateDate";

const LaunchesTable = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lounchtable.data);
  const url = "/api/lounchtable/";

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      dispatch(setLounchTableData(data));
    };

    getData();
  }, []);

  const handleDelete = async (data) => {
    try {
      await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      dispatch(deleteRow(data));
      toast.success("Items Delete Successfully");
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const columns = [
    {
      title: "Lounch Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Arrival Time",
      dataIndex: "arrivalTime",
      key: "arrivalTime",
      render: (text) => formateDate(text),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const isActive = status === true;
        return (
          <span
            className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
      backdrop-blur-sm
      ${
        isActive
          ? "bg-green-400/20 text-green-700 border border-green-300"
          : "bg-red-400/20 text-red-700 border border-red-300"
      }
    `}
          >
            <span className="mr-1">{isActive ? "✓" : "✗"}</span>
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "status",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default LaunchesTable;
