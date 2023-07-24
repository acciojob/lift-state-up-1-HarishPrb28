import React, { useState } from "react";

const ChildComponents = () => {
  let [modal, setModal] = useState("");

  return (
    <div className="child">
      <h1>Child Component</h1>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        Show Modal
      </button>
      {
        // modal component goes here.
        modal && (
          <div>
            <h3>Modal Content</h3>
            <p>This is modal content</p>
          </div>
        )
      }
    </div>
  );
};

export default ChildComponents;
