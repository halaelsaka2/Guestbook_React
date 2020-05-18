import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class ModalComponent extends Component {
  state = {};
  render() {
    const {
      isOppen,
      inputValue,
      onHandelChange,
      onToggleModal,
      name,
      onSave,
    } = this.props;
    return (
      <Modal isOpen={isOppen}>
        <ModalHeader toggle={onToggleModal}>Modal header</ModalHeader>
        <ModalBody>
          <input
            type="text"
            name={name}
            value={inputValue}
            onChange={onHandelChange}
          />
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={onSave}>
            save
          </button>
          <button className="btn btn-secondary" onClick={onToggleModal}>
            cancle
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalComponent;
