import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  BulkDeleteButton
} from "react-admin";
import BanUsersButton from "./BanUsersButton";

const PostBulkActionButtons = props => (
  <>
    <BanUsersButton label="Reset Views" {...props} />
    {/* Add the default bulk delete action */}
    <BulkDeleteButton {...props} />
  </>
);

export const UserList = props => (
  <>
    <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  </>
);
