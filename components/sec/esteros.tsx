"use client"
import { Icon } from '@iconify/react'
import '@/assets/com/ester.css'
import EsterSS from '@/assets/img/esteros.png'
import Link from 'next/link'
import Image from 'next/image'

export default function esterosContent() {
    return (
        <div className='esterContent mt-3'>
            <Image 
                src={EsterSS}
                className='rounded-[10px] m-auto esterSS'
                width={1920}
                height={1080}
                alt='ester'
            />
        </div>
    )
}