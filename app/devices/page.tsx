import DevicesPage from "@/components/devices/Devices"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Devices",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <DevicesPage/>
    )
}