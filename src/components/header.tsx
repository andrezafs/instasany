import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import UserIcon from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços Promocionais",
  "Sobre nós",
];
export function Header() {
  const activedStyle = "bg-green-actived text-opacity-100 rounded-full ";
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              // adicionado os links existentes com seu estilo
              // se o index for 0 (primeiro elemento) tera o estilo de activedStyle se não terá nada
              <Link
                key={index}
                href="#"
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100   transition-all ${
                  index === 0 ? activedStyle : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6 ">
          <button>
            <Image src={SearchIcon} alt="Icon Search" />
          </button>
          <button className="flex items-center gap-2">
            <Image src={UserIcon} alt="Icon User" />
            <span className="text-white font-medium">Fazer Login</span>
          </button>
        </div>
      </GridContainer>
    </header>
  );
}
