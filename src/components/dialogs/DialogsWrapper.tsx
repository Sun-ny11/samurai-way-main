import { Dispatch, compose } from "redux";
import { Dialogs, } from "./Dialogs";
import { connect } from "react-redux";
import { AppRootReducerType } from "../../redux/store";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageAC } from "../../redux/dialog-reducer";




const mapStateToProps = (state: AppRootReducerType) => {
   return {
      massagesData: state.dialogsPage.massagesData,
      usersData: state.dialogsPage.usersData,
      isAuth: state.auth.isAuth,
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      sendMesOnClick: (message:string) => {
         dispatch(sendMessageAC(message))
      }
   }
}


export const DialogsContainer = compose<React.ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   WithAuthRedirect,
)(Dialogs)


