'use client'

import Link from 'next/link'
import { useState } from 'react'

import { IoMdMenu, IoMdMoon } from 'react-icons/io'

export function NavigationBar() {

    const [mobileOpened, setMobileOpened] = useState(false)

    return (
        <nav className="z-100 fixed top-0 w-full h-16 max-h-32 font-black font-bernoru text-foreground">
            {/* mobile bar */}
            <div className="sm:hidden w-full h-full flex items-center justify-between p-4 bg-background">
                <Link href="/"><button className="font-conchin italic text-3xl">3TM</button></Link>
                <button onClick={() => setMobileOpened(!mobileOpened)} className="">
                    <IoMdMenu size={48} className="" />
                </button>
            </div>

            {/* dismissal area on mobile */}
            { mobileOpened && <div className="fixed w-full h-screen" onClick={() => {setMobileOpened(false)}}></div>}

            <section className={`w-full h-fit sm:h-full py-8 sm:py-0 flex flex-col sm:flex-row items-center justify-around backdrop-blur bg-backdrop/80 sm:bg-background/85 ${mobileOpened ? '' : 'not-sm:hidden'}`}>
                <Link href="/" className="w-full h-full"><button className="w-full h-full py-2 text-4xl sm:text-base sm:hover:text-xl duration-300 hover:bg-neutral-500/30">HOME</button></Link>
                <Link href="/media" className="w-full h-full"><button className="w-full h-full py-2 text-4xl sm:text-base sm:hover:text-xl hover:bg-neutral-500/30">MEDIA</button></Link>
                <Link href="/about" className="w-full h-full"><button className="w-full h-full py-2 text-4xl sm:text-base sm:hover:text-xl hover:bg-neutral-500/30">ABOUT</button></Link>
                <Link href="/contact" className="w-full h-full"><button className="w-full h-full py-2 text-4xl sm:text-base sm:hover:text-xl hover:bg-neutral-500/30">CONTACT</button></Link>
            </section>
        </nav>
    )
}