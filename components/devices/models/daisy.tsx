"use client"
import '@/assets/com/devices.css'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from "framer-motion";
import React from "react";

export default function DeviceDaisy() {
    return (
        <div className='mt-[10vh]'>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative gap-4 items-center justify-center px-4"
            >
                <div className="devPage">
                    <div className='text-[50px] font-semibold text-center'>
                        Download <span style={{ color: "var(--blue2)" }}>O</span>rigin<span style={{ color: "var(--blue2)" }}>Ui</span> for daisy
                        <div className='text-[30px]'>
                            Xiaomi Mi A2 Lite
                        </div>
                    </div>
                    <div className='devContainer mt-[4vh] rounded-[10px] p-3'>
                        <div className='grid grid-cols-4 gap-2 devGrids'>
                            <div className='devInfoContainer p-2 rounded-[10px]'>
                                <div className='flex items-center font-semibold text-[18px]'>
                                    <Icon className='mr-2' icon='solar:smartphone-2-bold-duotone' />
                                    Model
                                </div>
                                <div className='p-1'>
                                    Xiaomi Mi A2 Lite
                                </div>
                            </div>
                            <div className='devInfoContainer p-2 rounded-[10px]'>
                                <div className='flex items-center font-semibold text-[18px]'>
                                    <Icon className='mr-2' icon='solar:code-2-bold-duotone' />
                                    Codename
                                </div>
                                <div className='p-1'>
                                    daisy
                                </div>
                            </div>
                            <div className='devInfoContainer p-2 rounded-[10px]'>
                                <div className='flex items-center font-semibold text-[18px]'>
                                    <Icon className='mr-2' icon='solar:cloud-check-bold-duotone' />
                                    Version
                                </div>
                                <div className='p-1'>
                                    0.4 Beta
                                </div>
                            </div>
                            <div className='devInfoContainer p-2 rounded-[10px]'>
                                <div className='flex items-center font-semibold text-[18px]'>
                                    <Icon className='mr-2' icon='solar:user-check-bold-duotone' />
                                    Maintainer
                                </div>
                                <div className='p-1'>
                                    meowekk
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3 gap-3 dlBtns'>
                            <Link href='https://r2.originui.dev/devices/originui-daisy-v0.4-beta-a14.zip' target='_blank' className='w-full flex items-center justify-center'>
                                <div className='buildBtn w-full flex items-center justify-center font-semibold'>
                                    <Icon className='mr-2' icon='solar:cloud-download-bold-duotone' />
                                    Download Latest Build
                                </div>
                            </Link>
                            <div className='buildBtn cursor-not-allowed w-full flex items-center justify-center font-semibold'>
                                <Icon className='mr-2' icon='solar:archive-down-bold-duotone' />
                                Builds Archive
                            </div>
                            <Link href='https://ko-fi.com/originuidonator' className='w-full flex items-center justify-center' target='_blank'>
                                <div className='buildBtn w-full flex items-center justify-center font-semibold'>
                                    <Icon className='mr-2' icon='solar:heart-bold' />
                                    Support Us
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
