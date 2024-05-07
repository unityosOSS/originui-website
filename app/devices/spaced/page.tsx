import SpacedDevice from '@/components/devices/models/spaced'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Spaced",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Spaced() {
    return (
        <SpacedDevice />
    )
}