import AliothDevice from '@/components/devices/models/alioth'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Alioth",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Alioth() {
    return (
        <AliothDevice />
    )
}