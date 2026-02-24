import { inherits } from "util"

export interface Guest{
    id: number
    name: string
}

export abstract class Table{
    id:number
    width:number
    chairCount:number
    // boolean array - when an index = 0 _ do not render that chair
    chairArray: boolean[] =[]
    guests : Guest[] =[]

    constructor(id: number, width:number, chairCount:number = 0 ){
        this.id=id;
        this.width=width;
        this.chairCount=chairCount;
        for (let i = 0; i < chairCount; i++) {
            this.chairArray.push(true);
        }
    }

    setWidth(width:number){
        if(width >0){
            this.width= width;
        }
    }

    setChairCount(count:number){
        this.chairCount=count;
    }

    toggleChairVis(index:number){
        this.chairArray[index] = !this.chairArray[index];
    }

}

class CircleTable extends Table{
    static defaultRatio = .17;
}