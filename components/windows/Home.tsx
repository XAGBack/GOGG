import Image from "next/image"
import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Window from "../Window"

const HomeWindow: FC = () => {

  const initSize = {
      h: 600,
      w: 800,
  }
  const initPos = {
    x: 150,
    y: 100
  }


  //TODO crop image if cant get original and remove scale and relative placement
  return (
    <Window windowKey={WINDOWS.HOME} initSize={initSize} initPosition={initPos}>
      <div className="bg-yellow-50 h-full overflow-x-hidden">
        <Image priority src="/images/Gogg.png" alt="" width="596" height="421" className="w-full scale-[1.03] relative -top-2" />
        <div className="px-3 mb-6">
          <h1 className="font-bold text-4xl mb-4 mt-3">Game Over GGs</h1>
          {/* <strong>A Primal DAO of 75 Boutique Creatures 👹</strong>
          <p>A group of Leaders, Innovators, Artists and more.</p> */}
          {/* <br/> */}
          <p>
            𝚠𝚑𝚊𝚝 𝚒𝚜 𝙶𝙾𝙶𝙶𝚜? <br/>

            𝚊𝚍𝚓𝚎𝚌𝚝𝚒𝚟𝚎:<br />
            ¹𝚛𝚎𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚊𝚝𝚒𝚘𝚗 𝚘𝚏 𝚘𝚗𝚎𝚜𝚎𝚕𝚏 𝚊𝚏𝚝𝚎𝚛-𝚜𝚙𝚊𝚠𝚗.<br />
            ²𝚛𝚊𝚠 𝚍𝚎𝚙𝚒𝚌𝚝𝚒𝚘𝚗 𝚘𝚏 𝚘𝚗𝚎𝚜 𝚒𝚗𝚗𝚎𝚛 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛.<br />
            <br />
            𝚗𝚘𝚞𝚗:<br />
            ¹𝚊𝚗 𝚗𝚏𝚝<br />
            ²𝚊 𝚌𝚘-𝚠𝚊𝚕𝚔𝚎𝚛.<br />
            ³𝚊 𝚏𝚛𝚒𝚎𝚗𝚍<br />
            <br />
            𝚠𝚎 𝚑𝚊𝚟𝚎 𝚛𝚎𝚜𝚙𝚊𝚠𝚗𝚎𝚍 𝚒𝚗𝚝𝚘 𝚝𝚑𝚎 𝚠𝚘𝚛𝚕𝚍 𝚘𝚏 𝚠𝚎𝚋𝟹.<br />
            <br />
            𝚞𝚗𝚝𝚒𝚕 𝚝𝚑𝚎 𝚑𝚊𝚛𝚍 𝚛𝚎𝚜𝚎𝚝<br />
            <br />
            𝚒𝚗 𝙶𝙾𝙶𝙶𝚜, 𝚠𝚎 𝚝𝚛𝚞𝚜𝚝.
          </p>
          
          
        </div>
        <Image unoptimized src="/images/SUSHI_GOGGS.png" alt="" width="1971" height="1200" className="m-auto"/>

      </div>

    </Window>
  )
}

export default HomeWindow