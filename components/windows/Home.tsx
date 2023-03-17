import useWindowSize from "@/hooks/useWindowSize"
import Image from "next/image"
import { WINDOWS } from "../../context/WindowsProvider"
import Window from "../Window"

const HomeWindow = () => {

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
          <h1 className="font-bold text-4xl mb-4 mt-3">Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>

    </Window>
  )
}

export default HomeWindow