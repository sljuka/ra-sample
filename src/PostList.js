import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Pagination,
  Filter,
  ReferenceInput,
  SelectInput
} from "react-admin";

const PostPagination = props => (
  <Pagination rowsPerPageOptions={[]} {...props} />
);

const PostFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List filters={<PostFilter />} {...props} pagination={<PostPagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);
