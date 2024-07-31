import {Logo} from "@/components/Logo";
import {Masthead} from "@/components/Masthead";
import {Countdown} from "@/components/Countdown";
import {Milk} from "@/components/Milk";


export default function Home() {
  return (
    <>
		<Masthead />
		<Logo />
		<Countdown />
		<Milk />
    </>
  );
}
