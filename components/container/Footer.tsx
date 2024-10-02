//COMPONENTS
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as Icons from '@/icons';

//UTILS
import React from 'react';
import { Inconsolata } from 'next/font/google';
const inconsolata = Inconsolata({ subsets: ['latin'] });

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="relative w-screen h-[25rem] bg-primary overflow-hidden flex items-center justify-center px-6 -mx-6 -mt-8">
      <div className="text-center z-10 text-white space-y-14 flex flex-col items-center">
        <p className={`text-secondary-foreground text-sm ${inconsolata.className}`}>
          Sinta-se a vontade para entrar em contato comigo através dos links abaixo.
        </p>
        <div className="flex flex-col gap-4">
          <Button variant={'secondary'} size={'lg'} className="gap-2">
            <Icons.BsLinkedin />
            Linkedin
          </Button>
          <Button variant={'secondary'} size={'lg'} className="gap-2">
            <Icons.BsGithub />
            Github
          </Button>
          <Button variant={'secondary'} size={'lg'} className="gap-2">
            <Icons.BsWhatsapp />
            WhatsApp
          </Button>
        </div>
      </div>
      <Image src={'/Background_Intro.png'} alt="Imagem com elementos arredondados nos cantos em cores claras." objectFit="cover" fill className="z-0" />
    </footer>
  );
}
