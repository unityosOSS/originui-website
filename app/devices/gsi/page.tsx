import GSIDevice from '@/components/devices/models/gsi'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Generic System Image",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function GSI() {
    return (
        <GSIDevice />
    )
}