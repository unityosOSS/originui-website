import '@/assets/com/main.css'
import AuroraBackground from "@/components/ui/AuroraBackground";
import Link from 'next/link'
import Image from 'next/image';
import Logo from '@/assets/img/originui.svg'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OriginUi | Login",
    description: "OriginUi is a modified version LineageOS that brings some uhh... idk things",
};

export default function LoginPage() {
    return (
        <div className="wrapper">
            <AuroraBackground />
            <div className='authWindow p-4'>
                <div className='authHeader'>
                    <div className='logo flex items-center'>
                        <Image src={Logo} alt='logo' width={64} height={64} />
                        <div className='text-2xl'>
                            OriginUi <span style={{ color: "var(--blue2)" }}>Login</span>
                        </div>
                    </div>
                </div>
                <div className='authContent flex ml-3'>
                    <div className='authDesc text-[18px] font-semibold w-[340px]'>
                        Login to your OriginUi account and get access to all the features of the platform.
                    </div>
                    <div className='authForms ml-auto w-[400px]'>
                        <form action="">
                            <div className='input mb-5'>
                                <input
                                    type="text"
                                    name="login"
                                    placeholder='Username'
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                />
                            </div>
                        </form>
                        <div className='lgBtn p-2 rounded-[10px] text-center mt-4'>
                            Login
                        </div>
                        <div className='text-[15px] mt-3'>
                            Dont have an account yet? <Link href="/register" className='regText'>Create One</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
