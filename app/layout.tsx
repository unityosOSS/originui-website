import type { Metadata } from "next";
import "@/assets/css/global.css";
import { Poppins } from 'next/font/google'
import Navbar from "@/components/global/Navbar";
import { ThemeProvider } from "@/components/global/ThemeProvider"
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "OriginUi",
  description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <link rel="shortcut icon" href="/img/originui.svg" type="image/x-icon" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
