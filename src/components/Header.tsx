import Image from "next/future/image";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className="bg-gray-800 flex justify-center items-center gap-4 py-5">
      <Image src={igniteLogo} alt="ignite logo" height={32} />
      <strong className="text-2xl text-white">Ignite Feed</strong>
    </header>
  );
}
