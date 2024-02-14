import React, { ReactElement } from "react";

type Props = {
  children: ReactElement;
  className?: string;
};

export default function TechContainer({ children, className }: Props) {
  return (
    <div className="w-full h-14 primaryContainer flex items-center justify-between px-8 rounded-2xl shadow-md">
      {children}
    </div>
  );
}
