import Image from "next/image";
import { TechContainer } from "@/components/index";
import {
  FaReact,
  RiNextjsLine,
  SiExpo,
  FaNodeJs,
  DiJqueryLogo,
  TbBrandTypescript,
} from "@/icons";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="mainContainer pb-24">
      <div className="w-full max-w-full text-foreground pt-16">
        <div className="flex flex-col items-center mb-14">
          <Image
            alt="Minha foto de perfil"
            src={"/profile.jpg"}
            width={110}
            height={110}
            style={{ borderRadius: "50%", marginBottom: 15 }}
          />
          <h4 className="text-2xl font-bold">Olá, me chamo</h4>
          <h4 className="text-primary text-2xl font-bold">Calvin Teixeira</h4>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Desenvolvedor Front End.</h2>
          <p>
            Estou cursando Análise e Desenvolvimento de Sistemas. Atuo como
            desenvolvedor a pouco mais de 2 anos. Me considero uma pessoa auto
            didata, e no meu dia a dia como profissional prucuro sempre
            transmitir e absorver novos conhecimentos, além de estar sempre em
            busca de novos desafios.
          </p>
        </div>
        <hr className="mt-10 mb-10 opacity-30" />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Tecnologias</h2>
          <p>
            Algumas das principais tecnologias que eu utilizo ou já utilizei
            profissionalmente ou em projetos pessoais.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <TechContainer
              techTitle="React/React Native"
              icon={<FaReact size={26} />}
              description="Utilização do JSX, gestão de componentes utilizando props, context api ou ferramentas de gerenciamento de estados como o Zustand. Lyfecicle component, chamadas assíncronas, Hooks, composition pattern, bibliotecas de componentes como Shadcn, Ant Design e Material UI."
            />
            <TechContainer
              techTitle="Next JS"
              icon={<RiNextjsLine size={26} />}
              description="Renderização híbrida (SSR e SSG), file router, deploy na vercel, utilização em conjunto do Tailwindcss"
            />
            <TechContainer
              techTitle="Expo"
              icon={<SiExpo size={26} />}
              description="Expo cli, expo router, Expo SDK (notificações e componentes de hardware), EAS (deploy), async storage."
            />
            <TechContainer
              techTitle="Typescript"
              icon={<TbBrandTypescript size={26} />}
              description="Types assertions, generics, interfaces e tipos, integração com frameworks."
            />
            <TechContainer
              techTitle="Node JS"
              icon={<FaNodeJs size={26} />}
              description="Rest API com arquitetura MVC, utilização de JWT com refresh token, conexão com banco de dados mysql utilizando ORM Sequelize."
            />
            <TechContainer
              techTitle="Jquery"
              icon={<DiJqueryLogo size={26} />}
              description="Manipulação da DOM e utilização em conjunto de bibliotecas de componentes como o Dev Extreme."
            />
          </div>
        </div>
        <hr className="mt-10 mb-10 opacity-30" />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Projetos</h2>
          <p>
            Gosto de me manter sempre atualizado, e encontrei nos projetos pessoais uma forma de praticar e testar meus conhecimentos.
          </p>
          <Button className="mt-2 bg-primary text-[black]" variant="default">Acessar projetos</Button>
        </div>
      </div>
    </main>
  );
}
