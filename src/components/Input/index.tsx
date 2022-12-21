import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ForwardedRef, forwardRef } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValue,
  RegisterOptions,
} from "react-hook-form";

type TField = FieldValue<Record<string, any>>;
export interface InputProps extends Omit<TextFieldProps, "name"> {
  control: Control<TField>;
  name?: FieldPath<TField>;
  rules?: Omit<
    RegisterOptions<TField, FieldPath<TField>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { name = "", control, ...other } = props;

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField {...other} {...field} ref={ref} />}
      />
    );
  }
);

export default Input;
