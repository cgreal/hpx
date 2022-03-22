import React from "react";
import PropTypes from "prop-types";
import Modal from "../common/Modal";

const ConfirmationModal = ({ title, message, onCancel, onConfirm }) => {
  const confirmAndCloseHandler = () => {
    onConfirm();
    onCancel();
  };

  return (
    <Modal closeModal={onCancel} title={title} maxWidth={400}>
      <div>
        <div className="d-flex justify-content-center mb-4 pb-4">{message}</div>
        <div className="d-flex justify-content-center">
          <button type="button" onClick={onCancel} className="link mr-3">
            Cancel
          </button>
          <button
            type="button"
            onClick={confirmAndCloseHandler}
            className="btn hxp-add-btn"
          >
            Ok
          </button>
        </div>
      </div>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  title: "Remove Link?",
  message: "",
  onCancel: () => {},
  onConfirm: () => {},
};

export default ConfirmationModal;
