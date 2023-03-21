import React from "react";

type Props = {
  type: string;
  value: string;
  placeholder: string;
};

export const Input = ({ placeholder, type, value }: Props) => {
  return <input type={type} value={value} placeholder={placeholder} />;
};
