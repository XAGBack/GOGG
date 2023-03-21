import useWindowSize from "@/hooks/useWindowSize"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Button from "../Button"
import Window from "../Window"

const DiscordWindow: FC = () => {

  const now = new Date().getTime()
  const initSize = {
    h: 600,
    w: 400,
  }
  const initPos = {
    x: 650,
    y: 55
  }

  return (
    <Window windowKey={WINDOWS.DISCORD} initSize={initSize} initPosition={initPos}>
      <div className="bg-purple-50 h-full overflow-x-hidden flex flex-col justify-between relative">
        <div className="bg-purple-200 shadow px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl"><span className="text-lg italic text-gray-400">#</span> 🤖 • npc</h1>
          <img src="/images/block-discord.png" alt="" className="w-10 h-10"/>
        </div>

        <div className="p-6 h-full">
          <Message
            name="Ogre ✰GGs✰"
            img="/images/demo2.png"
            time={now - 6000000}
            body={<p>Anyone checking out that latest EV3RETH Auction?</p>}
          />
          <Message
            name="EV3RETH"
            img="/images/demo1.png"
            time={now-600000}
            body={<div>
              <p>GGs</p>

              <p>That was rad</p>
            </div>
            }
          />
          <Message
            name="Ogre ✰GGs✰"
            img="/images/demo2.png"
            time={now-60000}
            body={<p>Who's ready?</p>}
          />
          <Message
            name="EV3RETH"
            img="/images/demo1.png"
            time={now}
            body={<p>LFG!</p>}
          />
        </div>
        <div className="bg-purple-200 px-4 py-2 flex justify-center">
          <Link href="https://discord.com/invite/GOGGs" >
            <Button className="px-3 py-1">
              Join GOGG Discord
            </Button>
          </Link>
        </div>
      </div>
    </Window>
  )
}

export default DiscordWindow


interface MessageProps {
  img: string;
  name: string;
  time: number;
  body: JSX.Element;
}
const Message: FC<MessageProps> = ({ img, name, time, body }) => {

  const date = new Date(time)

  return (
    <div className="flex mb-4 gap-3">
      <div className="rounded-full overflow-hidden w-10 h-10 min-w-[2.5rem]">
        <img src={img} alt="" className="w-10 h-10" />
      </div>
      <div>
        <div className="flex items-end gap-x-3 flex-wrap">
          <strong className="text-purple-800 leading-none">{name}</strong>
          <p className="text-xs">Today at {date.toLocaleString(undefined, {hour: "numeric", minute: "2-digit"})}</p>
        </div>
        {body}
      </div>
    </div>
  )
} 