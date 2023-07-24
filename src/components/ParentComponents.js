import React, { useState } from "react";
import ChidComponents from "./ChildComponents";

function ParentComponents() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChidComponents showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default ParentComponents;
