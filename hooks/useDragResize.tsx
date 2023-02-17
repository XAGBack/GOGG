import { useEffect, useRef, useState } from "react";

export interface Position {
  x: number;
  y: number
} 

const defaultPosition: Position = {
  x: 0,
  y: 0
}

export interface Size {
  w: number;
  h: number;
}
const defaultSize: Size = {
  w: 500,
  h: 300
}
export default function useDragResize(initPosition = defaultPosition, initSize = defaultSize) {
  const [position, setPosition] = useState<Position>(initPosition);
  const [size, setSize] = useState(initSize)
  const [isDragging, setIsDragging] = useState(false)
  

  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragRef = useRef<HTMLDivElement | null>(null)
  const resizeRef = useRef<HTMLDivElement | null>(null)
  const initPositionRef = useRef<Position>(initPosition);
  const mousedownPosition = useRef<Position>(initPosition)
  const isMax = useRef(false)

  //---------------DRAG LOGIC---------------

  const checkDragBounds = (position: Position) => {
    const screen = document.getElementById("window-container")
    if (!containerRef?.current || !screen) return position
   
    if (position.x < 0) position.x = 0;
    if (position.y < 0) position.y = 0;
    if (position.x + containerRef.current.offsetWidth > screen.offsetWidth) position.x = screen.offsetWidth - containerRef.current.offsetWidth;
    if (position.y + containerRef.current.offsetHeight > screen.offsetHeight) position.y = screen.offsetHeight- containerRef.current.offsetHeight
    return position
  }

  const getDragXY = (e: MouseEvent) => {
    const dx = (e.clientX - mousedownPosition.current.x)
    const dy = (e.clientY - mousedownPosition.current.y)
    let x = initPositionRef.current.x + dx
    let y = initPositionRef.current.y + dy
    return checkDragBounds({ x, y })
  }

  const onDragMouseDown = (e: MouseEvent) => {
    if(isMax.current) return
    setIsDragging(true)
    const pos = {
      x: e.clientX,
      y: e.clientY
    }
    mousedownPosition.current = pos
    window.addEventListener('mousemove', onDragMouseMove);
    window.addEventListener('mouseup', onDragMouseUp);
  }

  const onDragMouseMove = (e: MouseEvent) => {
    const pos = getDragXY(e)
    setPosition(pos)
  }

  const onDragMouseUp = (e: MouseEvent) => {
    window.removeEventListener('mousemove', onDragMouseMove);
    window.removeEventListener('mouseup', onDragMouseUp);
    setIsDragging(false)
    const pos = getDragXY(e)
    initPositionRef.current = pos
  }

  useEffect(() => {
    dragRef.current?.addEventListener("mousedown", onDragMouseDown)
    return () => dragRef.current?.removeEventListener("mousedown", onDragMouseDown)
  }, [dragRef])



  //---------------RESIZE LOGIC---------------

  const checkResizeBounds = (size: Size) => {
    const screen = document.getElementById("window-container")
    if (!containerRef?.current || !screen) return size

    const minW = 200
    const minH = 200
    if (size.w < minW) size.w = minW;
    if (size.h < minH) size.h = minH;
    if (size.w + initPositionRef.current.x > screen.offsetWidth) size.w = screen.offsetWidth - initPositionRef.current.x
    if (size.h + initPositionRef.current.y > screen.offsetHeight) size.h = screen.offsetHeight - initPositionRef.current.y
    return size
  }

  const getResizeDimensions = (e: MouseEvent) => {
    const w = e.clientX - initPositionRef.current.x + 10;
    const h = e.clientY - initPositionRef.current.y + 10;
    return checkResizeBounds({w,h})
  }
  const onResizeMouseDown = () => {
    if (isMax.current) return
    window.addEventListener('mousemove', onResizeMouseMove);
    window.addEventListener('mouseup', onResizeMouseUp);
  }

  const onResizeMouseMove = (e: MouseEvent) => {
    const size = getResizeDimensions(e)
    setSize(size)
  }

  const onResizeMouseUp = () => {
    window.removeEventListener('mousemove', onResizeMouseMove);
    window.removeEventListener('mouseup', onResizeMouseUp);
  }

  useEffect(() => {
    resizeRef.current?.addEventListener("mousedown", onResizeMouseDown)
    return () => resizeRef.current?.removeEventListener("mousedown", onResizeMouseDown)
  }, [resizeRef])

  const handleMaximize = () => {
    if (isMax.current) {
      isMax.current = false
      setPosition({
        x: initPositionRef.current.x,
        y: initPositionRef.current.y
      })
    } else {
      isMax.current = true
      setPosition({
        x: 0,
        y: 0
      })
    }
  }

  const currentSize = isMax.current
    ? {
      w: "100%",
      h: "100%"
    }
    : size
  
  return { dragRef, position, isDragging, resizeRef, containerRef, size: currentSize, handleMaximize}
}