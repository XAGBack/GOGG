import { ICONS, useWindowsContext, WINDOWS } from "../context/WindowsProvider";
import { FC } from "react";

const Icons: FC = () => {
  const { orderState, minimizedState } = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState
  return (
    <div className="flex flex-col gap-5 relative top-10 left-10">
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
        return (
          <div
            key={windowKey}
            className="custom-cursor select-none text-white flex flex-col items-center w-fit"
            onDoubleClick={handleClick}
          >
            <img src={ICONS[windowKey]} alt={`${windowKey} Icon`} className="w-14" />
            {windowKey}
          </div>
        )
      })}
    </div>
  )
}

export default Icons