import { Header, Button, TechContainer } from "@/components/index";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiAxios, SiJquery, SiExpo, SiNodedotjs, SiExpress, SiSequelize, SiAntdesign  } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaGitAlt  } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-screen h-screen background">
      <Header />
      <main>
        <section className="section">
          <h3 className="text-2xl font-extrabold sectionTitle">
            Seja bem vindo
          </h3>
          <p>
            Esse é meu portfólio, nele você encontrará alguns dados meus e
            projetos que já realizei. Sinta-se a vontade para realizar qualquer
            questionamento através da página de contato.
          </p>
          <Button className="mt-4">Entrar em contato</Button>
        </section>
        <section className="section primaryContainer">
          <h3 className="text-2xl font-extrabold sectionTitle text-right">
            Sobre mim
          </h3>
          <p className="text-right">
            Sou desenvolvedor de software à 2 anos, atuo como full stack mas
            centralizo maior parte dos meus estudos na stack de Front-End. Antes
            de me tornar desenvolvedor, trabalhei por 8 anos na área de
            marketing digital como líder de projetos e coordenador do setor,
            experiência no qual me deu muita visão de negócio, cautela e senso
            crítico.
          </p>
        </section>
        <section className="section">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Tecnologias que poderá encontrar em meus projetos
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex gap-4 items-center justify-center w-full">
              <TechContainer>
                <FaReact className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiNextdotjs className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <BiLogoTypescript className="text-3xl" />
              </TechContainer>
            </div>

            <div className="flex gap-4 items-center justify-center w-full">
              <TechContainer>
                <SiTailwindcss className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiAxios className="text-3xl" />
              </TechContainer>
            </div>

            <div className="flex gap-4 items-center justify-center w-full">
              <TechContainer>
                <SiJquery className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiExpo className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiNodedotjs className="text-3xl" />
              </TechContainer>
            </div>

            <div className="flex gap-4 items-center justify-center w-full">
              <TechContainer>
                <SiExpress className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiSequelize className="text-3xl" />
              </TechContainer>
            </div>

            <div className="flex gap-4 items-center justify-center w-full">
              <TechContainer>
                <FaDatabase className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <FaGitAlt className="text-3xl" />
              </TechContainer>
              <TechContainer>
                <SiAntdesign className="text-3xl" />
              </TechContainer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
