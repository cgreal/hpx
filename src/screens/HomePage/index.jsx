import React, { useEffect, useState } from "react";
import "../../assets/styles/global.scss";
import Icons from "../../components/common/Icons";
import ListingFromLocalStorage from "../../components/ListingsFromLocalStorage";
import Pagination from "../../components/common/Pagination";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortedList, setSortedNewList] = useState(null);

  const localData = JSON.parse(localStorage.getItem("data"));
  const newData = Object.assign([], localData);

  useEffect(() => {
    if (sortedList && sortedList.length > 0) {
      setData(sortedList);
      setTotalPages(Math.ceil(sortedList.length / 5));
    } else {
      setData(newData);
      setTotalPages(Math.ceil(newData.length / 5));
    }
  }, [sortedList, page]);

  const paginationClickHandler = (num) => {
    setPage(num);
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="main-content">
        <div className="d-flex justify-content-center border-bottom pb-3 mb-3">
          <a href="/addVoteForm" className="btn hxp-btn">
            <Icons name="plus" customClass="pr-1" /> Add To List Item
          </a>
        </div>

        <ListingFromLocalStorage
          data={sortedList || data}
          page={page}
          setSortedNewList={setSortedNewList}
        />
        <Pagination
          totalPages={totalPages}
          handleClick={paginationClickHandler}
        />
      </div>
    </div>
  );
};

export default HomePage;
