"use client"
import '@/assets/com/main.css'
import AuroraBackground from "@/components/ui/AuroraBackground";
import { motion } from "framer-motion";
import React from "react";
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className="wrapper">
      <AuroraBackground />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="mt-[30vh] text-center">
          <div className="font-semibold text-[70px]">
            <span style={{ color: "var(--blue2)" }}>O</span>rigin<span style={{ color: "var(--blue2)" }}>Ui</span>
          </div>
          <div className="font-semibold text-[30px]">
            Android experience <span style={{ color: "var(--blue2)" }}>Redefined</span>
          </div>
          <div className='flex justify-center'>
            <Link href='/devices' className='mr-3'>
              <div className="dlBtn flex items-center justify-center p-2 w-[200px] mt-4">
                <Icon className="mr-2" icon='solar:slider-vertical-bold-duotone' />
                Explore Devices
              </div>
            </Link>
            <Link href='/discord'>
              <div className="dcBtn flex items-center justify-center p-2 w-[200px] mt-4">
                <Icon className="mr-2" icon='ic:baseline-discord' />
                Discord
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
