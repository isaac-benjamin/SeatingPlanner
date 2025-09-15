import { useState } from "react";
import { Rnd } from "react-rnd";
import { RectReadOnly } from "react-use-measure";

interface tableProps{
    parent:Element
    bound:RectReadOnly
    circle?:boolean
}

type Dimensions={
    height:number;
    width:number;
}

export default function Table({parent, bound, circle}:tableProps){

    const baseHeight = bound.height/7
    const baseWidth = bound.width/5

    const [dimensions, setDimensions] = useState<Dimensions>({ width: baseWidth, height: baseHeight});


    function styles():string {
        let className ="bg-blue-300 border-2 border-black"
        if(circle){
            className += " rounded-full"
        }
        return className
    }

    return(
        //set bounds + on drag & resize 
        <Rnd bounds={parent} lockAspectRatio={circle} size={dimensions}>
            <div className={styles()}>

            </div>
        </Rnd>
    )

}