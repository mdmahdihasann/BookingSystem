"use client"
import LaunchesTable from '@/components/dashboard/launches/LauncheTable';
import PopupForm from '@/components/dashboard/launches/PopupForm';
import { Button } from 'antd';
import { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { setEditItem } from "@/redux/features/lounchtable/lounchTable";

const LaunchesSection = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleEdit = async (data) => {
    dispatch(setEditItem(data))
    setShowModal(true);
  }
  
  const handleShow = () => {
    dispatch(setEditItem(null))
    setShowModal(true);
  }

  return (
    <>
      <header className='flex items-center justify-between mb-5'>
        <h2 className='text-md font-semibold text-gray-800'>All Launch</h2>
        <Button
          type="primary"
          onClick={handleShow}
        >
          <GrAdd /> Add New
        </Button>
      </header>

      <LaunchesTable setShowModal={setShowModal} handleEdit={handleEdit} />

      <PopupForm
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

export default LaunchesSection;
