import {
  Header,
  Button,
  TecnologiesList,
  AnimatedWrapper,
  ContactForm,
  Footer,
} from "@/components/index";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen background">
      <Header />
      <main>
        <section className="section primaryText md:flex md:flex-row md:gap-10 items-center lg:h-screen">
          <div className="md:max-w-[60%]">
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "right", triggerOnce: true }}
            >
              <h3 className="text-2xl font-extrabold sectionTitle">
                Olá, <span className="md:hidden">👋</span>me chamo
                <span className="secondaryText"> Calvin</span>, sou
                desenvolvedor Full Stack com paixão por Front-End.
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "up", delay: 400, triggerOnce: true }}
            >
              <p>
                Atualmente tenho 2 anos de experiência e alguns projetos de
                estudo em andamento. Além disso, estudo Análise e
                Desenvolvimento de sistemas.
              </p>
            </AnimatedWrapper>
          </div>

          <AnimatedWrapper
            animationType="attentionSeeker"
            attentionSeekerProps={{
              delay: 200,
              className: "hidden md:flex",
              effect: "tada",
            }}
          >
            <span className="text-9xl">👋</span>
          </AnimatedWrapper>
        </section>
        <section className="section primaryContainer md:flex-row-reverse primaryContainerText flex flex-col">
          <div className="md:max-w-[60%]">
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "right", delay: 900, triggerOnce: true }}
            >
              <h3 className="text-2xl font-extrabold sectionTitle text-right">
                Sobre mim
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "up", delay: 900, triggerOnce: true }}
            >
              <div className="flex-grow flex justify-end">
                <p className="text-right">
                  Moro em Santa Maria/RS, sou apaixonado por aventuras de moto e
                  programação. Alguns destaques meus ficam com minhas
                  habilidades de comunicação, organização e liderança.
                </p>
              </div>
            </AnimatedWrapper>
          </div>

          <AnimatedWrapper
            animationType="fade"
            fadeProps={{ direction: "right", className: 'self-end',delay: 900, triggerOnce: true }}
          >
            <Image
              src="/assets/minha-foto.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-full self-end mt-8 shadow-lg  md:mr-16"
            />
          </AnimatedWrapper>
        </section>
        {/* <section className="section flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Minhas principais tecnologias.
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            <TecnologiesList />
          </div>
        </section> */}
        {/* <section className="section flex flex-col primaryContainer primaryContainerText justify-center items-center gap-3">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Projetos.
          </h3>
          <p>Seção em desenvolvimento</p>
        </section> */}
        {/* <section className="section flex flex-col  primaryText gap-3">
          <h3 className="text-2xl font-extrabold sectionTitle">Contato</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <strong>
                <label htmlFor="emailValue">Email:</label>
              </strong>
              <p id="emailValue">calvingsx@gmail.com</p>
            </div>
            <div className="mt-4 flex gap-3">
              <FaGithub className="text-2xl primaryText hover:secondaryText" />
              <FaLinkedin className="text-2xl primaryText hover:secondaryText" />
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
