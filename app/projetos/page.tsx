//COMPONENETS
import * as Icons from '@/icons';
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
      </main>
    </div>
  );
}
