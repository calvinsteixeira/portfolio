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
      <main className="space-y-8">
        <div>
          <Button asChild variant={'ghost'} className="p-0">
            <Link href={'/'}>
              <Icons.ArrowLeft className="text-foreground" />
            </Link>
          </Button>
        </div>
        <p className={`text-primary text-center ${inconsolata.className}`}>Conheça meus projetos</p>
        <div>
          <Componenets.Project
            name="Metro SPStatus"
            description="Esse projeto permite que o usuário consiga ver o status de funcionamento das principais linhas de metrô em São Paulo, além de checar se há restrições na utilização do metrô. Para a alimentação dos dados, hospedei uma API em node que trata as informações e encaminha para o front end."
            imgPath={'https://source.unsplash.com/random'}
            imgAlt='Imagem aleatória para teste'
          />
        </div>
      </main>
    </div>
  );
}
