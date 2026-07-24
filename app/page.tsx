// import Image from 'next/image'

import { MediaShelf } from './components/MediaShelf'
import { PerspectiveSurface } from './components/PerspectiveSurface'

export default function Home() {
  return (
    <>

      <main className="flex flex-col items-center gap-8">

        {/* hero */}
        <header className="w-full h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] md:min-h-128 md:py-12 bg-backdrop text-white">
          <div className="md:mx-16 h-full bg-black sm:rounded-2xl md:border md:border-foreground/30 overflow-hidden">

            {/* top brand/name-mark */}
            <section className="z-0 relative w-full h-[60%] pt-6 flex flex-col items-center justify-center bg-black sm:rounded-xl overflow-hidden">

              {/* overlays */}
              <video className="z-10 absolute rotate-90 w-full aspect-square object-bottom starting:opacity-0 opacity-9 scale-110 transition-all duration-3000 delay-1000 pointer-events-none" style={{ maskImage: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)' }} src="/assets/backdrop.webm" loop muted autoPlay playsInline disablePictureInPicture></video>
              <video className="z-10 absolute rotate-270 w-full aspect-square object-bottom starting:opacity-0 opacity-9 scale-110 transition-all duration-3000 delay-1000 pointer-events-none" style={{ maskImage: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)' }} src="/assets/backdrop.webm" loop muted autoPlay playsInline disablePictureInPicture></video>

              {/* top/bottom border fade gradients */}
              <div className="z-20 absolute top-0 w-full h-[12%] bg-linear-to-b from-black to-transparent"></div>
              <div className="z-20 absolute bottom-0 w-full h-[12%] bg-linear-to-t from-black to-transparent"></div>

              {/* opening curtains */}
              <div className="z-20 absolute left-0 starting:w-[50%] w-0 h-full transition-all duration-2000 delay-700 bg-black"></div>
              <div className="z-20 absolute right-0 starting:w-[50%] w-0 h-full transition-all duration-2000 delay-700 bg-black"></div>

              {/* backdrop video */}
              <video className="absolute w-full h-full object-cover opacity-80 blur-xs" src="/assets/WEKFESTFINAL_2.webm" loop muted autoPlay playsInline disablePictureInPicture></video>

              <div className="z-30 select-none">
                <PerspectiveSurface maxAngleX={20} maxAngleY={50}>
                  <div className="group w-full h-full flex flex-col items-center justify-center p-16 hover:p-24">
                    <h3 className="group-hover:hidden translate-y-0 starting:translate-y-full opacity-100 starting:opacity-0 text-2xl font-bernoru ease-out duration-500 delay-200 group-hover:delay-0 group-hover:drop-shadow-[0_4px_0_rgba(255,255,255,0.5)]">WELCOME TO</h3>
                    <h1 className="pr-10 text-[140px] sm:text-[240px] group-hover:sm:text-[280px] italic font-conchin font-semibold tracking-tight leading-28 sm:leading-48 drop-shadow-[0_5px_0_rgba(255,255,255,0.5)] transition-all duration-500">3TM</h1>
                    <h2 className="h-0 group-hover:h-fit -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 text-2xl sm:text-5xl leading-0 md:leading-12 italic font-conchin font-semibold tracking-tight pt-8 transition-all duration-700 pointer-events-none">{"\"CHASE THE MOON\""}</h2>
                  </div>
                </PerspectiveSurface>
              </div>
            </section>

            {/* instagram/recent media section */}
            <section className="z-10 w-full h-full starting:translate-y-full translate-y-0 delay-700 transition-all duration-1500">
              <MediaShelf />
            </section>
          </div>
        </header>

        <section className="w-full h-32 bg-purple-500">


        </section>

        <section className="w-full h-32 bg-orange-500">


        </section>

        <section className="w-full h-32 bg-sky-500">

        </section>

        <section className="w-full h-32 bg-lime-500">


        </section>



      </main>
    </>
  )
}
