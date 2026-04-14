"use client"

import { Space, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow, setEditItem } from "@/redux/features/lounchtable/lounchTable";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const LaunchesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lounchtable.data);
  const editData = useSelector((state) => state.lounchtable.editItem);
  const { reset } = useForm();

  const handleDelete = (id) => {
    dispatch(deleteRow(id));
  };

  const handleEdit = (record) =>{
    dispatch(setEditItem(record));
    setShowModal(true);
  }
  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData]);
  
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
          <a onClick={()=>handleEdit(record)}>Edit</a>
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