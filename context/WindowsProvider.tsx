import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface InitContext {
  orderState: [
    string[],
    Dispatch<SetStateAction<string[]>>
  ];
  minimizedState: [
    { [key: string]: boolean; },
    Dispatch<SetStateAction<{ [key: string]: boolean; }>>
  ];
  // closedState: [
  //   { [key: string]: boolean; },
  //   Dispatch<SetStateAction<{ [key: string]: boolean; }>>
  // ];
}

const initContext: InitContext = {
  orderState: [[], ()=> null],
  minimizedState: [{}, () => null],
  // closedState: [{}, () => null],
}

export const WindowsContext = createContext(initContext)

export const useWindowsContext = () => useContext(WindowsContext)

export const WINDOWS = {
  Koma: "Koma",
  // SWEEPER: "Gogg Sweeper",
  DEX: "Goggdex",
  // RAID: "Twitter Quest",
  DISCORD: "Discord",
  HOME: "Home",
}

export const ICONS = {
  [WINDOWS.Koma]: "/images/koma.png",
  [WINDOWS.DEX]: "/images/pokeball.png",
  // [WINDOWS.SWEEPER]: "/images/pixel-bomb.png",
  [WINDOWS.HOME]: "/images/gogg_0.png",
  [WINDOWS.DISCORD]: "/images/block-discord.png",
  // [WINDOWS.RAID]: "/images/block-quest.png"
}

const defaultHidden = Object.values(WINDOWS).reduce((acc: {[key:string]: boolean}, curr) => {
  acc[curr] = false
  return acc
}, {})

export default function WindowsProvider({ children }: { children: ReactNode }) {
  const orderState = useState(Object.values(WINDOWS))
  const minimizedState = useState(defaultHidden)

  return (
    <WindowsContext.Provider
      value={{
        orderState,
        minimizedState,
      }}
    >
      {children}
    </WindowsContext.Provider>
  )
}