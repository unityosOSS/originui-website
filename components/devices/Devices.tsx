"use client"
import '@/assets/com/devices.css'
import Link from 'next/link'
import Image from 'next/image';
import { Icon } from '@iconify/react'
import { motion } from "framer-motion";
import React from "react";
import DeviceImage from '@/assets/img/originui-phone.png';

export default function DevicesPage() {
    return (
        <div className="devices">
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
                <div className='text-center text-[50px] font-semibold mt-[10vh]'>
                    Download <span style={{ color: "var(--blue2)" }}>O</span>rigin<span style={{ color: "var(--blue2)" }}>Ui</span>
                    <div className='text-[30px]'>
                        Get the latest build and enjoy the experience
                    </div>
                </div>
                <div className='devicesUI'>
                    {/* <div className='deviceSearch mt-3 p-2 flex items-center'>
                        <div className='p-2 searchIcon'>
                            <Icon icon='solar:magnifer-linear' />
                        </div>
                        <input type="text" placeholder='Search devices...' />
                    </div> */}
                    <div className='grid grid-cols-3 gap-2 mt-4 devicesGrid'>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />

                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        pyxis
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Mi 9 Lite
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/pyxis' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />

                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        Instantnoodlep
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        OnePlus 8 Pro
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/instantnoodlep' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />

                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        daisy
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Xiaomi Mi A2 Lite
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/daisy' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />
                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        rosemary
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Xiaomi Redmi Note 10S
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/rosemary' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />
                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        spaced
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Realme 8i
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/spaced' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />
                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        sunfish
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Google Pixel 4a (4G)
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/sunfish' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />
                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        alioth
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Xiaomi POCO F3
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                meowekk
                                            </div>
                                        </div>
                                        <Link href='/devices/alioth' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='deviceContainer p-2'>
                            <div className='deviceHeader'>
                                <Image
                                    src={DeviceImage}
                                    className='deviceBanner rounded-[10px]'
                                    alt='deviceImage'
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                />
                                <div className='deviceInfo mt-3'>
                                    <div className='text-[13px] font-semibold'>
                                        GSI
                                    </div>
                                    <div className='text-[25px] font-bold'>
                                        Generic System Image
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col'>
                                            <div className='text-[20px]'>
                                                Maintained by:
                                            </div>
                                            <div className='text-[15px] font-semibold'>
                                                opsonc
                                            </div>
                                        </div>
                                        <Link href='/devices/gsi' className='ml-auto'>
                                            <div className='getBuild text-center'>
                                                <p>Get</p>
                                                <p>Build</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
