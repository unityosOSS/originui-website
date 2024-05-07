"use client"
import '@/assets/com/ester.css'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function esterOSPG() {
    return (
        <div className="esterContainer">
            <div className='text-center text-[50px] font-semibold mt-[15vh]'>
                Download <span style={{ color: "var(--blue2)" }}>esterOS</span>
                <div className='text-[30px]'>
                    This OS is not supported anymore, But you can still download it
                </div>
            </div>
            <div className='esterDownload p-2 rounded-[10px]'>
                <div className='text-center font-semibold text-[40px]'>
                    <span style={{ color: "var(--blue2)" }}>esterOS</span> 25.1
                    <div className='text-[20px] mt-[-10px]'>
                        Latest Release
                    </div>
                    <Link href='https://r2.originui.dev/isos/x86_64/esterOS-25.1-RELEASE.iso'>
                        <div className='esterDownloadBtn text-[18px] mt-3 flex items-center justify-center'>
                            <Icon className='mr-2' icon='solar:cloud-download-bold-duotone' />
                            Download [1,6GB]
                        </div>
                    </Link>
                </div>
            </div>
            <div className='text-[30px] font-semibold text-center mt-[4vh]'>
                Want to get older versions, or for other platforms?
            </div>
            <div className='flex justify-center'>
                <Sheet>
                    <SheetTrigger>
                        <div className='esterDownloadBtn text-[18px] mt-3 max-w-[280px] text-center font-semibold m-auto flex justify-center items-center'>
                            <Icon className='mr-2' icon='solar:archive-check-bold-duotone' />
                            Explore releases archive
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className='text-[20px] font-semibold'>
                                    esterOS Releases Archive
                                </div>
                            </SheetTitle>
                            <SheetDescription>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>X86_64 Releases</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='esterReleasesList'>
                                                <div className='esterRelease'>
                                                    <Link href='https://r2.originui.dev/isos/x86_64/esterOS-25.0-RELEASE.iso'>esterOS-25.0-RELEASE.iso</Link>
                                                </div>
                                                <div className='esterRelease'>
                                                    <Link href='https://r2.originui.dev/isos/x86_64/esterOS-25-RP-1.iso'>esterOS-25-RP-1.iso</Link>
                                                </div>
                                                <div className='esterRelease'>
                                                    <Link href='https://r2.originui.dev/isos/x86_64/esterOS-25-Canary-1-x86_64.iso'>esterOS-25-Canary-1-x86_64.iso</Link>
                                                </div>
                                                <div className='esterRelease'>
                                                    <Link href='https://r2.originui.dev/isos/x86_64/esteros25-Delta3-desktop-legacy-amd64.iso'>esteros25-Delta3-desktop-legacy-amd64.iso</Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}