import { useState, useEffect, MouseEventHandler } from "react";

export function useDrag(initialPositionX: number, initialPositionY: number): [number, number, MouseEventHandler] {
    let [isDragging, setIsDragging] = useState(false);
    let [[positionX, positionY], setPosition] = useState<[number, number]>([initialPositionX, initialPositionY]);
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }
    })
    return [positionX, positionY, onDraggedObjectMouseDown];
    function onMouseMove(event: MouseEvent): void {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        let newPositionX = Math.max(Math.min(event.pageX, vw - 200), 20);
        let newPositionY = Math.max(Math.min(event.pageY, vh - 200), 20);
        setPosition([
            newPositionX,
            newPositionY
        ])
    }

    function onMouseUp(event: MouseEvent): void {
        setIsDragging(false);
    }

    function onDraggedObjectMouseDown(event: any): void {
        setIsDragging(true);
    }
}