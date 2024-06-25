"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { IProject } from "@/data/types";
import { useRouter } from "next/navigation";
import { dbIconProjects } from "@/data/data";
import { IconType } from "react-icons";

export default function Project({
  coverUrl,
  deployUrl,
  githubUrl,
  tecnologies,
  title,
}: IProject) {
  const router = useRouter();
  return (
    <div className="bg-secondary rounded-sm py-3">
      <h2 className="mb-3 text-center font-bold">{title}</h2>
      <Image
        alt="Minha foto de perfil"
        src={coverUrl}
        width={400}
        height={400}
      />
      <div>Descrição</div>
      <div className="flex gap-2">
        {tecnologies.map((tech, index) => {
          const IconComponent: IconType = dbIconProjects[tech.iconName];
          return <IconComponent />;
        })}
      </div>
      <div className="flex gap-4 mt-4 px-2">
        <Button
          onClick={() => router.push(deployUrl)}
          className="border-[1px] border-[#5c62ab] bg-secondary flex-1 rounded-sm"
        >
          Deploy
        </Button>
        <Button
          onClick={() => router.push(githubUrl)}
          className="border-[1px] border-[#5c62ab] bg-secondary flex-1 rounded-sm"
        >
          Github
        </Button>
      </div>
    </div>
  );
}
