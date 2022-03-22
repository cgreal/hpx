import React from "react";
import PropTypes from "prop-types";

const Icons = ({ name, customClass }) => {
  const className = `icon icon-${name} ${customClass}`;
  return <i className={className} />;
};

Icons.propTypes = {
  name: PropTypes.string,
  customClass: PropTypes.string,
};

Icons.defaultProps = {
  name: "",
  customClass: "",
};

export default Icons;
