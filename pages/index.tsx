import Footer from '../components/Footer'
import Icons from '../components/Icons'
import HomeWindow from '../components/windows/Home'
import Head from 'next/head'

import DiscordWindow from '../components/windows/Discord'
import RaidWindow from '../components/windows/Raid'
import DexWindow from '@/components/windows/Goggdex'
import Image from 'next/image'
import MarvelWindow from '@/components/windows/Marvel'


export default function Home() {
  return (
    <>
      <Head>
        <title>GameoverGGs</title>
        <meta name="description" content="A Primal DAO of 75 Boutique Creatures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen flex flex-col'>
        <div className='absolute z-[1] w-full h-full flex items-center justify-center p-2'>
          <div className='grid lg:grid-cols-4 gap-2'>
            <Image src="/images/gogg_1.png" alt="" height="200" width="200" className='hidden md:block' />
            <Image src="/images/gogg_2.png" alt="" height="200" width="200" />
            <Image src="/images/gogg_3.png" alt="" height="200" width="200" className='hidden md:block'/>
            <Image src="/images/gogg_4.png" alt="" height="200" width="200" />
          </div>
        </div>
        <div id="window-container" className='h-full relative bg-windowsBG' >

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
