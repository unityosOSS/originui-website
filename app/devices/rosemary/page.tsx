import SunfishDevice from '@/components/devices/models/rosemary'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Rosemary",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Rosemary() {
    return (
        <SunfishDevice />
    )
}
