import React, { FC } from "react";
import { WrappedFieldProps } from "redux-form";
import s from "./FormControls.module.css"


type FormControlProps = WrappedFieldProps & {
   tagName: 'textarea' | 'input'

}


export const FormControl = ({ input, meta, tagName, ...props }: FormControlProps) => {

   const hasError = meta.touched && meta.error
   const Tag = tagName;

   return (
      <div className={s.formControls + " " + (hasError ? s.error : "")}>
         <Tag  {...input} {...props} />
         {hasError && <span className={s.formControls + " " + s.error}>{meta.error}</span>}
      </div>
   );
};


export const Input = (props: FormControlProps) => {
   return (
      <>
         <FormControl {...props} tagName={"input"}></FormControl>
      </>
   );
};


export const Textarea = (props: FormControlProps) => {
   return (
      <>
         <FormControl {...props} tagName={"textarea"}></FormControl>
      </>
   );
};