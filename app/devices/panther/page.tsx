import PantherDevice from "@/components/devices/models/panther"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Panther",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <PantherDevice/>
    )
}