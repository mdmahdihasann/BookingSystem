"use client"
import React from 'react'
import Field from '../Field'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { loginUser } from "@/lib/auth";


export const users = [{
    email: "admin@gmail.com",
    password: "123456",
}]


const LoginFrom = () => {
    const router = useRouter();
    const { setAuth, loading, setLoading } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        const user = users.find((u) => u.email === data.email && u.password === data.password);
        if (user) {
            await loginUser(user)
            setAuth(data);
            toast.success("Login Successfully");
            router.push("/admin/dashboard")
        } else {
            toast.error("no match")
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>

                    <Field label="Email">
                        <input type='text' {...register("email")} id='email' className='w-full bg-white px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Password">
                        <input type='password' {...register("password")} id='password' className='w-full bg-white px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                </div>
                <Field>
                    <button type='submit' className='bg-blue-700 px-4 py-1.5 text-sm text-white rounded-lg hover:bg-blue-600 transition mt-4'>Login</button>
                </Field>
            </form>
        </>
    )
}

export default LoginFrom