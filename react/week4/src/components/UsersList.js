import React, { useContext } from "react";
import { stateContext } from "../App";

function UsersList() {
  const { user } = useContext(stateContext);
  console.log(user.items);
  return user.items === undefined ? (
    <p> No items </p>
  ) : (
    user.items.map((list) => {
      return (
        <a key={list.id} href={list.html_url} target="_">
          <div>{list.login}</div>
        </a>
      );
    })
  );
}
export default UsersList;
