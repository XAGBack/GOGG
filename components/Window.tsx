import useDragResize, { Position, Size } from "../hooks/useDragResize";
import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";
import { ICONS, useWindowsContext } from "../context/WindowsProvider";
import Button from "./Button";
import { Corner } from "../svg/corner";
import { Close } from "../svg/close";
import { Minimize } from "../svg/minimize";
import { Maximize } from "../svg/maximize";
import useWindowSize from "@/hooks/useWindowSize";
interface WindowProps {
  children: ReactNode;
  initPosition?: Position;
  initSize?: Size
  windowKey: string;
}
const Window: FC<WindowProps> = ({ children, initPosition, windowKey, initSize }) => {
  const { dragRef, position, isDragging, resizeRef, containerRef, size, handleMaximize, isMax } = useDragResize(initPosition, initSize, windowKey)
  const {orderState, minimizedState} = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState

  const { isMdScreen } = useWindowSize()
  
  const [isHidden, setIsHidden] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  const offsetHeight = menuRef.current && dragRef.current && resizeRef.current
    ? menuRef.current.offsetHeight + dragRef.current.offsetHeight + resizeRef.current.offsetHeight
    : 78 // estimate
  
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
        "absolute flex flex-col",
        "bg-windowsGray classic-border",
        "select-none",
        isMin ? "animate-exit" : "animate-enter"
      )}
    >
      <div
        className={clsx(
          "p-1 cursor-grab active:cursor-grabbing flex justify-between items-center",
          orderIndex === orderList.length-1 ? "bg-windowsHeader " : "bg-windowsDarkGray"
        )}
        ref={dragRef}
      >
        <div className="flex items-center gap-2">
          <img src={ICONS[windowKey]} alt="" className="w-5" />
          <p className="text-white leading-none">{windowKey}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button className="w-5 h-5 flex justify-center items-center"
            onClick={handleMinimize}
          >
            <Minimize size={16} />
          </Button>
          <Button className="w-5 h-5 flex justify-center items-center"
            onClick={handleMaximize}
            disabled={isMdScreen}
          >
            <Maximize size={16} />
          </Button>
          
          <Button className="w-5 h-5 flex justify-center items-center"
            onClick={handleMinimize}
          >
            <Close size={16} />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 px-1" ref={menuRef}>
        <p><span className="underline">V</span>iew</p>
        <p><span className="underline">E</span>dit</p>
        <p><span className="underline">H</span>elp</p>
      </div>

      <div className="classic-inset bg-white relative" style={{height: `calc(100% - ${offsetHeight}px)`}}>
        <div className="overflow-auto h-full">
          {children}
        </div>
      </div>

      <div className="flex gap-1 items-end">
        <div className="w-1/2 h-4 classic-button active"></div>
        <div className="w-1/2 h-4 classic-button active"></div>
        <div
          className="h-full py-0.5"
          ref={resizeRef}
        >
          <Corner size={14} className="text-windowsDarkGray classic-corner relative -bottom-0.5 cursor-grab active:cursor-grabbing"/>
        </div>
      </div>
    </div>
  )
}

export default Window