import React, { ReactElement } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  icon: ReactElement;
  techTitle: string;
  description: string;
};

export default function TechContainer({ icon, techTitle, description }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className="px-3 rounded-sm border-primary border-2"
        value="item-1"
      >
        <AccordionTrigger style={{ textDecoration: "none" }}>
          <span>{icon}</span>
          {techTitle}
        </AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
