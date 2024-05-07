import EsterOS from '@/components/sec/esteros'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | esterOS",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function esterOS() {
    return (
        <EsterOS/>
    )
}