import InstantnoodlepDevice from '@/components/devices/models/instantnoodlep'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Rosemary",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function Instantnoodlep() {
    return (
        <InstantnoodlepDevice />
    )
}
