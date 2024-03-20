import { Field, InjectedFormProps, reduxForm } from "redux-form";

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
   // внутри handleSubmit: preventDefault => соберутся данные с формы в объект => вызовет onSubmit с объектом внутри
   return (
      <form onSubmit={props.handleSubmit}>
         <p>Login</p>
         <div>
            <Field placeholder="Login" name={"login"} component={"input"} />
         </div>
         <div>
            <Field placeholder="Password" name={"password"} component={"input"} />
         </div>
         <div>
            <Field type="checkbox" name={"rememberMe"} component={"input"} /> remember me
         </div>

         <button>Go</button>
      </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)



export const Login = () => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData);
   }
   return (
      <>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </>
   );
};