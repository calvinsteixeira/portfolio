import React, { ReactElement } from "react";

type Props = {
  children: ReactElement;
  className?: string
};

export default function TechContainer({ children, className }: Props) {
  return <div className='w-20 h-14 primaryContainer flex items-center justify-center rounded-2xl shadow-md'>{children}</div>;
}
