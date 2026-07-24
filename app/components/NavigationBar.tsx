'use client'

import Link from 'next/link'
import { useState } from 'react'

import { IoMdMenu } from 'react-icons/io'

export function NavigationBar() {

    const [mobileOpened, setMobileOpened] = useState(false)

    return (
        <nav className="z-100 fixed top-0 w-full h-16 max-h-32 font-black font-bernoru text-foreground">
            {/* <div className="w-full h-6 border border-b-black bg-background">
                // notification section?
            </div> */}
            
            <div className="w-full h-16">
                {/* mobile bar */}
                <div className="md:hidden w-full h-full flex items-center justify-between p-4 bg-background">
                    <Link href="/"><button className="font-conchin italic text-3xl">3TM</button></Link>
                    <button onClick={() => setMobileOpened(!mobileOpened)} className="">
                        <IoMdMenu size={48} className="" />
                    </button>
                </div>

                {/* dimdissal area on mobile */}
                { mobileOpened && <div className="fixed w-full h-screen" onClick={() => {setMobileOpened(false)}}></div>}

                <section className={`w-full h-fit md:h-full py-8 md:py-0 flex flex-col md:flex-row items-center justify-around backdrop-blur bg-backdrop/80 md:bg-background/85 ${mobileOpened ? '' : 'not-md:hidden'}`}>
                    <Link href="/" className="w-full h-full">
                        <button className="group w-full h-full py-2 text-4xl md:text-xl hover:bg-neutral-500/30 hover:border-dashed border-b-2 transition-colors duration-500">
                            <p className="drop-shadow-lg group-hover:drop-shadow-[1px_1px_0_#FFFF00] group-active:duration-100 group-active:tracking-normal group-hover:tracking-wider transition-all duration-500">HOME</p>
                        </button>
                    </Link>
                    <Link href="/media" className="w-full h-full">
                        <button className="group w-full h-full py-2 text-4xl md:text-xl hover:bg-neutral-500/30 hover:border-dashed border-b-2 transition-colors duration-500">
                            <p className="drop-shadow-lg group-hover:drop-shadow-[1px_1px_0_#00E1FF] group-active:duration-100 group-active:tracking-normal group-hover:tracking-wider transition-all duration-500">MEDIA</p>
                        </button>
                    </Link>
                    <Link href="/about" className="w-full h-full">
                        <button className="group w-full h-full py-2 text-4xl md:text-xl hover:bg-neutral-500/30 hover:border-dashed border-b-2 transition-colors duration-500">
                            <p className="drop-shadow-lg group-hover:drop-shadow-[1px_1px_0_#0DFF00] group-active:duration-100 group-active:tracking-normal group-hover:tracking-wider transition-all duration-500">ABOUT</p>
                        </button>
                    </Link>
                    <Link href="/contact" className="w-full h-full">
                        <button className="group w-full h-full py-2 text-4xl md:text-xl hover:bg-neutral-500/30 hover:border-dashed border-b-2 transition-colors duration-500">
                            <p className="drop-shadow-lg group-hover:drop-shadow-[1px_1px_0_#C800FF] group-active:duration-100 group-active:tracking-normal group-hover:tracking-wider transition-all duration-500">CONTACT</p>
                        </button>
                    </Link>
                </section>
            </div>
        </nav>
    )
}