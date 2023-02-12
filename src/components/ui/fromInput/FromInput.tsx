import React from "react";
import { InputPlaces } from "@/src/components/ui/inputPlaces";

export const FromInput = () => {
  const cbSuccess = () => {
    console.log("success");
  };
  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};
