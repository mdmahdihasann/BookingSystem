"use client"

import { Space, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow, setEditItem } from "@/redux/features/lounchtable/lounchTable";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const LaunchesTable = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lounchtable.data);
  const editData = useSelector((state) => state.lounchtable.editItem);
  const { reset } = useForm();

  const handleDelete = (id) => {
    dispatch(deleteRow(id));
  };

  const handleEdit = (record) => {
    setShowModal(true);
    dispatch(setEditItem(record));
  }
  useEffect(() => {
    if (editData) {
      reset({
        LauncheName: editData?.LauncheName || "",
        phone: editData?.phone || "",
        seatCapacity: editData?.seatCapacity || "",
        time: editData?.time || "",
        status: editData?.status || "",
        image: null
      });
    }
  }, [editData, reset]);

  const columns = [
    {
      title: 'LauncheName',
      dataIndex: 'LauncheName',
      key: 'LauncheName',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'seatCapacity',
      dataIndex: 'seatCapacity',
      key: 'seatCapacity',
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'status',
      key: 'status',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey="id" />
  );
};

export default LaunchesTable;