import {
  Header,
  Button,
  TecnologiesList,
  AnimatedWrapper,
  ContactForm,
  Footer
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
              Hello World!
            </h3>
          </AnimatedWrapper>

          <AnimatedWrapper
            animationType="fade"
            fadeProps={{ direction: "up", delay: 400, triggerOnce: true }}
          >
            <p>
              Me chamo Calvin, sou desenvolvedor full stack com um olhar especial para o Front-End, atualmente tenho 2 anos de experiência CLT + projetos de estudo.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper
            animationType="fade"
            fadeProps={{ direction: "up", delay: 900, triggerOnce: true }}
          >
            <Button className="mt-4">Entrar em contato</Button>
          </AnimatedWrapper>
        </section>
        <section className="section primaryContainer primaryContainerText">
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
            <p className="text-right">
              Moro em Santa Maria/RS, sou apaixonado por aventuras de moto e escrever códigos. Alguns destaques meus ficam com minhas habilidades de comunicação, organização e liderança.
            </p>
          </AnimatedWrapper>
        </section>
        <section className="section flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold sectionTitle text-center">
            Minhas principais tecnologias.
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
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
        </section>
      </main>
      <Footer/>
    </div>
  );
}
