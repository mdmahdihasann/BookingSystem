"use client"
import LaunchesTable from '@/components/dashboard/launches/LauncheTable';
import PopupForm from '@/components/dashboard/launches/PopupForm';
import { Button } from 'antd';
import { useState } from 'react';
import { GrAdd } from "react-icons/gr";

const LaunchesSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header className='flex items-center justify-between mb-5'>
                <h2 className='text-md font-semibold text-gray-800'>All Launch</h2>
                <Button
                  type="primary"
                  onClick={() => setShowModal(true)}
                >
                  <GrAdd /> Add New
                </Button>
            </header>

            <LaunchesTable />

            <PopupForm
              open={showModal}
              onClose={() => setShowModal(false)}
            />
        </>
    )
}

export default LaunchesSection;
