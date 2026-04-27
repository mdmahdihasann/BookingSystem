import ProfileForm from '@/components/dashboard/profile/ProfileForm'
import ProfileImage from '@/components/dashboard/profile/ProfileImage'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-24'>
        <div >
            <ProfileImage/>
            <h3 className='text-[16px] font-sans font-semibold mt-2 mb-.5'>Sojibe Khan</h3>
            <p className='text-xs text-gray-500'>Developer</p>
        </div>
        <div>
            <ProfileForm/>
        </div>
    </div>
  )
}

export default page