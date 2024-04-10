import React, { ChangeEvent } from "react";
type ProfileStatusProps = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };
  onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: ProfileStatusProps, prevState: any): void {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input onChange={this.onChangeHandler} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} />
        ) : (
          <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
        )}
      </div>
    );
  }
}
