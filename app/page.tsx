import { Header, Button, TechContainer } from "@/components/index";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAxios,
  SiJquery,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiAntdesign,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaGitAlt, FaExternalLinkAlt } from "react-icons/fa";

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
        <section className="section flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Algumas das tecnologias que já utilizei.
          </h3>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <TechContainer>
              <div className="w-full flex gap-3 items-center justify-between">
                <div className='flex gap-3 items-center'>
                  <FaReact className="text-3xl" />
                  <p className="text-sm">React/React Native</p>
                </div>
                <FaExternalLinkAlt className='primaryText text-sm'/>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiNextdotjs className="text-3xl" />
                <p className="text-sm">Next JS</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <BiLogoTypescript className="text-3xl" />
                <p className="text-sm">Typescript</p>
              </div>
            </TechContainer>

            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiTailwindcss className="text-3xl" />
                <p className="text-sm">Tailwind</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiAxios className="text-3xl" />
                <p className="text-sm">Axios</p>
              </div>
            </TechContainer>

            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiJquery className="text-3xl" />
                <p className="text-sm">Jquery</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiExpo className="text-3xl" />
                <p className="text-sm">Expo</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiNodedotjs className="text-3xl" />
                <p className="text-sm">Node JS</p>
              </div>
            </TechContainer>

            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiExpress className="text-3xl" />
                <p className="text-sm">Express JS</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiSequelize className="text-3xl" />
                <p className="text-sm">Sequelize</p>
              </div>
            </TechContainer>

            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <FaDatabase className="text-3xl" />
                <p className="text-sm">SQL</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <FaGitAlt className="text-3xl" />
                <p className="text-sm">Git</p>
              </div>
            </TechContainer>
            <TechContainer>
              <div className="flex gap-3 items-center justify-center">
                <SiAntdesign className="text-3xl" />
                <p className="text-sm">Ant Desing</p>
              </div>
            </TechContainer>
          </div>
        </section>
      </main>
    </div>
  );
}
