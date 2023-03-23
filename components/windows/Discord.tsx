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
    x: 690,
    y: 185
  }

  return (
    <Window windowKey={WINDOWS.DISCORD} initSize={initSize} initPosition={initPos}>
      <div className="bg-purple-50 h-full flex flex-col justify-between relative">
        <div className="bg-purple-200 shadow px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl"><span className="text-lg italic text-gray-400">#</span> 🤖 • npc</h1>
          <img src="/images/block-discord.png" alt="" className="w-10 h-10"/>
        </div>

        <div className="p-6 h-full overflow-auto mb-12">
          <Message
            name="GOGG hunt"
            img="/images/pfps/GOGG hunt.png"
            time={now - 1000000}
            body={(
              <>
                <p>World Boss has been summoned</p>
                <p><span>@Hobo</span> has slain the World Boss!</p>
              </>
            )}
          />
          <Message
            name="EarlyInvestor"
            img="/images/pfps/EarlyInvestor.png"
            time={now - 905000}
            body={<p>FK</p>}
          />
          <Message
            name="!Tasol"
            img="/images/pfps/Tasol.png"
            time={now - 900000}
            body={<p>FK haha</p>}
          />
          <Message
            name="Hobo"
            img="/images/pfps/Hobo.png"
            time={now - 850000}
            body={<img src="/images/lizard.png" className="w-16 mt-2"/>}
          />
          <Message
            name="!Ogre ✰GGs✰"
            img="/images/pfps/Ogre.png"
            time={now - 800000}
            body={<p>
              Hahahaha<br/>
              Yall still claiming exp when this hackooor is here<br />
              The trick is to tag him<br />
              If he shows  up<br />
              Then you don't claim<br />
            </p>}
          />
          <Message
            name="EarlyInvestor"
            img="/images/pfps/EarlyInvestor.png"
            time={now - 750000}
            body={<p>Distract him taggin him elswhere 😛</p>}
          />
          <Message
            name="!Ogre ✰GGs✰"
            img="/images/pfps/Ogre.png"
            time={now - 700000}
            body={<p>
              Exactly<br/>
              Just before you claim point tag him in dks server<br />
              Then claim and go<br />
              Easy 5 second advantage<br />
            </p>}
          />
          <Message
            name="Hobo"
            img="/images/pfps/Hobo.png"
            time={now - 650000}
            body={<p>I have dks muted :kek:</p>}
          />
          <Message
            name="!Ogre ✰GGs✰"
            img="/images/pfps/Ogre.png"
            time={now - 600000}
            body={<p>LOL</p>}
          />
        </div>
        <div className="bg-purple-200 h-12 px-4 py-2 flex justify-center absolute bottom-0 w-full">
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
      <div className="min-w-[2.5rem]">
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