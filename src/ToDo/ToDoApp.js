import React, { useState } from "react";
import ResourceList from "./components/ResourceList";
import UserList from "./components/UserList";

const ToDoApp = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>ToDo</button>
      </div>
      {<ResourceList resource={resource} />}
    </div>
  );
};

export default ToDoApp;
