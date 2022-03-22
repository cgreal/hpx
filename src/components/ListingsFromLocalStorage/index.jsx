import React, { useEffect, useState } from "react";
import Icons from "../common/Icons";
import "./Style.scss";
import ConfirmationModal from "../ConfirmationModal";
import ToasterMessage from "../common/ToasterMessage";

const ListingFromLocalStorage = ({ data, page, setSortedNewList }) => {
  const [sortType, setSortType] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [removeItemIndex, setRemoveItemIndex] = useState();
  const [removeItemTitle, setRemoveItemTitle] = useState();
  const [isVisibleToaster, setIsVisibleToaster] = useState(false);
  let sortingVal = "";

  useEffect(() => {
    setSortedNewList(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      setSortType("OrderBy");
      setSortedNewList(data.sort((a, b) => a.title - b.title));
    }
  }, []);
  if (!data) return false;

  const startIndex = (page - 1) * 5;
  const selectedItems = data.slice(startIndex, startIndex + 5);

  const selectSortingHadler = (event) => {
    event.preventDefault();

    sortingVal = event.target.value;

    setSortType("asc");
    setSortedNewList(data.sort((a, b) => a.title - b.title));

    if (sortingVal === "desc") {
      setSortType("desc");
      setSortedNewList(data.sort((a, b) => b.title - a.title));
    }
  };

  const removeButtonHanler = (index, item) => {
    setIsShowModal(true);
    if (page > 1) {
      setRemoveItemIndex(startIndex + index);
    } else {
      setRemoveItemIndex(index);
    }
    setRemoveItemTitle(item.title);
  };

  const onConfirm = () => {
    data.splice(removeItemIndex, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setIsShowModal(false);
    setIsVisibleToaster(true);
  };

  const onCancelConfirm = () => {
    setIsShowModal(false);
  };

  const voteChangeHandler = (event, index) => {
    event.preventDefault();
    console.log(event.target.name);
    // const addToCart = (product) => {
    //   let newCart = [...cart];
    //   let itemInCart = newCart.find(
    // 	  (item) => product.name === item.name
    //   );
    //   if (itemInCart) {
    // 	  itemInCart.quantity++;
    //   } else {
    // 	  itemInCart = {
    // 		  ...product,
    // 		  quantity: 1,
    // 	  };
    // 	  newCart.push(itemInCart);
    //   }
    //   setCart(newCart);
    // };
  };

  return (
    <>
      {isShowModal && (
        <ConfirmationModal
          title="Remove Link"
          message={
            <div className="d-flex justify-content-center flex-column">
              Do you want remove link?
              <div className="my-2 modal-description">{removeItemTitle}</div>
            </div>
          }
          onCancel={onCancelConfirm}
          onConfirm={onConfirm}
        />
      )}
      <div className="listing-wrapper">
        {isVisibleToaster && (
          <div className="d-flex justify-content-center">
            <ToasterMessage
              text="Item removed!"
              type="error"
              setIsVisibleToaster={setIsVisibleToaster}
            />
          </div>
        )}
        <div className="selectbox">
          <select
            name="sorting"
            defaultValue="default"
            onChange={selectSortingHadler}
          >
            <option value="default">OrderBy</option>
            <option value="asc">Most voted [A-Z]</option>
            <option value="desc">Less voted [Z-A]</option>
          </select>
          <Icons name="sort-alpha-asc" />
        </div>
        {selectedItems.map((item, index) => (
          <div className="p-3 list-item my-4" key={index}>
            <div className="remove-btn-wrapper">
              <button
                className="remove-btn"
                onClick={() => removeButtonHanler(index, item)}
              >
                <Icons name="bin" />
              </button>
            </div>
            <div className="row m-0">
              <div className="col col-2 d-flex justify-content-center align-items-center">
                <div className="vote d-flex justify-content-center align-items-center flex-column">
                  {item.voteCount}
                  <div className="vote-title">Vote</div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="title">{item.title}</div>
                  <div className="link">({item.link})</div>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-3">
                  <button
                    name="down-vote"
                    className="link down-vote"
                    onClick={voteChangeHandler}
                  >
                    <Icons name="arrow-down2" customClass="mr-2" />
                    Down Vote
                  </button>
                  <button
                    name="up-vote"
                    className="link up-vote"
                    onClick={(event) => voteChangeHandler(event, index)}
                  >
                    <Icons name="arrow-up2" customClass="mr-2" />
                    Up Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListingFromLocalStorage;
