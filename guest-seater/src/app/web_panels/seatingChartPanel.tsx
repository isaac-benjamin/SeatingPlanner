import TablePanel from "./tablePanel";
import useMeasure from "react-use-measure";
// import RectReadOnly from "react-use-measure";


export default function SeatingChartPanel(){

    const [divRef,bounds] = useMeasure()
    // have a useState with a list of tables

    return(
        <div className="h-full " ref={divRef} >
            <TablePanel bounds={bounds}/>
        </div>
    );
}