import type { Metadata } from "next";
import EsterOS from '@/components/sec/esteros'

export const metadata: Metadata = {
    title: "OriginUi | esterOS Archive",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function esterOS() {
    return (
        <div className="esteros">
            <div className='text-center text-[50px] font-semibold mt-[10vh]'>
                Download <span style={{ color: "var(--blue2)" }}>esterOS</span>
                <div className='text-[30px]'>
                    esterOS is a modified version of Arch Linux that brings a new design language
                </div>
            </div>
            <EsterOS/>
        </div>
    )
}