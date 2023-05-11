import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglewishlist, removeItemwish } from "../store/slices/wishlistslices";
import { RiHeart3Line } from "react-icons/ri";

const Wishlist = () => {
  const { isWishlistOpen, wishlistData } = useSelector(
    (state) => state.Wishlist
  );

  const dispatch = useDispatch();

  const handleClosecart1 = (close) => {
    dispatch(togglewishlist(close));
  };

  const handleRemove1 = (itemId) => {
    dispatch(removeItemwish(itemId));
  };

  const wishQuantity = wishlistData.length;
  return (
    <div>
      {isWishlistOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Wishlist<small>({wishQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleClosecart1(false)}
              >
                <span>&times;</span> 
              </div>
            </div>
            <div className="cart_body">
              {wishQuantity === 0 ? (
                <h2>Wishlist is Empty</h2>
              ) : (
                wishlistData.map((item) => {
                  const { id, img, title, price } = item;
                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="product-img" />
                      </figure>

                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">₹ {price.toLocaleString()}</h3>
                      </div>
                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => handleRemove1(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
