"use client"
import React from 'react'
import Field from '../Field'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/lib/auth'
import { useAuth } from "@/hooks/useAuth";


const LoginFrom = () => {
    const router = useRouter();
    const {setAuth} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const logData = await res.json();
            loginUser(logData)
            setAuth(logData);
            if (res.status === 200) {
                if (logData.user.role === "admin") {
                    router.push("/admin/dashboard/")
                } else {
                    router.push("/admin/user")
                }

                toast.success("Login Successfully");
            } else {
                toast.error(logData.message)
            }
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>

                    <Field label="Email">
                        <input type='text' {...register("email")} id='email' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Password">
                        <input type='password' {...register("password")} id='password' className='w-full bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                </div>
                <Field>
                    <button type='submit' className='bg-blue-700 px-6 py-2 text-sm text-white rounded-lg hover:bg-blue-600 transition mt-4'>Login</button>
                </Field>
            </form>

        </>
    )
}

export default LoginFrom