import SunfishDevice from '@/components/devices/models/sunfish'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Sunfish",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Sunfish() {
    return (
        <SunfishDevice />
    )
}