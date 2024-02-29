import React, { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  label: string;
  description?: string
};

export default function TechItem({ icon, label }: Props) {
  return (
    <div className='flex gap-3 px-3 2xl:px-10
     py-2 2xl:py-6 items-center primaryContainer flex-1'>
      {icon}
      <p className="text-sm 2xl:text-2xl">{label}</p>
    </div>
  );
}
