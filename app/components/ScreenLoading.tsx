'use client'

import { useEffect, useState } from 'react'

import { RiLoader3Fill } from 'react-icons/ri'

export function ScreenLoading() {
    const [loaded, setLoaded] = useState(document.readyState === 'complete')

    useEffect(() => {
        function stateUpdate() {
            if (document.readyState === 'complete') {
                setLoaded(true)
            }
        }

        document.addEventListener('readystatechange', stateUpdate)

        return () => {
            document.removeEventListener('readystatechange', stateUpdate)
        }
    }, [])

    return (
        <section className={`z-110 fixed top-0 w-full h-screen ${loaded && 'pointer-events-none'}`}>
            <div className={`w-full bg-background ${loaded ? 'h-[0%]' : 'h-[12%]'} transition-all duration-1000 delay-2000`}></div>
            <div className={`w-full flex flex-col items-center justify-center bg-backdrop/75 ${loaded ? 'h-full opacity-0' : 'h-[76%]'} backdrop-blur-2xl transition-all duration-1000 delay-2000`}>
                <div className="z-10 flex flex-col items-center justify-center animate-pulse">
                    <RiLoader3Fill className="text-foreground text-[240px] opacity-20" style={{ animation: 'spin 3s linear infinite' }} />
                    <h1 className="absolute z-10 pr-6 text-9xl italic font-conchin font-semibold tracking-tight leading-28 sm:leading-40">3TM</h1>
                </div>
                <video className="hidden md:block absolute w-full h-full object-cover opacity-4 " loop muted autoPlay playsInline disablePictureInPicture>
                    <source src="/assets/WEKFESTFINAL_2.webm" />
                </video>
            </div>
            <div className={`w-full bg-background ${loaded ? 'h-[0%]' : 'h-[12%]'} transition-all duration-1000 delay-2000`}></div>
        </section>
    )
}