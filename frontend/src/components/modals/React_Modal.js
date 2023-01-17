import React from "react";
import Modal from "react-modal";
export default function ReactModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        style={props.customStyles}
      >
        {props.modalContent}
      </Modal>
    </div>
  );
}
