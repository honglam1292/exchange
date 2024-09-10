import * as React from "react";
import { InputCustomStyle } from "./style";

export interface InputCustomProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  message?: string;
  success?: boolean;
}

export function InputCustom({ ...props }: InputCustomProps) {
  return (
    <InputCustomStyle>
      <input {...props} autoComplete="off" />
    </InputCustomStyle>
  );
}
