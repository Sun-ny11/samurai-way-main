import { sendMessageAC, updateMessageAC, } from "../../redux/state";
import { Dispatch } from "redux";
import { Dialogs,  } from "./Dialogs";
import { connect } from "react-redux";
import { AppRootReducerType } from "../../redux/store";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";




const mapStateToProps = (state: AppRootReducerType) => {
   return {
      massagesData: state.dialogsPage.massagesData,
      usersData: state.dialogsPage.usersData,
      sendNewMessage: state.dialogsPage.sendNewMessage,
      isAuth: state.auth.isAuth,
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      updateNewMessageBody: (body: string) => {
         dispatch(updateMessageAC(body))
      },
      sendMesOnClick: () => {
         dispatch(sendMessageAC())
      }
   }
}
const AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsWrapper = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
