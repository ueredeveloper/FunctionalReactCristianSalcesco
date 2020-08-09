import React from "react";

const pStyle = {
  border: "1px solid green",
  margin: "10px 10px 100px 100px"
};


function Header () {
    return(
      <div>
      <h1>Functional Components</h1>
        <dl>
          <dt>Functional Components</dt>
          <dd>Is a functional return html-like syntax</dd>
        </dl>
      </div>
    )
}

export default Header;