import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"

import Window from "../Window"

const goggNames = ["Draconis", "Nekorus", "Shelby the Yeti", "Medusa", "Armordillo",
  "Gobi the Goblin", "Arachne", "Hendrix", "DJ", "Nix", "Panda", "Wukong", "Ezio",
  "Apollo", "Anubis", "Tusk", "Vash & Nashor", "Sabre", "Thanos", "Jiro", "Helios",
  "Void", "Jinn", "Oak", "Blanca","Antares", "Lilly"
]
const DexWindow: FC = () => {

  const initSize = {
    h: 600,
    w: 600,
  }
  const initPos = {
    x: 180,
    y: 40
  }

  return (
    <Window windowKey={WINDOWS.DEX} initSize={initSize} initPosition={initPos}>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {goggNames.map((name, i) => <Gogg key={name} name={name} number={i} />)}
      </div>
    </Window>
  )
}

export default DexWindow

const Gogg: FC<{ name: string, number?: number }> = ({ name }) => {
  return (
    <div className="rounded-xl bg-white shadow overflow-hidden w-[31%] min-w-[10rem] max-w-[318px]">
      <img src={`/images/nfts/${name}.png`} alt={name} />
      <p className="p-2 text-center text-xl font-bold">{name}</p>
    </div>
  )
}