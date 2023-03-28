import Image from "next/image"
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react"
import { WINDOWS } from "../../context/WindowsProvider"
import Button from "../Button"
import Window from "../Window"

const RaidWindow: FC = () => {
  const [discord, setDiscord] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDiscordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDiscord(event.target.value);
  }

  const handleUrlChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUrl(event.target.value);
  }

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessage(event.target.value);
  }

  const email = "goggsnft@gmail.com"

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent("Twitter Raid")}&body=${encodeURIComponent(`Discord ID: ${discord}\n\nTwitter Url: ${url}\n\nMessage: ${message}`)}`;
    const newTab = window.open(mailtoLink, '_blank');
    newTab?.focus();
  }

  const initSize = {
    h: 600,
    w: 400,
  }
  const initPos = {
    x: 630,
    y: 55
  }

  return (
    <Window windowKey={WINDOWS.RAID} initSize={initSize} initPosition={initPos} inset={false}>
      <form className="h-full flex flex-col p-2 " onSubmit={handleSubmit}>
        <p className="font-bold text-lg">Sign up to have your Tweet raided!</p>
        <p>Please fill out each part of this form along with any extra info you need us to know in the message block.</p>
        <i>This will open an email in your default client. You will still need to hit send from there!</i>
        <br/>
        <label>Discord ID</label>
        <input type="text" className="mb-2" value={discord} onChange={handleDiscordChange} />
        <label>Twitter URL</label>
        <input type="text" className="mb-2" value={url} onChange={handleUrlChange} />
        <label>Message</label>
        <textarea value={message} className="mb-4 h-full min-h-[4rem]" onChange={handleMessageChange} />
        <Button className="px-4 py-1">Send</Button>
      </form>
    </Window>
  )
}

export default RaidWindow