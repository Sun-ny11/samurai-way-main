import React, { ChangeEvent, useEffect, useState } from "react";
type ProfileStatusProps = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {editMode ? (
        <input onChange={onChangeHandler} autoFocus onBlur={deactivateEditMode} value={status} />
      ) : (
        <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
      )}
    </div>
  );
};
