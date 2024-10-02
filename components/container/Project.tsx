//COMPONENETS
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import * as Icons from '@/icons';

//UTILS
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ProjectProps = {
  name: string;
  description: string;
  imgPath: string | StaticImport;
  repositoryUrl: string;
  deployUrl: string;
  tecnologies: string;
};

export function Project(props: ProjectProps) {
  return (
    <div className="w-full md:flex-1 md:max-w-[22rem] h-auto space-y-6 border-[1px] border-primary/30 text-foreground/80 px-3 py-4 rounded-md">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-base">{props.name}</h2>
        <div className="w-full h-[10rem] min-[375px]:h-[14rem] relative">
          <Image
            src={props.imgPath}
            alt={'Imagem representando a responsividade com um mock de vários dispositivos contendo um preview do conteúdo do projeto'}
            objectFit="cover"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm">{props.description}</p>
          <div className="space-y-4">
            <p className="font-semibold bg-primary/30 text-primary-foreground rounded-full text-center">Tecnologias</p>
            <p className="font-normal text-sm">{props.tecnologies}</p>
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        <Button asChild size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
          <Link className="gap-2" href={props.repositoryUrl}>
            {' '}
            <Icons.BsGithub />
            GitHub
          </Link>
        </Button>
        <Button asChild size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
          <Link className="gap-2" href={props.deployUrl}>
            <Icons.BsRocketTakeoff /> Deploy
          </Link>
        </Button>
      </div>
    </div>
  );
}
