//COMPONENETS
import Image from 'next/image';
import { Button } from '../ui/button';

//UTILS
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ProjectProps = {
  name: string;
  description: string;
  imgPath: string | StaticImport;
  imgAlt: string;
};

export function Project(props: ProjectProps) {
  return (
    <div className="space-y-4 border-[1px] border-primary/30 text-foreground/80 px-3 py-4 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[10rem] relative">
          <Image src={props.imgPath} alt={props.imgAlt} objectFit="cover" fill className="z-0 rounded-lg" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-base">{props.name}</h2>
          <p className="text-sm">{props.description}</p>
        </div>
      </div>
      <Button size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
        GitHub
      </Button>
      <Button size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
        Deploy
      </Button>
    </div>
  );
}
