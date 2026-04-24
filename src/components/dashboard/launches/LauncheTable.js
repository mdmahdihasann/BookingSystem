"use client"

import { Space, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow, setLounchTableData } from "@/redux/features/lounchtable/lounchTable";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const LaunchesTable = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lounchtable.data);
  const { reset } = useForm();
  const url = "/api/lounchtable/";


  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      dispatch(setLounchTableData(data))
    }

    getData();

  }, [])



  const handleDelete = async (data) => {
    try {
      await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      dispatch(deleteRow(data));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };


  const columns = [
    {
      title: 'Lounch Name',
      dataIndex: 'lounch_name',
      key: 'lounch_name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Seat Capacity',
      dataIndex: 'seat_capacity',
      key: 'seat_capacity',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <Space size="middle">
          <a >Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default LaunchesTable;