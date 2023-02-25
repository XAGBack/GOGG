import Footer from '@/components/Footer'
import Icons from '@/components/Icons'
import { WINDOWS } from '@/context/WindowsProvider'
import Head from 'next/head'

import Window from "../components/Window"


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
          <Window windowKey={WINDOWS.HOME}>HOME</Window>
          <Window windowKey={WINDOWS.OTHER} initPosition={{ x: 500, y: 300 }}>
            Other
          </Window>
        </div>
        <Footer />
      </main>
    </>
  )
}
