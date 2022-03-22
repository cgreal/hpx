import React, { useEffect, useRef } from "react";
import Icons from "../Icons";
import "./Style.scss";
import PropTypes from "prop-types";

const Modal = ({ children, title, closeModal, maxWidth, type, animation }) => {
  const modalContentEl = useRef(null);
  const refCloseModal = useRef(closeModal);

  useEffect(() => {
    const { current: closeModalHandler } = refCloseModal || {};
    const clickOutSideListenerHandler = (e) => {
      if (
        modalContentEl &&
        modalContentEl.current &&
        e.target &&
        e.target.classList.contains("modal-container") &&
        !modalContentEl.current.contains(e.target)
      )
        closeModalHandler();
    };
    const handleEsc = (event) => {
      const { key, keyCode, which } = event;
      if (key === "Escape" || key === "Esc" || keyCode === 27 || which === 27) {
        event.preventDefault();
        closeModalHandler();
      }
    };
    if (closeModalHandler) window.addEventListener("keydown", handleEsc);
    if (closeModalHandler)
      document.addEventListener("click", clickOutSideListenerHandler, true);
    document.body.classList.add("is-modal");

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", clickOutSideListenerHandler, true);
      document.body.classList.remove("is-modal");
    };
  }, []);

  return (
    <div className={`modal-container ${type}`} data-cy="modal-container">
      <div className="modal-overlay" />
      <div className="modal-dialog" role="document" style={{ maxWidth }}>
        <div className="modal-wrapper">
          <div className={`modal-content ${animation}`} ref={modalContentEl}>
            <div className="modal-header">
              {title && <h5 className="modal-title">Remove Link</h5>}
              {closeModal && (
                <button
                  type="button"
                  onClick={closeModal}
                  className="close-btn"
                  aria-label="close"
                  data-cy="modal-close"
                >
                  <Icons name="x" aria-hidden />
                </button>
              )}
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  animation: PropTypes.string,
  closeModal: PropTypes.func,
  isHideIntercom: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isHideCloseBtn: PropTypes.bool,
};

Modal.defaultProps = {
  title: null,
  type: "center",
  animation: "slidefromup",
  closeModal: undefined,
  isHideIntercom: false,
  maxWidth: 720,
  isHideCloseBtn: false,
};
export default Modal;
