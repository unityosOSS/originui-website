"use client"
import { Icon } from '@iconify/react'
import '@/assets/com/uos.css'
import UosSS from '@/assets/img/uos.png'
import Link from 'next/link'
import Image from 'next/image'

export default function uosContent() {
    return (
        <div className='uosContent mt-3'>
            <Image
                src={UosSS}
                className='rounded-[10px] m-auto uosSS'
                width={1920}
                height={1080}
                alt='uos'
            />
            <div className='mt-3'>
                <div className='text-center mb-3 font-semibold'>
                    Coming soon...
                </div>
            </div>
        </div>
    )
}