"use client"
import React from 'react'
import Field from '../Field'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const RegisterFrom = () => {
    const route = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const datas = await res.json();

            if (res.status === 200) {
                toast.success("Registration successfully");
                route.push("/login")
            }
        } catch (error) {
            console.log("Error:", error);

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>

                    <Field label="Name">
                        <input type='text' {...register("name")} id='name' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Email">
                        <input type='text' {...register("email")} id='email' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Phone">
                        <input type='number' {...register("phone")} id='phone' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Password">
                        <input type='password' {...register("password")} id='password' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                </div>
                <Field>
                    <button type='submit' className='bg-blue-700 px-6 py-2 text-sm text-white rounded-lg hover:bg-blue-600 transition mt-4'>Register</button>
                </Field>
            </form>
        </>
    )
}

export default RegisterFrom