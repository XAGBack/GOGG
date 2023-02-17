import useDragResize, { Position, Size } from "../hooks/useDragResize";
import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useWindowsContext } from "@/context/WindowsProvider";
import Button from "./Button";
import { Corner } from "../svg/corner";
import { Close } from "../svg/close";
import { Minimize } from "../svg/minimize";
import { Maximize } from "../svg/maximize";
interface WindowProps {
  children: ReactNode;
  initPosition?: Position;
  initSize?: Size
  windowKey: string;
}
const Window: FC<WindowProps> = ({ children, initPosition, windowKey, initSize }) => {
  const { dragRef, position, isDragging, resizeRef, containerRef, size, handleMaximize } = useDragResize(initPosition, initSize)
  const {orderState, minimizedState} = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState
  
  const [isHidden, setIsHidden] = useState(false)
  
  const isMin = minimizedMap[windowKey]
  const orderIndex = orderList.findIndex(item => item === windowKey);

  const changeOrder = () => {
    const newOrder = [...orderList]
    newOrder.splice(orderIndex, 1)
    newOrder.push(windowKey)
    setOrderList(newOrder)
  }

  const handleMinimize: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setMinimizedMap(prev => ({
      ...prev,
      [windowKey]: true
    }))
  }

  useEffect(() => {
    let id: NodeJS.Timeout
    if (isMin) id = setTimeout(() => setIsHidden(true), 400) //needs to be longer that the transition duration so it's only hidden after animating
    else setIsHidden(false)

    return () => clearTimeout(id)
  }, [isMin])

  return (
    <div
      hidden={isHidden}
      ref={containerRef}
      style={{
        width: size.w,
        height: size.h,
        top: position.y,
        left: position.x,
        zIndex: orderIndex + 5
      }}
      onMouseDown={changeOrder}
      className={clsx(
        "absolute",
        "bg-gray-200",
        "select-none",
        isDragging ? "shadow-lg" : "shadow",
        isMin ? "animate-exit" : "animate-enter"
      )}
    >
      <div
        className="window-handle bg-gray-300 cursor-grab active:cursor-grabbing flex justify-between"
        ref={dragRef}
      >
        handle
        <div className="flex items-center gap-1">
          <Button className="w-6 h-6 flex justify-center items-center"
            onClick={handleMinimize}
          >
            <Minimize size={20} />
          </Button>
          <Button className="w-6 h-6 flex justify-center items-center"
            onClick={handleMaximize}
          >
            <Maximize size={20} />
          </Button>
          
          <Button className="w-6 h-6 flex justify-center items-center"
            onClick={handleMinimize}
          >
            <Close size={20} />
          </Button>
        </div>
      </div>
      {children}

      <div
        className="absolute bottom-0 right-0 cursor-nwse-resize"
        ref={resizeRef}
      >
        <Corner size={14} />
      </div>
      </div>
    // </Transition>
  )
}

export default Window