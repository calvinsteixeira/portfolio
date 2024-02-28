"use client";

import React from "react";
import { IoLinkSharp } from "react-icons/io5";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="px-5 md:px-10 w-full h-20 primaryContainer flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger id="navigationTrigger" className="p-0">
              <div className="flex flex-col gap-[0.20rem]">
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
                <span className="border-b-2 border-[#FF7F23] w-4"></span>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="primaryContainer primaryText w-52 py-4 px-4 flex flex-col gap-4">
              <NavigationMenuLink className="flex gap-1 items-center">
                <p className="secondaryText text-xs">#</p> Sobre
              </NavigationMenuLink>
              <NavigationMenuLink className="flex gap-1 items-center">
                <p className="secondaryText text-xs">#</p> Tecnologias
              </NavigationMenuLink>
              <NavigationMenuLink className="flex gap-1 items-center">
                <p className="secondaryText text-xs">#</p> Projetos
              </NavigationMenuLink>
              <NavigationMenuLink className="flex gap-1 items-center">
                <p className="secondaryText text-xs">#</p> Contato
              </NavigationMenuLink>
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
