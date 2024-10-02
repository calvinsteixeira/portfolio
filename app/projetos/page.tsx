//COMPONENETS
import * as Icons from '@/icons';
import * as Componenets from '@/components/index';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

//UTILS
import React from 'react';
import { Inconsolata } from 'next/font/google';
const inconsolata = Inconsolata({ subsets: ['latin'] });

type Props = {}; 

export default function page({}: Props) {
  return (
    <div>
      <main className="space-y-8 bg-gradient-to-b from-[#17181C] to-background px-6 lg:px-12 py-20">
        <div>
          <Button asChild variant={'link'} className="p-0">
            <Link href={'/'}>
              <Icons.FaArrowLeft size={18} className="text-foreground" />
            </Link>
          </Button>
        </div>
        <p className={`text-primary text-center text-lg ${inconsolata.className}`}>Conheça meus projetos</p>
        <div>
          <Componenets.Project
            name="Metro SPStatus"
            description="Esse projeto permite que o usuário consiga ver o status de funcionamento das principais linhas de metrô em São Paulo, além de checar se há restrições na utilização do metrô. Para a alimentação dos dados, hospedei uma API em node que extrai e trata as informações antes de estarem acessíveis no front end."
            tecnologies='React JS, Typescript, Tailwind, Tanstack Query, Node JS'
            deployUrl="https://metro-sp-status.vercel.app/"
            repositoryUrl="https://github.com/calvinsteixeira/metro-sp-status"
            imgPath={'https://res.cloudinary.com/dotdj32as/image/upload/v1725227089/chyfpe2zv0sk5ismwbz5.png'}
          />
        </div>
      </main>
    </div>
  );
}
