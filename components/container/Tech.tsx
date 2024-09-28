//COMPONENETS
import Image from "next/image";

//UTILS
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  techName: string;
  className?: string;
  iconPath: string;
};

export function Tech(props: Props) {
  return (
    <div
      className={cn(
        "px-6 py-1 rounded-full bg-background flex items-center justify-center text-white/70 gap-2",
        props.className
      )}
    >
      {<Image src={props.iconPath} alt={`${props.techName} logo`} width={20} height={20} className=""/>}
      {props.techName}
    </div>
  );
}
