import React from "react";
import { DiGithubBadge } from "react-icons/di";

function Header() {
  return (
    <h1 className="App-header">
      <DiGithubBadge size="3em" color="black" />
      Github user searcher
    </h1>
  );
}
export default Header;
