import Image from 'next/image'

import { MediaShelf } from './components/MediaShelf'
import { ScreenLoading } from './components/ScreenLoading'

export default function Home() {
  return (
    <div className="">
      {/* <ScreenLoading /> */}

      <main className="flex flex-col items-center gap-8">

        {/* hero */}
        <section className="w-full h-[calc(100vh-64px)] py-12 bg-backdrop text-white">
          <div className="sm:mx-16 h-full bg-neutral-400 sm:rounded-2xl overflow-hidden">

            {/* namemark and slideshow/video */}
            <section className="group relative w-full h-[60%] flex flex-col items-center justify-center bg-black sm:rounded-xl overflow-hidden">
              <video className="z-10 absolute rotate-90 w-full aspect-square object-bottom opacity-15 scale-110" style={{maskImage: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)'}} src="/assets/backdrop.webm" autoPlay loop muted disablePictureInPicture></video>
              <video className="z-10 absolute rotate-270 w-full aspect-square object-bottom opacity-15 scale-110" style={{maskImage: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)'}} src="/assets/backdrop.webm" autoPlay loop muted disablePictureInPicture></video>
              <video className="absolute w-full h-full object-cover opacity-75 blur-xs" src="/assets/WEKFESTFINAL_2.webm" autoPlay loop muted disablePictureInPicture></video>
              <h3 className="z-30 translate-y-0 starting:translate-y-full opacity-100 starting:opacity-0 text-2xl font-bernoru ease-out duration-500 delay-200">WELCOME TO</h3>
              <h1 className="z-30 pr-10 text-[140px] sm:text-[200px] italic font-conchin font-semibold tracking-tight leading-28 sm:leading-40 group-hover:drop-shadow-[0_6px_0_rgba(255,255,255,0.4)] transition-all duration-500">3TM</h1>
            </section>

            {/* instagram/recent media section */}
            <MediaShelf />

          </div>
        </section>

        <section className="w-full h-32 bg-purple-500">


        </section>

        <section className="w-full h-32 bg-orange-500">


        </section>

        <section className="w-full h-32 bg-sky-500">

        </section>

        <section className="w-full h-32 bg-lime-500">


        </section>



      </main>
    </div>
  )
}
