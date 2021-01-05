import React, { useEffect, useContext } from "react";
import { stateContext } from "../App";
import Loading from "./Loading";
import UsersList from "./UsersList";

function UsersData() {
  const { user, setUser, input, setError, loading, setLoading } = useContext(
    stateContext
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${input}`
        );
        const result = await response.json();
        const newResult = result;
        setUser(newResult);
        setLoading(false);
        setError(newResult.message);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [input, setUser, setError, user.message, setLoading]);

  console.log(user);

  return <div className="list">{loading ? <Loading /> : <UsersList />}</div>;
}
export default UsersData;
