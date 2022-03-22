import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/common/Icons";
import ToasterMessage from "../../components/common/ToasterMessage";

const FormPage = () => {
  const [isVisibleToaster, setIsVisibleToaster] = useState(false);
  let itemsArray = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const link = formData.get("link");
    const voteCount = 0;
    const sortType = "desc";

    if (title !== "" && link !== "") {
      itemsArray.push({ title, link, voteCount, sortType });
      localStorage.setItem("data", JSON.stringify(itemsArray));
      const isItemAdded = JSON.parse(localStorage.getItem("data")).length > 0;
      if (isItemAdded) {
        setIsVisibleToaster(true);
      }
    }
    event.target.reset();
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      {isVisibleToaster && (
        <ToasterMessage
          text="Item saved!"
          type="success"
          setIsVisibleToaster={setIsVisibleToaster}
        />
      )}

      <div className="main-content">
        <Link to="/" className="d-block link mb-5">
          <Icons name="arrow-left2" /> Return to List
        </Link>
        <div className="white-box-title">Add to New Link</div>
        <div className="white-box">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <p className="mb-1">Link Name</p>
              <input type="text" name="title" placeholder="e.g. Alphabet" />
            </div>
            <div className="mb-4">
              <p className="mb-1">Link</p>
              <input
                type="text"
                name="link"
                placeholder="https://www.test.com"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn hxp-add-btn">
                <span>Add</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
