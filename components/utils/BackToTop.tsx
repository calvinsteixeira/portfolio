'use client';

//COMPONENETS
import * as Icons from '@/icons';

//UTILS
import React from 'react';

type Props = {};

export function BackToTop(props: Props) {
  const [visibilityBackToTop, setVisibilityBackToTop] = React.useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 160) {
        setVisibilityBackToTop(true);
      } else {
        setVisibilityBackToTop(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      data-visibilityBackToTop={visibilityBackToTop}
      className="fixed bottom-10 right-4 z-20 max-w-max p-[0.40rem] rounded-full bg-gray-700 text-gray-200 transition-all ease-in-out delay-150 duration-300 data-[visibilityBackToTop=false]:hidden flex flex-col items-center justify-center gap-4"
    >
      <Icons.ArrowUp onClick={scrollToTop} className={`text-primary-foreground`} />
    </div>
  );
}
