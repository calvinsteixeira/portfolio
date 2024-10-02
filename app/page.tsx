//COMPONENETS
import Image from 'next/image';
import * as Icons from '@/icons';
import * as Componenets from '@/components/index';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

//UTILS
import React from 'react';
import { Inconsolata } from 'next/font/google';
const inconsolata = Inconsolata({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <main>
        <Componenets.BackToTop />
        {/* INTRO */}
        <section className="relative w-screen h-screen pt-12 flex items-center justify-center">
          <div className="absolute z-20 text-center text-white space-y-8 flex flex-col px-6 items-center">
            <div className="bg-foreground w-24 h-24 rounded-full relative border-2 border-primary">
              <div className="absolute z-10 w-24 h-24 rounded-full border-4 border-background "></div>
              <Icons.LuCode2 size={25} className="text-primary absolute z-10 bottom-0 right-0" />
              <Image
                src={'/profile.jpg'}
                alt="Imagem com elementos arredondados nos cantos em cores claras."
                objectFit="cover"
                fill
                className="z-0 absolute rounded-full"
              />
            </div>
            <div className="space-y-8 ">
              <div className="space-y-4">
                <p className={`text-sm ${inconsolata.className}`}>
                  Olá, meu nome é <span className="text-primary">Calvin Teixeira</span> e sou
                </p>
                <h2 className="font-bold text-4xl">Desenvolvedor Front End</h2>
              </div>
              <p className="text-sm text-secondary-foreground lg:max-w-[65rem]">
                Fiz uma transição de carreira, vindo da área de Marketing, onde atuei por 8 anos e aprendi muito sobre análise, liderança e comportamento de
                usuários de sistemas. Hoje, atuo como desenvolvedor de software há cerca de 3 anos e tenho como principal foco criar soluções que causem um
                impacto positivo na vida das pessoas.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Componenets.Tech techName="React" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/hncxuwrbq7nrzp7qklkx.svg" />
              <Componenets.Tech techName="Typescript" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679757/vlc8riyjffv551sdls1r.svg" />
              <Componenets.Tech techName="Next JS" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/xye80ihhspwbghxrocll.svg" />
              <Componenets.Tech techName="Node JS" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/s83iwv55v6mbyylwb9zl.svg" />
              <Componenets.Tech techName="GitHub" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/ipfxobd46eboijekysh5.svg" />
              <Componenets.Tech techName="GitLab" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/j305tlqj2vemq3l5ywpo.svg" />
            </div>
          </div>
          <Image
            src={'/Background_Intro.png'}
            alt="Imagem com elementos arredondados nos cantos em cores claras."
            objectFit="cover"
            fill
            className="z-0 w-full"
          />
        </section>
        {/* EXPERIÊNCIAS */}
        <section className="w-full bg-gradient-to-b from-[#17181C] to-background pt-10">
          <div className="space-y-2 text-center">
            <p className={`text-primary text-lg ${inconsolata.className}`}>Minhas experiências</p>
            <h2 className={`font-semibold text-xl text-foreground ${inconsolata.className}`}>Cenários onde já atuei</h2>
          </div>
          <div className="flex flex-col gap-6 mt-10 lg:flex-row lg:gap-8 lg:justify-around lg:items-center lg:mt-14">
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.LuCode2 />}
                title="Web"
                description="Desenvolvimento de serviços dentro de um portal, mantendo regras de negócio complexas. Além disse também atuei integrando outros devs nos projetos e auxiliando nas melhores práticas de desenvolvimento."
              />
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.LuSmartphone />}
                title="Mobile"
                description="Atuei liderando e desenvolvendo aplicações mobile com React Native e Expo, decidindo tencologias e criando abstrações para facilitar o desenvolvimento do restante do time"
              />
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.LuHardDrive />}
                title="Back end"
                description="Desenvolvimento de rest api em node js e manutenções rotineiras em sistemas robustos utilizando Lua"
              />
            </motion.div>
          </div>
          <div className="mt-16 flex flex-col gap-8 sm:max-w-[60%] xl:max-w-[40%]">
            <div className="space-y-2">
              <p className={`text-primary text-lg ${inconsolata.className}`}>Projetos</p>
              <h2 className={`font-semibold text-foreground ${inconsolata.className}`}>
                Sempre que tenho tempo disponível estou aperfeiçoando e aprendendo coisas novas através dos meus projetos pessoais.
              </h2>
            </div>
            <Button asChild className="sm:max-w-[60%]">
              <Link href={'/projetos'}>Acessar projetos</Link>
            </Button>
          </div>
        </section>
        {/* PROJETOS */}
        <Componenets.Footer />
      </main>
    </div>
  );
}
