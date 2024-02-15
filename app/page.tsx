import {
  Header,
  Button,
  TecnologiesList,
  AnimatedWrapper,
} from "@/components/index";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-screen h-screen background">
      <Header />
      <main>
        <section className="section primaryText">
          <AnimatedWrapper
            animationType="fade"
            fadeProps={{ direction: "right", triggerOnce: true }}
          >
            <h3 className="text-2xl font-extrabold sectionTitle">
              Seja bem vindo
            </h3>
          </AnimatedWrapper>

          <AnimatedWrapper animationType="fade" fadeProps={{ direction: "up", delay: 400, triggerOnce: true }}>
            <p>
              Esse é meu portfólio, nele você encontrará alguns dados meus e
              projetos que já realizei. Sinta-se a vontade para realizar
              qualquer questionamento através da página de contato.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper animationType="fade" fadeProps={{ direction: "up", delay: 900, triggerOnce: true }}>
            <Button className="mt-4">Entrar em contato</Button>
          </AnimatedWrapper>
        </section>
        <section className="section primaryContainer primaryContainerText">
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
            Minhas principais tecnologias.
          </h3>
          <div className="flex flex-col gap-2">
            <TecnologiesList />
          </div>
        </section>
        <section className="section flex flex-col primaryContainer primaryContainerText justify-center items-center gap-3">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Projetos.
          </h3>
          <p>Seção em desenvolvimento</p>
        </section>
        <section className="section flex flex-col  primaryText gap-3">
          <h3 className="text-2xl font-extrabold sectionTitle">
            Contato
          </h3>
          <div className='flex flex-col gap-2'>
            <div className='flex' >
              <strong><label htmlFor="emailValue">Email: </label></strong>
              <p id='emailValue'>calvingsx@gmail.com</p>
            </div>
            <div className='mt-4 flex gap-3'>
              <FaGithub className='text-2xl primaryText hover:secondaryText'/>
              <FaLinkedin className='text-2xl primaryText hover:secondaryText'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
