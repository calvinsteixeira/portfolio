import Image from "next/image";

export default function Home() {
  return (
    <main className="mainContainer pb-24">
      <div className="w-full max-w-full text-foreground pt-16">
        <div className="flex flex-col gap-6">
          <Image
            alt="Minha foto de perfil"
            src={"/profile.jpg"}
            width={110}
            height={110}
            style={{ borderRadius: "50%" }}
          />
          <h4 className="text-lg mb-14">
            Calvin.<span className="text-primary">Teixeira</span>
          </h4>
        </div>
        <div className="flex flex-col gap-4 mb-20">
          <h2 className="text-4xl font-bold">Desenvolvedor Front End.</h2>
          <p>
            Estou cursando Análise e Desenvolvimento de Sistemas. Atuo como
            desenvolvedor a pouco mais de 2 anos. Me considero uma pessoa auto
            didata, e no meu dia a dia como profissional prucuro sempre
            transmitir e absorver novos conhecimentos, além de estar sempre em
            busca de novos desafios.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Tecnologias</h2>
          <p>
            Algumas das principais tecnologias que eu utilizo ou já utilizei profissionalmente ou em projetos pessoais.
          </p>
        </div>
      </div>
    </main>
  );
}
