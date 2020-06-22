import React from "react";
import GetUser from "./GetUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function App() {
  return (
    <div className="App">
      <GetUser />
      <hr />
      <CreateUser />
      <hr />
      <UpdateUser />
      <hr />
      <DeleteUser />
    </div>
  );
}

export default App;
