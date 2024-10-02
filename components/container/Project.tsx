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
};

export function Project(props: ProjectProps) {
  return (
    <div className="space-y-4 border-[1px] border-primary/30 text-foreground/80 px-3 py-4 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="w-full max-h-[10rem] h-[10rem] relative">
          <Image
            src={props.imgPath}
            alt={'Imagem representando a responsividade com um mock de vários dispositivos contendo um preview do conteúdo do projeto'}
            objectFit="cover"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-base">{props.name}</h2>
          <p className="text-sm">{props.description}</p>
        </div>
      </div>
      <Button asChild size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
        <Link className='gap-2' href={props.repositoryUrl}>
          {' '}
          <Icons.BsGithub />
          GitHub
        </Link>
      </Button>
      <Button asChild size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
        <Link className='gap-2' href={props.deployUrl}>
          <Icons.BsRocketTakeoff /> Deploy
        </Link>
      </Button>
    </div>
  );
}
