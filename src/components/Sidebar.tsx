import Image from "next/future/image";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className="h-[72px] w-full object-cover"
      />
      <div className="flex flex-col items-center -mt-8">
        <Avatar hasBorder src="https://github.com/lindias.png" />
        <strong className="mt-4 text-gray-100 leading-relaxed">
          Lincoln Dias Marques
        </strong>
        <span className="text-sm leading-relaxed text-gray-400">
          Web Developer
        </span>
      </div>

      <footer className="border-t border-gray-600 mt-6 pt-6 px-8 pb-8">
        <a
          href="#"
          className="bg-transparent text-green-300 border border-green-300 rounded-lg px-6 h-12 font-bold flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white transition-colors"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
