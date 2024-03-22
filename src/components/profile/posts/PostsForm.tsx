import { Field, InjectedFormProps, reduxForm } from "redux-form";

type FormType = {
   post: string
}
export const Form = (props: InjectedFormProps<FormType>) => {
   // внутри handleSubmit: preventDefault => соберутся данные с формы в объект => вызовет onSubmit с объектом внутри
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder="textarea" name={"post"} component={"textarea"} />
         </div>

         <button>+</button>
      </form>
   );
};

const PostsReduxForm = reduxForm<any>({
   form: 'post'
})(Form)




type PostProps = {
   sendPost: (post: string) => void
}

export const PostsForm = (props: PostProps) => {

   const onSubmit = (formData: FormType) => {
      props.sendPost(formData.post)

   }
   return (
      <>
         <PostsReduxForm onSubmit={onSubmit} />
      </>
   );
};