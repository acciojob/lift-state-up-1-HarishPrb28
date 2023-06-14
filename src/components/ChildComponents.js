import React from "react";
import ModalComponents from "./ModalComponents";

const ChildComponents = (props) => {
  const { showModal, setShowModal } = props;
  return (
    <div className="child">
      <h2>Child Components</h2>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Show Modal
      </button>
      {showModal && <ModalComponents />}
    </div>
  );
};

export default ChildComponents;
