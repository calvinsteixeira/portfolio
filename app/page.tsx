//COMPONENETS
import Image from "next/image";
import * as Icons from "@/icons";
import * as Componenets from "@/components/index";

//UTILS
import { Inconsolata } from 'next/font/google'
const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
        {/* INTRO */}
        <section className="relative w-full h-screen bg-primary overflow-hidden flex justify-center">
          <div className="text-center z-10 text-white space-y-8 flex flex-col items-center">
            <div className="bg-foreground w-24 h-24 rounded-full relative border-2 border-primary">
              <div className="absolute z-10 w-24 h-24 rounded-full border-4 border-background "></div>
              <Icons.CodeXml
                size={25}
                className="text-primary absolute z-10 bottom-0 right-0"
              />
              <Image
                src={"/profile.jpg"}
                alt="Imagem com elementos arredondados nos cantos em cores claras."
                objectFit="cover"
                fill
                className="z-0 absolute rounded-full"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className={`text-sm ${inconsolata.className}`}>
                  Olá, meu nome é{" "}
                  <span className="text-primary">Calvin Teixeira</span> e sou
                </p>
                <h2 className="font-bold text-4xl">Desenvolvedor Front End</h2>
              </div>
              <p className="text-sm text-primary-foreground">
                Transformo necessidades em aplicações práticas e evolutivas,
                usando minha paixão pela tecnologia para desenvolver sistemas
                que oferecem soluções inovadoras e eficazes, melhorando a vida
                das pessoas que as utilizam.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Componenets.Tech
                techName="React"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/hncxuwrbq7nrzp7qklkx.svg"
              />
              <Componenets.Tech
                techName="Typescript"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679757/vlc8riyjffv551sdls1r.svg"
              />             
              <Componenets.Tech
                techName="Next JS"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/xye80ihhspwbghxrocll.svg"
              />
              <Componenets.Tech
                techName="Node JS"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/s83iwv55v6mbyylwb9zl.svg"
              />
              <Componenets.Tech
                techName="GitHub"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/ipfxobd46eboijekysh5.svg"
              />
              <Componenets.Tech
                techName="GitLab"
                iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/j305tlqj2vemq3l5ywpo.svg"
              />
            </div>
          </div>
          <Image
            src={"/Background_Intro.png"}
            alt="Imagem com elementos arredondados nos cantos em cores claras."
            objectFit="cover"
            fill
            className="z-0"
          />
        </section>
        {/* <section></section>
        <section></section>
        <section></section> */}
      </main>
    </div>
  );
}