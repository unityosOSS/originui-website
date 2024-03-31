import ErrorPage from "@/components/sec/ErrorPage"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Not Found",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};


export default function Error() {
    return (
        <div className="error">
            <ErrorPage/>
        </div>
    )
}