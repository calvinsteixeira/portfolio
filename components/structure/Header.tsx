"use client";

import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="px-5 w-full h-20 primaryContainer flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger id='navigationTrigger'>
              <div className='flex flex-col gap-[0.20rem]'>
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="primaryContainer primaryText w-52 py-4 px-4 flex flex-col gap-4">
              <NavigationMenuLink>Sobre</NavigationMenuLink>
              <NavigationMenuLink>Tecnologias</NavigationMenuLink>
              <NavigationMenuLink>Projetos</NavigationMenuLink>
              <NavigationMenuLink>Contato</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <h1 className="font-extrabold text-sm">
        {"<Calvin"}
        <span className="secondaryText">{".Teixeira>"}</span>
      </h1>
    </header>
  );
}
