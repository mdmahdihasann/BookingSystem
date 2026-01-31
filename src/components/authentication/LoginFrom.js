import React from 'react'
import Field from '../Field'

const LoginFrom = () => {
    return (
        <>
            <from>
                <div className='flex flex-col gap-2'>
                    <Field label="Email">
                        <input type='text' id='email' className='w-full bg-white px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                    <Field label="Password">
                        <input type='password' id='password' className='w-full bg-white px-2 py-1.5 rounded-lg mt-1' />
                    </Field>
                </div>
                <Field>
                    <button className='bg-blue-700 px-4 py-1.5 text-sm text-white rounded-lg hover:bg-blue-600 transition mt-4'>Login</button>
                </Field>
            </from>
        </>
    )
}

export default LoginFrom