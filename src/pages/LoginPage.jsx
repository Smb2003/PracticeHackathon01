import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { InputField } from '../components/InputField'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate(); 
    const {user,setUser} = useState({}) 
    const onHandleChange = (e) => {
        const {id,value} = e.target;
        setUser({
            ...user,
            [id]:value
        })

    }
    const onHandleSubmit = () => {
        navigate("/")
    }
  return (
    <div className='md:max-w-full w-full m-2 md:m-0  h-screen flex flex-wrap items-center justify-center '>
        <div className='w-1/3 h-2/3 bg-slate-300 p-2 rounded-md'>
            <Heading label="Login"/>
            <form onSubmit={onHandleSubmit}>
                <InputField
                type="text"
                placeholder="Enter UserName"
                id="username"
                onChange={onHandleChange}/>
                <InputField
                type="email"
                placeholder="Email Address"
                id="email"
                onChange={onHandleChange}/>
                <InputField
                type="password"
                placeholder="Password"
                id="password"
                onChange={onHandleChange}/>
                <input type="submit" value="Submit" className='w-full h-12 rounded-md my-1 bg-green-300 hover:font-medium cursor-pointer'/>
                <p className='text-center m-4'>Haven't any account? <Link to="/Register" className='font-medium'>Register</Link></p>
            </form>

        </div>

    </div>
  )
}
