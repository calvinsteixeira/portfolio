import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="px-5 w-full h-20 primaryContainer flex items-center justify-center">
      <p className="primaryContainerText text-sm text-center">
        Desenvolvido com: <span className="underline font-bold">React JS</span>,{" "}
        <span className="underline font-bold">Typescript</span> e{" "}
        <span className="underline font-bold">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
