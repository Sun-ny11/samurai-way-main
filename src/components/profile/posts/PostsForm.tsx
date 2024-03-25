import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/formControls/FormControls";

type FormType = {
   post: string
}

const maxLength30 = maxLengthCreator(30)

export const Form = (props: InjectedFormProps<FormType>) => {
   // внутри handleSubmit: preventDefault => соберутся данные с формы в объект => вызовет onSubmit с объектом внутри
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder="textarea" name={"post"} component={Textarea} validate={[required, maxLength30]}  />
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