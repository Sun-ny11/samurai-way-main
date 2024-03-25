import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormControl, Textarea } from "../common/formControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators";




type FormProps = {
   message: string
}

const maxLength50 = maxLengthCreator(50)

export const Form = (props: InjectedFormProps<FormProps>) => {
   // внутри handleSubmit: preventDefault => соберутся данные с формы в объект => вызовет onSubmit с объектом внутри
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder="textarea" name={"message"} component={Textarea} validate={[required, maxLength50]} />
         </div>

         <button>Send</button>
      </form>
   );
};

const DialogsReduxForm = reduxForm<any>({
   form: 'dialogs'
})(Form)




type DialogsProps = {
   sendMesOnClick: (message: string) => void
}

export const DialogsForm = (props: DialogsProps) => {

   const onSubmit = (formData: FormProps) => {
      props.sendMesOnClick(formData.message)

   }
   return (
      <>
         <DialogsReduxForm onSubmit={onSubmit} />
      </>
   );
};