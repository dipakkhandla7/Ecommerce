import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import { addwish } from "../store/slices/wishlistslices";

import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";

const Productscard = (props) => {
  const [heart, setheart] = useState(false);

  const { id, img, rating, title, price } = props;

  const [isadded, setisadded] = useState(false);

  const dispatch = useDispatch();

  const handeladdtocart = () => {
    const item = { ...props };
    dispatch(addItem(item));

    setisadded(true);
    setTimeout(() => {
      setisadded(false);
    }, 1000);
  };

  const handeladdtowishlist = () => {
    const plus = { ...props };
    dispatch(addwish(plus));
    setheart(true);
    setTimeout(() => {
      setheart(false);
    }, 1000);
  };

  return (
    <div className="mainDiv">
      <div className="product_card">
        <figure>
          <img src={img} alt="img not avaible"></img>
          {heart ? (
            <RiHeart3Fill
              style={{ color: "red" }}
              className="heartIcon"
              onClick={handeladdtowishlist}
            />
          ) : (
            <RiHeart3Line className="heartIcon" onClick={handeladdtowishlist} />
          )}
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{title}</h4>
        <h3 className="price">₹{price}</h3>
        <button type="button" className="btn" onClick={handeladdtocart}>
          {isadded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
export default Productscard;
