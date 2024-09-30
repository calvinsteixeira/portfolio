//COMPONENETS
import * as Icons from '@/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

//UTILS
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <main>
        <Button asChild variant={'ghost'}>
          <Link href={'/'}>
            <Icons.ArrowLeft className="text-foreground" />
          </Link>
        </Button>
      </main>
    </div>
  );
}
