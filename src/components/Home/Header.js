import { Fragment, useState } from "react";
import MobileMenu from "../UI/MobileMenu";
import classes from "./Header.module.css";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen((state) => !state);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <img src="./images/logo.svg" alt="logo" />
        {!menuIsOpen && (
          <img
            onClick={menuHandler}
            className={classes.menuIcon}
            src="./images/icon-hamburger.svg"
            alt="hamburger icon"
          />
        )}
        {menuIsOpen && (
          <img
            onClick={menuHandler}
            className={classes.menuIcon}
            src="./images/icon-close.svg"
            alt="close icon"
          />
        )}
      </header>
      {menuIsOpen && <MobileMenu onClose={menuHandler} />}
    </Fragment>
  );
}

export default Header;
