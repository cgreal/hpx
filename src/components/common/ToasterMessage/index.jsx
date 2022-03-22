import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Style.scss";

const ToasterMessage = ({ text, type, setIsVisibleToaster }) => {
  const [isHide, setIsHide] = useState();

  setTimeout(() => {
    setIsHide(true);
    setIsVisibleToaster(false);
  }, 1500);

  if (!text) return;

  return (
    <div
      className={`d-flex toaster-container justify-content-center my-5 ${
        isHide ? "fade-out" : ""
      }`}
    >
      <div
        className={`d-flex justify-content-center toaster-text ${type || ""}`}
      >
        {text || ""}
      </div>
    </div>
  );
};

ToasterMessage.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  setIsVisibleToaster: PropTypes.func,
};

ToasterMessage.defaultProps = {
  text: "",
  type: "success",
  setIsVisibleToaster: () => {},
};

export default ToasterMessage;
