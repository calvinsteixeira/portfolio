//UTILS
import React from "react";
import { cn } from "@/lib/utils";
import { IconNode } from "lucide-react";

type Props = {
  icon: React.ReactElement<IconNode>;
  title: string;
  description: string;
};

export function ProjectFeature(props: Props) {
  return (
    <div className="py-4 px-6 border-[1px] border-white/10 rounded-lg">
      <div className="space-y-4">
        {React.createElement(props.icon.type, {
          ...props.icon.props,
          size: 30,
          className: cn(
            "max-w-max p-[0.40rem] rounded-full bg-gray-200/20 text-white/40"
          ),
        })}
        <div className="space-y-2">
          <h2 className="text-secondary-foreground">{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}