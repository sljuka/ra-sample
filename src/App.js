import React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./UserList";
import { PostList } from "./PostList";
import { PostEdit } from "./PostEdit";
import jsonServerProvider from "ra-data-json-server";
// import dataProvider from "./dataProvider";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);

export default App;
