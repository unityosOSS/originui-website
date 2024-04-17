import BluelineDevice from "@/components/devices/models/blueline"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Blueline",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <BluelineDevice/>
    )
}