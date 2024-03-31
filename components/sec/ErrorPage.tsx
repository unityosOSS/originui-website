"use client"
import { Icon } from '@iconify/react'

export default function ErrorPage() {
    return (
        <div className="errorPage mt-[30vh] text-center">
            <div className='text-[120px]'>
                <Icon style={{color: "#ff4025"}} className='m-auto' icon='solar:shield-warning-bold-duotone'/>
            </div>
            <div className='text-[50px] font-semibold'>
                Whoops!
            </div>
            <div className='text-[30px] font-semibold'>
                It seems that this link doesn't exist on our server
            </div>
        </div>
    )
}