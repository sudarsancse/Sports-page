import {Inter} from "next/font/google";
import Toggle from "../Components/Toggle";
import Sports from "../Components/Sports";
import Sportlight from "../Components/Sportlight";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <div className=" dark:bg-dark h-full px-8 py-8 bg-slate-300">
      <div className=" flex justify-between gap-4 pb-4 items-center">
        <h1 className=" dark:text-white p-2">Sports</h1>
        <Toggle />
      </div>
      <Sports />
      <Sportlight />
    </div>
  );
}
