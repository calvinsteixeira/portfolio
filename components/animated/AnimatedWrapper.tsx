'use client'

import React, { ReactElement } from "react";
import { Fade, Slide, Reveal } from "react-awesome-reveal";
import { FadeProps, SlideProps, RevealProps } from "react-awesome-reveal";

type Props = {
  children: ReactElement;
  animationType: "fade" | "slide" | "reveal";
  fadeProps?: FadeProps;
  slideProps?: SlideProps;
  revealProps?: RevealProps;
};

export default function AnimatedWrapper({
  children,
  animationType,
  fadeProps,
  slideProps,
  revealProps,
}: Props) {
  return (
    <>
      {animationType == "fade" && <Fade {...fadeProps}>{children}</Fade>}
      {animationType == "slide" && <Slide {...slideProps}>{children}</Slide>}
      {animationType == "reveal" && (
        <Reveal {...revealProps}>{children}</Reveal>
      )}
    </>
  );
}
