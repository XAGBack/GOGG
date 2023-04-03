import Footer from '../components/Footer'
import Icons from '../components/Icons'
import HomeWindow from '../components/windows/Home'
import Head from 'next/head'

import DiscordWindow from '../components/windows/Discord'
import RaidWindow from '../components/windows/Raid'
import DexWindow from '@/components/windows/Goggdex'


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
        <div id="window-container" className='h-full relative bg-windowsBG' >

          <Icons />
          <HomeWindow />
          <DiscordWindow />
          {/* <RaidWindow /> */}
          <DexWindow />
        </div>
        <Footer />
      </main>
    </>
  )
}
