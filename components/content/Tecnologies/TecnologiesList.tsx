'use client'

import React from "react";
import { TechItem } from "@/components/index";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAxios,
  SiJquery,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiAntdesign,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {};

export default function TecnologiesList({}: Props) {
  return (
    <Slide duration={500} triggerOnce>
      <TechItem
        icon={<FaReact className="text-3xl 2xl:text-5xl text-cyan-500" />}
        label="React/React Native"
        description="Biblioteca JavaScript para construir interfaces de usuário, mantendo um estado e renderizando componentes de forma eficiente."
      />
      <TechItem
        icon={<SiNextdotjs className="text-3xl 2xl:text-5xl" />}
        label="Next JS"
        description="Framework baseado em React para desenvolvimento de aplicações web com renderização no lado do servidor (SSR) e geração estática de páginas (SSG)."
      />
      <TechItem
        icon={<BiLogoTypescript className="text-3xl 2xl:text-5xl text-blue-600" />}
        label="Typescript"
        description="Linguagem de programação tipada estaticamente que se baseia em JavaScript, adicionando tipos e outros recursos para melhorar a escalabilidade e manutenibilidade do código."
      />
      <TechItem
        icon={<SiTailwindcss className="text-3xl 2xl:text-5xl text-blue-500" />}
        label="Tailwindcss"
        description="Framework de CSS de utilitários que permite criar designs personalizados rapidamente através de classes de utilitários pré-definidas."
      />
      <TechItem
        icon={<SiAxios className="text-3xl 2xl:text-5xl text-purple-700" />}
        label="Axios"
        description="Biblioteca JavaScript para fazer requisições HTTP, suportando promessas e oferecendo uma API fácil de usar tanto no navegador quanto no Node.js."
      />
      <TechItem
        icon={<SiJquery className="text-3xl 2xl:text-5xl text-blue-400" />}
        label="JQuery"
        description="Biblioteca JavaScript rápida, pequena e rica em recursos, projetada para simplificar tarefas comuns de manipulação de DOM, eventos, animações e AJAX para desenvolvimento web."
      />
      <TechItem
        icon={<SiExpo className="text-3xl 2xl:text-5xl" />}
        label="Expo"
        description="Plataforma e conjunto de ferramentas para desenvolver aplicativos nativos para iOS e Android usando JavaScript e React Native, facilitando o processo de construção e teste sem a necessidade de instalar SDKs nativos."
      />
      <TechItem
        icon={<SiNodedotjs className="text-3xl 2xl:text-5xl text-green-600" />}
        label="Node JS"
        description="Ambiente de execução JavaScript do lado do servidor que permite executar código JavaScript fora de um navegador, geralmente para criar servidores web e APIs."
      />
      <TechItem
        icon={<SiExpress className="text-3xl 2xl:text-5xl" />}
        label="Express JS"
        description="Framework minimalista e flexível para Node.js, usado para construir aplicações web e APIs de maneira rápida e eficiente."
      />
      <TechItem
        icon={<SiSequelize className="text-3xl 2xl:text-5xl text-blue-600" />}
        label="Sequelize"
        description="ORM (Object-Relational Mapping) para Node.js, que permite trabalhar com bancos de dados SQL de maneira mais fácil e orientada a objetos, abstraindo consultas SQL complexas e facilitando operações CRUD."
      />
      <TechItem
        icon={<FaDatabase className="text-3xl 2xl:text-5xl text-yellow-400" />}
        label="SQL"
        description="Linguagem de programação usada para gerenciar e manipular bancos de dados relacionais, permitindo realizar operações como inserção, seleção, atualização e exclusão de dados."
      />
      <TechItem
        icon={<FaGitAlt className="text-3xl 2xl:text-5xl text-orange-600" />}
        label="Git"
        description="Sistema de controle de versão distribuído que permite aos desenvolvedores colaborar em projetos, rastrear mudanças no código e reverter para versões anteriores quando necessário."
      />
      <TechItem
        icon={<SiAntdesign className="text-3xl 2xl:text-5xl text-red-600" />}
        label="Ant Design"
        description="Biblioteca de componentes UI para React, que fornece uma variedade de componentes prontos para uso seguindo as diretrizes de design do Ant Design System, visando criar interfaces de usuário consistentes e de alta qualidade."
      />
    </Slide>
  );
}
