import { useWindowsContext } from "@/context/WindowsProvider";
import clsx from "clsx";
import { FC } from "react";
import Button from "./Button";

const Footer: FC = () => {
  const { orderState, minimizedState } = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState

  const sorted = [...orderList].sort()
  return (
    <div className="flex justify-between w-full bg-gray-300 p-1">
      <div className="flex gap-2">
        <Button className="px-2">Start</Button>
        <div className="border h-full" />

        {sorted.map(windowKey => {
          const orderIndex = orderList.findIndex(item => item === windowKey);
          const active = orderIndex === orderList.length-1 && !minimizedMap[windowKey];

          const handleClick = () => {
            const newOrder = [...orderList]

            if (active) {
              setMinimizedMap(prev => ({
                ...prev,
                [windowKey]: true
              }))
              newOrder.splice(orderIndex, 1)
              newOrder.unshift(windowKey)
            } else {
              setMinimizedMap(prev => ({
                ...prev,
                [windowKey]: false
              }))
              newOrder.splice(orderIndex, 1)
              newOrder.push(windowKey)
            }
            setOrderList(newOrder)
          }
          return (
            <Button
              key={windowKey}
              className={clsx("px-2", { active })}
              onClick={handleClick}
            >
              {windowKey}
            </Button>
          )
        })}
  
      </div>
    </div>
  )
}

export default Footer