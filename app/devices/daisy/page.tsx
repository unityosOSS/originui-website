import DaisyDevice from '@/components/devices/models/daisy'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Daisy",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Daisy() {
    return (
        <DaisyDevice />
    )
}
