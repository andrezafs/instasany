import { GridContainer } from "./grid";
import Image from "next/image";
import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand2 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo curso focado em Instagram
          </h3>
          <h2 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave as suas habilidades
          </h2>
          <div className=" flex items-center justify-center gap-10">
            <button>
              <Image src={IconFile} alt="Icon File" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 py-5 bg-green-btn rounded-full text-green-primary text-medium">
              Começar Agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icon Hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand2}
            alt="Icon Hand 2"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mokup"
            className="relative -rotate-12 top-[1.1rem] left-[3.3rem]"
          />
          <Image
            src={IconMockup}
            alt="Mokup"
            className="relative rotate-12 top-[1.1rem] right-[3.3rem]"
          />
        </div>
      </GridContainer>
    </section>
  );
}
