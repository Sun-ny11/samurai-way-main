import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/formControls/FormControls";
import { required } from "../../utils/validators";
import { Redirect } from "react-router-dom";
import s from "./../common/formControls/FormControls.module.css"

export type FormDataType = {
   email: string
   password: string
   rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
   
   // внутри handleSubmit: preventDefault => соберутся данные с формы в объект => вызовет onSubmit с объектом внутри
   return (
      <form onSubmit={props.handleSubmit}>
         <p>Login</p>
         <div>
            <Field placeholder="email" name={"email"} component={Input} validate={[required]} />
         </div>
         <div>
            <Field placeholder="Password" name={"password"} type="password" component={Input} validate={[required]} />
         </div>
         <div>
            <Field type="checkbox" name={"rememberMe"} component={Input} /> remember me
         </div>
         {props.error && <div className={s.formSummeryErrors}>{props.error}</div>}
         <button>Go</button>
      </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)




type LoginProps = {
   loginThunk: (data: FormDataType) => void
   isAuth: boolean

}

export const Login = (props: LoginProps) => {

   const onSubmit = (formData: FormDataType) => {
      props.loginThunk(formData)
   }

   if (props.isAuth) {
      return <Redirect to={"profile"} />
   }

   return (
      <>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </>
   );
};