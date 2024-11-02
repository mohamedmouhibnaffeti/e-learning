"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Profile() {
    const session = useSession()
    const user = session.data?.user as {email: string, image: string, name: string, role: string, provider: string}
    console.log(user)
    return (
        <a className="w-10 h-10 cursor-pointer" href={`${user?.role === "mentor" ? "/mentor-profile" : "/user-profile"}`} >
            <Image src={`${user?.image}`} alt={`${user?.name}`} width={100} height={100} className="object-cover w-full h-full rounded-full" />
        </a>
    )
}

export default Profile