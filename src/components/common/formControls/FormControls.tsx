import React, { FC } from "react";
import { WrappedFieldProps } from "redux-form";
import s from "./FormControls.module.css"


type FormControlProps = WrappedFieldProps & {
   tagName: 'textarea' | 'input'
   children: React.ReactNode;
}


export const FormControl = ({ input, meta, tagName, ...props }: FormControlProps) => {

   const hasError = meta.touched && meta.error

   return (
      <div className={s.formControls + " " + (hasError ? s.error : "")}>
         {props.children}
         {hasError && <span className={s.formControls + " " + s.error}>{meta.error}</span>}
      </div>
   );
};


export const Input = (props: FormControlProps) => {
   const { input, meta, ...restProps } = props
   return (
      <>
         <FormControl {...props}><input  {...input} {...restProps} /></FormControl>
      </>
   );
};


export const Textarea = (props: FormControlProps) => {
   const { input, meta, ...restProps } = props
   return (
      <>
         <FormControl {...props}><textarea  {...input} {...restProps} /></FormControl>
      </>
   );
};