import type { Metadata } from "next";
import Uos from '@/components/sec/uos'

export const metadata: Metadata = {
    title: "OriginUi | uOS",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function esterOS() {
    return (
        <div className="esteros">
            <div className='text-center text-[50px] font-semibold mt-[8vh]'>
                Introducing <span style={{ color: "var(--blue2)" }}>uOS</span>
                <div className='text-[30px]'>
                    An completly new Linux experience
                </div>
            </div>
            <Uos/>
        </div>
    )
}