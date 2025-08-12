import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./seatingChartPanel"), {
  ssr: false,
});

export default function NoSSRSeatingPanel() {
  return <NoSSR/>;
}