import React, { ReactElement } from "react";
import { FaReact } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
  icon: ReactElement;
  label: string;
  description: string
};

export default function TechAccordion({ icon, label, description }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className='flex gap-3 primaryContainer px-4 py-1'>
          <div className='flex gap-3 items-center'>
            {icon}
            <p className="text-sm">{label}</p>            
          </div>
        </AccordionTrigger>
        <AccordionContent className='primaryContainer primaryContainerText py-4 mt-1 px-4 rounded'>
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
