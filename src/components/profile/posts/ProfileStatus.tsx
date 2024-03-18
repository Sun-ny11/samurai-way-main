import React from "react";
type ProfileStatusProps = {
   status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
   state = {
      editMode: false
   }
   activateEditMode() {
      this.setState({
         editMode: !this.state.editMode
      })
   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <input autoFocus onBlur={this.activateEditMode.bind(this)} value={this.props.status} />
               : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            }

         </div>
      )
   }
}