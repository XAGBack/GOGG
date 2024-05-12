import Image from "next/image"
import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Window from "../Window"

const MarvelWindow: FC = () => {


  const initSize = {
    h: 800 / 2,
    w: 1983 / 2,
  }
  const initPos = {
    x: 330,
    y: 55
  }

  return (
    <Window windowKey={WINDOWS.Marvel} initSize={initSize} initPosition={initPos}>
      <Image src="/images/GBWvBxwWwAAdo-p.jpg" alt="" width={1983 / 2} height={997 / 2} />
    </Window>
  )
}

export default MarvelWindow