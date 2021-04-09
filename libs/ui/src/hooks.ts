import { useState, useEffect, MouseEventHandler } from "react";

export function useDrag(initialPositionX: number, initialPositionY: number): [number, number, MouseEventHandler] {
    let [isDragging, setIsDragging] = useState(false);
    let [[positionX, positionY], setPosition] = useState<[number, number]>([initialPositionX, initialPositionY]);
    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }
    })
    return [positionX, positionY, onDraggedObjectMouseDown];
    function onMouseMove(event: MouseEvent): void {
        if (isDragging) {
            let pageX = event.pageX;
            let pageY = event.pageY;
            setPosition([
                pageX,
                pageY
            ])
        }
    }

    function onMouseUp(event: MouseEvent): void {
        setIsDragging(false);
    }

    function onDraggedObjectMouseDown(event: any): void {
        setIsDragging(true);
    }
}