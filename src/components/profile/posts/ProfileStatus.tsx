import React, { ChangeEvent } from "react";
type ProfileStatusProps = {
   status: string
   updateUserStatus: (status: string) => void

}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
   state = {
      editMode: false
   }
   activateEditMode = () => {
      this.setState({
         editMode: !this.state.editMode
      })
   }
   onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      this.props.updateUserStatus(e.currentTarget.value)
   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <input onChange={this.onChangeHandler} autoFocus onBlur={this.activateEditMode} value={this.props.status} />
               : <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
            }

         </div>
      )
   }
}