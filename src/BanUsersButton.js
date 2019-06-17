import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import {
  crudUpdateMany,
  required,
  Button,
  SaveButton,
  SimpleForm,
  LongTextInput,
  showNotification as showNotificationAction
} from "react-admin";
import IconCancel from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { push as pushAction } from "react-router-redux";

const BanUsersButton = ({ selectedIds, showNotification, push }) => {
  const [dialogOpen, showDialog] = useState(false);
  const [reason, setReason] = useState("");

  // This is just for presentation purpose. this would be handled in container or separate custom saga
  const banUsers = useCallback(() => {
    console.log(selectedIds);
    fetch(`/users/ban`, {
      method: "PUT",
      body: JSON.stringify({ selectedIds, reason })
    })
      .then(response => {
        if (!response.ok) throw response;
        showNotification("Comment approved");
      })
      .catch(e => {
        console.error(e);
        showNotification(`Error: ${e.statusText}`, "warning");
      })
      .finally(() => {
        showDialog(false);
        setReason("");
        // push("posts"); // can redirect
      });
  }, [reason, selectedIds, showNotification]);

  return (
    <>
      <Dialog
        fullWidth
        open={dialogOpen}
        onClose={() => showDialog(false)}
        aria-label="Create post"
      >
        <DialogTitle>Ban users</DialogTitle>
        <DialogContent>
          <SimpleForm toolbar={null} record={{ reason }}>
            <LongTextInput
              onChange={e => {
                setReason(e.target.value);
              }}
              source="reason"
              validate={required()}
            />
          </SimpleForm>
        </DialogContent>
        <DialogActions>
          <SaveButton onClick={banUsers} />
          <Button label="ra.action.cancel" onClick={() => showDialog(false)}>
            <IconCancel />
          </Button>
        </DialogActions>
      </Dialog>
      <Button label="Ban users" onClick={() => showDialog(true)} />
    </>
  );
};

export default connect(
  undefined,
  { crudUpdateMany, showNotification: showNotificationAction, push: pushAction }
)(BanUsersButton);
