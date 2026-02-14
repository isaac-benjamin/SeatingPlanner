'use client' 

import { Allotment} from "allotment";
import "allotment/dist/style.css";

import ControlPanel from "./web_panels/controlPanel";
import GuestPanel from "./web_panels/guestPanel";
import NoSSRSeatingPanel from "./web_panels/NoSsrSeatingPanel";


export default function Home() {
  return (
    <div className="h-full flex flex-col">

      <ControlPanel/>
      <Allotment defaultSizes={[17,83]} className="flex-grow">
        <GuestPanel/>
        <NoSSRSeatingPanel/>
      </Allotment>
    </div>
  );
} 
