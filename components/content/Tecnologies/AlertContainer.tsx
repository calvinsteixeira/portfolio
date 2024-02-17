import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  title: string;
  description: string;
  type: "destructive" | "success";
  visible: boolean;
};

export default function AlertContainer({
  title,
  description,
  type,
  visible,
}: Props) {
  const alertTypeStyle =
    type == "destructive" ? "bg-red-700 text-white" : "bg-green-600 text-white";

  return (
    
      <Alert
        className={`${
          visible ? "fixed" : "hidden"
        } ${alertTypeStyle} border-transparent right-3 top-3 max-w-[80%] shadow-lg`}
      >
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
  );
}
