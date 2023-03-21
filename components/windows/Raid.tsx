import Image from "next/image"
import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Window from "../Window"

const RaidWindow: FC = () => {

  const initSize = {
    h: 400,
    w: 600,
  }
  const initPos = {
    x: 470,
    y: 355
  }


  //TODO crop image if cant get original and remove scale and relative placement
  return (
    <Window windowKey={WINDOWS.RAID} initSize={initSize} initPosition={initPos}>
      <div className="bg-yellow-50 h-full overflow-x-hidden">
       

      </div>

    </Window>
  )
}

export default RaidWindow