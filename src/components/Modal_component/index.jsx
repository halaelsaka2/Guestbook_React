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
      header,
    } = this.props;
    return (
      <Modal isOpen={isOppen}>
        <ModalHeader toggle={onToggleModal}>{header}</ModalHeader>
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
            cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalComponent;
