import BluejayDevice from "@/components/devices/models/bluejay"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Bluejay",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <BluejayDevice/>
    )
}