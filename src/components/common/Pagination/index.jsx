import React from "react";
import "./Style.scss";
import PropTypes from "prop-types";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="row pagination-wrapper">
      <ul className="pagination-ul">
        {pages.map((num, index) => (
          <li key={index} className={index + 1 === pages ? "active" : ""}>
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="nav-btn"
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
Pagination.propTypes = {
  totalPages: PropTypes.number,
  handleClick: PropTypes.func,
};

Pagination.defaultProps = {
  totalPages: 0,
  handleClick: () => {},
};
export default Pagination;
