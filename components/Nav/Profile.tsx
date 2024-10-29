"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Profile() {
    const session = useSession()
    const user = session.data?.user
    return (
        <div className="w-10 h-10 cursor-pointer">
            <Image src={`${user?.image}`} alt={`${user?.name}`} width={100} height={100} className="object-cover w-full h-full rounded-full" />
        </div>
    )
}

export default Profile