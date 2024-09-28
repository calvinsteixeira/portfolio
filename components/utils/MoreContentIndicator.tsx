"use client";

//COMPONENETS
import * as Icons from "@/icons";

//UTILS
import React from "react";

type Props = {};

export function MoreContentIndicator(props: Props) {
  const [visibilityMoreContentArrow, setVisibilityMoreContentArrow] =
    React.useState<boolean>(true);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 90) {
        setVisibilityMoreContentArrow(false);
      } else {
        setVisibilityMoreContentArrow(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-visibilityMoreContentArrow={visibilityMoreContentArrow}
      className="transition-all ease-in-out delay-150 duration-300 data-[visibilityMoreContentArrow=false]:hidden flex flex-col items-center justify-center gap-4 absolute bottom-[12%]"
    >
      <Icons.ArrowDown className={`animate-bounce text-primary-foreground`} />
    </div>
  );
}
