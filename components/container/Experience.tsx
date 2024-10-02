//UTILS
import React from "react";
import { cn } from "@/lib/utils";
import { IconBaseProps } from "react-icons";

type Props = {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  description: string;
};

export function Experience(props: Props) {
  return (
    <div className="py-4 px-6 border-[1px] border-white/10 rounded-lg">
      <div className="space-y-4">
        {React.createElement(props.icon.type, {
          ...props.icon.props,
          strokeWidth: 1,
          size: 40,
          className: cn(
            "max-w-max p-[0.40rem] text-primary/60 p-0 bg-primary/10 rounded-full p-2", props.icon.props.className
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