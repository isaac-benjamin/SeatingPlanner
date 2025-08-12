'use client' 

import { Allotment} from "allotment";
import "allotment/dist/style.css";

import ControlPanel from "./controlPanel";
import GuestPanel from "./guestPanel";
import NoSSRSeatingPanel from "./NoSsrSeatingPanel";
import { createRef } from "react";


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
