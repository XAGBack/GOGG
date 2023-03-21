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
        <div className="px-3">
          <h1 className="font-bold text-4xl mb-4 mt-3">Game Over GGs</h1>
          <strong>A Primal DAO of 75 Boutique Creatures 👹</strong>
          <p>A group of Leaders, Innovators, Artists and more.</p>
        </div>

      </div>

    </Window>
  )
}

export default HomeWindow