import Field from '@/components/Field'
import React from 'react'

const ProfileForm = () => {
    return (
        <form className="flex flex-col gap-2 mt-4" >
            <div className='grid grid-cols-2 gap-4'>
                <Field label="Name" className="font-semibold text-gray-700 text-[14px]" >
                    <input
                        type="text" id="name" placeholder="Name" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
                </Field>
                <Field label="Email" className="font-semibold text-gray-700 text-[14px]" >
                    <input

                        type="email" id="email" placeholder="Email" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
                </Field>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <Field label="Phone" className="font-semibold text-gray-700 text-[14px]" >
                    <input
                        type="number" id="phone" placeholder="Phone" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
                </Field>
                <Field label="Status" className="font-semibold text-gray-700 text-[14px]">
                    <select
                        id="status" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1">
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                    </select>
                </Field>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <Field label="Password" className="font-semibold text-gray-700 text-[14px]" >
                    <input
                        type="password" id="password" placeholder="Password" className="w-full px-2 py-2 text-sm border rounded-lg border-gray-300 hover:border-blue-500 transition text-gray-600 mt-1" />
                </Field>
            </div>

            <Field>
                <button type="submit" className='w-32 bg-blue-600 py-2 text-white rounded-lg mt-2 font-semibold border-b-2 border-blue-300 hover:bg-blue-500 transition'>Update</button>
            </Field>
        </form>
    )
}

export default ProfileForm