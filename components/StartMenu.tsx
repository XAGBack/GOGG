import { useWindowsContext, WINDOWS } from "@/context/WindowsProvider";
import { FC } from "react";
import { Menu } from '@headlessui/react'
import Button from "./Button";
import clsx from "clsx";

const StartMenu: FC = () => {
  const { orderState, minimizedState } = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button as={Button}
            className={clsx("px-3 py-1 flex gap-2 items-center", { active: open })}
          >
            <img src="/images/gogg-icon.jpeg" alt="gameover GG icon" className="w-5"/>
            <p className="-mb-0.5">Start</p>
          </Menu.Button>
        
          <Menu.Items className="absolute bottom-[100%] left-0 z-10 bg-windowsGray classic-border p-1 flex">
            <div className="bg-windowsDarkGray w-8 h-full min-h-[10rem] flex items-end">
              <p className="text-windowsGray w-8 pl-3 -rotate-90 ">GameoverGG</p>
            </div>
            <div>
              {Object.values(WINDOWS).map(windowKey => {
                const handleClick = () => {
                  const newOrder = [...orderList]
                  const orderIndex = orderList.findIndex(item => item === windowKey);

                  setMinimizedMap(prev => ({
                    ...prev,
                    [windowKey]: false
                  }))

                  newOrder.splice(orderIndex, 1)
                  newOrder.push(windowKey)
                  setOrderList(newOrder)
                }
                const label = windowKey
                return (
                  <Menu.Item
                    key={windowKey}
                  >
                    <div
                      className="px-2 py-1 w-28 select-none hover:bg-windowsHeader hover:text-white"
                      onClick={handleClick}
                    >
                      <span className="underline">{label[0]}</span>{label.slice(1)}
                    </div>
                  </Menu.Item>
                )
              })}
              <Menu>
                {({ open }) => (
                  <div className="relative">
                    <Menu.Button 
                      className={clsx("px-2 py-1 w-full custom-cursor text-left select-none hover:bg-windowsHeader hover:text-white", { active: open })}
                    >
                      <span className="underline">M</span>int
                    </Menu.Button>
                    <Menu.Items className="absolute left-[104%] bottom-0 z-10 bg-windowsGray classic-border p-1 flex">
                      <Menu.Item>
                        <div
                          className="px-2 py-1 w-[8rem] select-none hover:bg-windowsDarkGray hover:text-white cursor-not-allowed"

                        >
                          c̵̝̱͇̍͗͗͝ǫ̶͍̜̲̐ṃ̷̡̠̄̄̈̚̕͘͜i̸̼͔̻̖̘̽͂̇̀̃n̸̖̲̱͕̹̹͗͌͊̓g̶͙̫̜͚̑̅̂́ ̴̡̭̜̹̐̄̈́̕̕͠ͅs̷͙͔̞̺̍̌̈́́̌o̴̭̗͚̥̪͛͑̔͜o̴̡̟̞͂̿̒͋͜ņ̸̧̺̬̻̈́̐̓͗̀̚
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </div>
                )}
              </Menu>
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default StartMenu