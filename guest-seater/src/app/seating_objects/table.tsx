import { useState } from "react";
import { Rnd } from "react-rnd";
import { RectReadOnly } from "react-use-measure";
import Chair from "./Chair";

interface tableProps{
    bound:RectReadOnly
    circle?:boolean
}

type Dimensions={
    height:number | string;
    width:number | string;
}

type Position={
    x:number;
    y:number;
}

export default function Table({bound, circle}:tableProps){

    const baseHeight = 50;
    const baseWidth = 50;

    const [dimensions, setDimensions] = useState<Dimensions>({ width: baseWidth, height: baseHeight});
    const [position, setPosition] = useState<Position>()

    function styles():string {
        let className ="bg-blue-300 border-2 border-black h-full"
        if(circle){
            className += " rounded-full"
        }
        return className
    }

    return(
        //set bounds + on drag & resize 
        <Rnd bounds="parent" lockAspectRatio={circle} size={dimensions}
            onDragStop={(event,data)=>{ setPosition({x:data.x, y:data.y}) }}
            onResizeStop={(e, direction, ref)=>{setDimensions({height: ref.style.height, width: ref.style.width})}}
            cancel="Chair">
            <div className={styles()}>
                {/* 
                    Make chairs not interactable
                    Arrange them evenly throughout table
                        Figure out how to modularly make 
                 */}
                 <Chair/>
            </div>
        </Rnd>
    )

}