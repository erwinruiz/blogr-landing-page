import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src="./images/logo.svg" alt="logo" />
      <img className={classes.menuIcon} src="./images/icon-hamburger.svg" alt="hamburger icon" />
    </header>
  );
}

export default Header;
