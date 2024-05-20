import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";
import React from "react";

type InputProps<FieldValue extends FieldValues> = {
  label: string;
  name: Path<FieldValue>;
  type?: string;
  error?: string;
  register: UseFormRegister<FieldValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disapled?:boolean,
};

export const Input = <FieldValue extends FieldValues>({
  type = "text",
  register,
  name,
  error,
  label,
  onBlur,
  formText,
  success,
  disapled
}: InputProps<FieldValue>) => {
  const BlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <>
      <Form.Group className="mb-2">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          {...register(name)}
          isInvalid={error ? true : false}
          onBlur={BlurHandler}
          isValid={success ? true : false}
          disabled={disapled ? true : false}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
       <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
        {formText && <Form.Text muted>{formText}</Form.Text>}
      </Form.Group>
    </>
  );
};
