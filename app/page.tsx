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
        <section className="section primaryText md:flex md:flex-row md:gap-10 lg:gap-32 items-center lg:h-screen">
          <div className="md:max-w-[60%]">
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "right", triggerOnce: true }}
            >
              <h3 className="text-2xl lg:text-4xl xl:text-6xl xl:leading-tight lg:leading-snug  font-extrabold sectionTitle">
                Olá, <span className="md:hidden">👋</span>me chamo
                <span className="secondaryText"> Calvin.</span> Sou
                desenvolvedor Full Stack com paixão por Front-End.
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "up", delay: 400, triggerOnce: true }}
            >
              <p className='xl:text-3xl xl:leading-snug'>
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
              triggerOnce: true
            }}
          >
            <span className="text-9xl xl:text-[15rem]">👋</span>
          </AnimatedWrapper>
        </section>
        <section className="section primaryContainer md:flex-row-reverse primaryContainerText flex flex-col items-center">
          <div className="md:max-w-[60%] 2xl:max-w-[40%]">
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "right", delay: 900, triggerOnce: true }}
            >
              <h3 className="font-extrabold sectionTitle text-right">
                Sobre mim
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper
              animationType="fade"
              fadeProps={{ direction: "up", delay: 900, triggerOnce: true }}
            >
              <div className="flex-grow flex justify-end">
                <p className="text-right xl:text-2xl 2xl:text-3xl 2xl:leading-normal">
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
              width={200}
              height={200}              
              alt="minha foto de óculos e cabelo comprido"
              className="rounded-full self-end mt-8 shadow-lg  md:mr-16 lg:mr-36 2xl:mr-80"
            />
          </AnimatedWrapper>
        </section>
        <section className="section flex flex-col justify-center">
          <h3 className="sectionTitle lg:mb-8 font-extrabold sectionTitle text-center 2xl:mb-14">
            Minhas principais tecnologias.
          </h3>
          <div className="flex flex-wrap justify-center gap-2 2xl:gap-6">
            <TecnologiesList />
          </div>
        </section>
        <section className="section flex flex-col primaryContainer primaryContainerText justify-center items-center gap-3">
          <h3 className="font-extrabold sectionTitle text-center">
            Projetos.
          </h3>
          <p className='xl:text-2xl 2xl:text-3xl'>Seção em desenvolvimento</p>
        </section>
        <section className="section flex flex-col  primaryText gap-3">
          <h3 className="font-extrabold sectionTitle">Contato</h3>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
