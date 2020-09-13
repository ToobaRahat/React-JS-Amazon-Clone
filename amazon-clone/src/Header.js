import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase.js";

function Header() {
  const [{ basket, user }] = useStateValue(); //put in array to get multiple things [{state}, dispatch]

  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st links */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <spann className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </spann>
          </div>
        </Link>

        {/* 2nd links */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <spann className="header__optionLineTwo">& Orders</spann>
          </div>
        </Link>

        {/* 3rd links */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <spann className="header__optionLineTwo">Prime</spann>
          </div>
        </Link>

        {/* 4th links */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon />

            {/* number of item in the basket  */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
