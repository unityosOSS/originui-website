"use client"
import '@/assets/com/ports.css'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Ports() {
    return (
        <div className="ports p-3 rounded-[10px]">
            <div className='text-[20px] font-semibold'>
                ROM Ports Index
                <div className='text-[15px]'>
                    ROM's ported by chinese people to xiaomi devices.
                </div>
                <div className='divider mt-2 p-1 rounded-full'></div>
            </div>
            <div className='portsListing mt-3'>
                <Link href='https://r2.originui.dev/ports/MI11Lite_220912_Flyme+9.3.0.0A_Fastboot.7z'>
                    <div className='portDL p-2 rounded-[10px] flex items-center'>
                        <div className='font-semibold flex items-center'>
                            <div className='portIcon p-2 rounded-[10px] mr-2'>
                                <Icon icon='solar:archive-down-minimlistic-bold-duotone' />
                            </div>
                            MI11Lite_220912_Flyme+9.3.0.0A_Fastboot.7z
                        </div>
                        <div className='portInfo ml-auto p-[4.3px] rounded-[10px]'>
                            <div className='flex items-center justify-center'>
                                <Icon className='mr-2' icon='solar:weigher-bold-duotone' />
                                2.31 GB
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='https://r2.originui.dev/ports/Mi-10-Pro-Flyme-OS-10-Android-13-fastboot.7z'>
                    <div className='portDL p-2 rounded-[10px] mt-3 flex items-center'>
                        <div className='font-semibold flex items-center'>
                            <div className='portIcon p-2 rounded-[10px] mr-2'>
                                <Icon icon='solar:archive-down-minimlistic-bold-duotone' />
                            </div>
                            Mi-10-Pro-Flyme-OS-10-Android-13-fastboot.7z
                        </div>
                        <div className='portInfo ml-auto p-[4.3px] rounded-[10px]'>
                            <div className='flex items-center justify-center'>
                                <Icon className='mr-2' icon='solar:weigher-bold-duotone' />
                                2.94 GB
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}