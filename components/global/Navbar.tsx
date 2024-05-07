"use client"
import Image from 'next/image'
import Link from 'next/link'
import '@/assets/com/navbar.css'
import Logo from '@/assets/img/originui.svg'
import { Icon } from '@iconify/react'
import { ModeToggle } from '@/components/sec/ModeToggle'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <div className="navbar flex items-center mt-3 ml-5 mr-5">
            <Link href='/'>
                <div className='logo flex items-center'>
                    <Image src={Logo} alt='logo' width={64} height={64} />
                    <div className='text-2xl'>
                        OriginUi
                    </div>
                </div>
            </Link>
            <div className='ml-5 pNav'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <div className='mr-4'>
                                <Link href='/' legacyBehavior passHref>
                                    <NavigationMenuLink>
                                        <span className='text-lg font-semibold'>Home</span>
                                    </NavigationMenuLink>
                                </Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger><span className='text-lg font-semibold'>Downloads</span></NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <Link href='/devices' legacyBehavior passHref>
                                    <NavigationMenuLink>
                                        <div className='p-2 navLink rounded-lg min-w-[260px] max-w-[300px]'>
                                            <div className='text-xl font-bold flex items-center'>
                                                <Icon className="mr-2" icon='solar:slider-vertical-bold-duotone' />
                                                Devices
                                            </div>
                                            <div className='text-[13px] mt-2'>
                                                Explore the devices that we support
                                            </div>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                                <NavigationMenuLink>
                                    <Link href='/ports'>
                                        <div className='p-2 navLink rounded-lg min-w-[260px] max-w-[300px] mt-2'>
                                            <div className='text-xl font-bold flex items-center'>
                                                <Icon className="mr-2" icon='solar:refresh-square-bold-duotone' />
                                                Custom ROM Ports
                                            </div>
                                            <div className='text-[13px] mt-2'>
                                                Chinese Custom ROM's ports
                                            </div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink>
                                    <Link href='/uos'>
                                        <div className='p-2 navLink rounded-lg min-w-[260px] max-w-[300px] mt-2'>
                                            <div className='text-xl font-bold flex items-center'>
                                                <Icon className="mr-2" icon='ion:sparkles' />
                                                uOS
                                            </div>
                                            <div className='text-[13px] mt-2'>
                                                An completly new Linux experience
                                            </div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger><span className='text-lg font-semibold'>Archive</span></NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <Link href='/esteros'>
                                        <div className='p-2 navLink rounded-lg min-w-[260px] max-w-[300px]'>
                                            <div className='text-xl font-bold flex items-center'>
                                                <Icon className="mr-2" icon='solar:box-bold-duotone' />
                                                esterOS
                                            </div>
                                            <div className='text-[13px] mt-2'>
                                                esterOS is a modified version of Arch Linux that brings a new design language.
                                            </div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className='ml-auto flex items-center'>
                <ModeToggle />
                {/* <Link href='/login'>
                    <div className='ml-2 navLg flex items-center'>
                        <Icon icon='solar:login-3-bold' />
                    </div>
                </Link> */}
                <div className='mbNav flex ml-2'>
                    <Sheet>
                        <SheetTrigger>
                            <div className='navLg'>
                                <Icon icon='clarity:bars-line' />
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='logo flex items-center justify-center'>
                                        <Image src={Logo} alt='logo' width={64} height={64} />
                                        <div className='text-2xl'>
                                            OriginUi
                                        </div>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    <div className='navCategory p-2 rounded-[10px] font-semibold text-left text-[20px] mb-4'>
                                        Downloads
                                    </div>
                                    <div className='navItems'>
                                        <Link href='/devices'>
                                            <div className='p-2 navLink rounded-lg'>
                                                <div className='text-xl font-bold flex items-center'>
                                                    <Icon className="mr-2" icon='solar:slider-vertical-bold-duotone' />
                                                    Devices
                                                </div>
                                                <div className='text-[13px] mt-2 text-left'>
                                                    Explore the devices that we support
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/ports'>
                                            <div className='p-2 navLink rounded-lg mt-2'>
                                                <div className='text-xl font-bold flex items-center text-left'>
                                                    <Icon className="mr-2" icon='solar:refresh-square-bold-duotone' />
                                                    Custom ROM Ports
                                                </div>
                                                <div className='text-[13px] mt-2 text-left'>
                                                    Chinese Custom ROM's ports
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/uos'>
                                            <div className='p-2 navLink rounded-lg mt-2'>
                                                <div className='text-xl font-bold flex items-center'>
                                                    <Icon className="mr-2" icon='ion:sparkles' />
                                                    uOS
                                                </div>
                                                <div className='text-[13px] mt-2 text-left'>
                                                    An completly new Linux experience
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='navCategory p-2 rounded-[10px] font-semibold text-left text-[20px] mb-4 mt-4'>
                                        Archive
                                    </div>
                                    <div className='navItems'>
                                        <Link href='/esteros'>
                                            <div className='p-2 navLink rounded-lg'>
                                                <div className='text-xl font-bold flex items-center'>
                                                    <Icon className="mr-2" icon='solar:box-bold-duotone' />
                                                    esterOS
                                                </div>
                                                <div className='text-[13px] mt-2 text-left'>
                                                    esterOS is a modified version of Arch Linux that brings a new design language.
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    );
}
