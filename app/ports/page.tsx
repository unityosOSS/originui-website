import Ports from '@/components/sec/ports'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Chinese ROM's Ports",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function romPorts() {
    return (
        <Ports/>
    )
}