import Link from "next/link";
import { ButtonLink } from "./components/atoms/ButtonLink";

export default function Home() {
  //TODO: Fiks footer. Style, få inn komponent i layout.js filen også.
  //TODO: Lag landingsside. Denne skal være en side som bare viser side. Og 
  //TODO: Lag ferdig alle undersidene til de forskjellige type rasene/typene av dyr (3 på hver dyreside). 
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        {/* //TODO: gjør om denne p taggen til Heading komponent. se hvordan dette ble gjort i huskatt page.js  */}
        <p className="text-red-400 text-9xl">LANDINGSSIDE!</p>
      </div>
    </>
  );
}
