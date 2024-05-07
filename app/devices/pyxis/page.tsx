import PyxisDevice from "@/components/devices/models/pyxis"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Pyxis",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Devices() {
    return (
        <PyxisDevice/>
    )
}