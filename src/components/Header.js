import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/slices/cartSlice";
import { togglewishlist } from "../store/slices/wishlistslices";
import { RiHeart3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  const { cartItem } = useSelector((state) => state.cart);

  const { wishlistData } = useSelector((state) => state.Wishlist);

  const dispatch = useDispatch();

  const handleOpencart = (open) => {
    dispatch(toggleCart(open));
  };

  const handeladdtowishlist = (open) => {
    dispatch(togglewishlist(open));
  };

  const cartQuantity = cartItem.length;
  const wishQuantity = wishlistData.length;

  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h3>E Shoping</h3>
            <Link to="/">
              <h4>Home</h4>
            </Link>

            <Link to="/tv">TV</Link>
            <Link to="/mobile">MOBILE</Link>
            <Link to="/boat">ACCESSORIES</Link>
            <div className="userc">
              <Link to="/login">
                Login &nbsp; <i class="bx bxs-user icon-user"></i>
              </Link>
            </div>

            <div className="nav_menu">
              <div className="wishset">
                <div onClick={() => handeladdtowishlist(true)}>
                  <RiHeart3Line />
                  <sup>
                    <span className="badge">{wishQuantity}</span>
                  </sup>
                </div>
              </div>
              <div
                title="cart"
                className="cart_icon"
                onClick={() => handleOpencart(true)}
              >
                <img src="/images/bag-icon.svg" alt="bag-icon"></img>
                <sup>
                  <span className="badge">{cartQuantity}</span>
                </sup>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
