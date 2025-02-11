"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const UserDetails = () => {
    const { user } = useUser()
    return (
        <div className='flex flex-col items-start justify-center'>
            <h1 className='gradient-text text-lg font-bold '>{user?.fullName}</h1>
            <p className='text-[#384262] text-xs font-medium '>{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
    )
}

export default UserDetails