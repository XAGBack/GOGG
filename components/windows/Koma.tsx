import Image from "next/image"
import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Window from "../Window"

const KomaWindow: FC = () => {


  const initSize = {
    h: 580,
    w: 1000,
  }
  const initPos = {
    x: 330,
    y: 55
  }

  return (
    <Window windowKey={WINDOWS.Koma} initSize={initSize} initPosition={initPos}>
      <Image src="/images/GMBsSdDWQAAqmFn.webp" alt="" width={1983 / 2} height={997 / 2} />
    </Window>
  )
}

export default KomaWindow