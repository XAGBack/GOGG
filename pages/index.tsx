import Footer from '../components/Footer'
import Icons from '../components/Icons'
import HomeWindow from '../components/windows/Home'
import Head from 'next/head'

import DiscordWindow from '../components/windows/Discord'
import RaidWindow from '../components/windows/Raid'
import DexWindow from '@/components/windows/Goggdex'
import Image from 'next/image'
import MarvelWindow from '../components/windows/Koma'

import Logo from "../public/images/SUSHI_GOGGS.png"


export default function Home() {
  return (
    <>
      <Head>
        <title>GameoverGGs</title>
        <meta name="description" content="A Primal DAO of 75 Boutique Creatures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="og:title" content="GameoverGGs" />
        <meta name="og:description" content="A Primal DAO of 75 Boutique Creatures" />
        <meta property="og:image" content={Logo.src} />
        <meta property='twitter:image' content={Logo.src} />
        <meta name="og:url" content="https://www.goggs.io/" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen grid grid-rows-[1fr_auto]'>
        <div className='absolute z-[1] w-full h-full flex items-center justify-center p-2'>
          <div className='grid lg:grid-cols-4 gap-2'>
            <Image src="/images/gogg_1.png" alt="" height="200" width="200" className='hidden md:block' />
            <Image src="/images/gogg_2.png" alt="" height="200" width="200" />
            <Image src="/images/gogg_3.png" alt="" height="200" width="200" className='hidden md:block'/>
            <Image src="/images/gogg_4.png" alt="" height="200" width="200" />
          </div>
        </div>
        <div id="window-container" className='relative bg-windowsBG' >
          <Icons />
          <HomeWindow />
          <DiscordWindow />
          <MarvelWindow />
          {/* <RaidWindow /> */}
          <DexWindow />
        </div>
        <Footer />
      </main>
    </>
  )
}
