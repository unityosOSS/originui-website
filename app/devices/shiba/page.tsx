import ShibaDevice from "@/components/devices/models/shiba"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Shiba",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <ShibaDevice/>
    )
}