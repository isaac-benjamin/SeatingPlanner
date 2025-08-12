import { Layer, Rect, Stage, } from "react-konva";
import { useEffect, useRef, useState } from "react";
import Konva from "konva";
import useMeasure from "react-use-measure";

type Dimensions ={
    height:number,
    width: number
}

export default function SeatingChartPanel(){

    const [divRef,bounds] = useMeasure()


    return(
        <div className="h-full" ref={divRef} >
            <Stage height={bounds.height}  width={bounds.width}>
                <Layer>
                    <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
            draggable
            />
                </Layer>
            </Stage>
        </div>
    );
}