import classes from "./Menu.module.css";
import ReactDOM from "react-dom";
import { Fragment, useReducer } from "react";

const darkArrowImg = (
  <img src="./images/icon-arrow-dark.svg" alt="icon-arrow-dark.svg" />
);
const lightArrowImg = (
  <img src="./images/icon-arrow-light.svg" alt="icon-arrow-dark.svg" />
);

const initialState = {
  showProduct: false,
  showCompany: false,
  showConnect: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...initialState, showProduct: !state.showProduct };

    case "COMPANY":
      return { ...initialState, showCompany: !state.showCompany };

    case "CONNECT":
      return { ...initialState, showConnect: !state.showConnect };

    case "CLOSE_ACTIVE_SECTION":
      return initialState;

    default:
      return state;
  }
};

function Menu(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const productHandler = () => {
    dispatch({ type: "PRODUCT" });
  };
  const companyHandler = () => {
    dispatch({ type: "COMPANY" });
  };
  const connectHandler = () => {
    dispatch({ type: "CONNECT" });
  };

  const closeMenuSectionHandler = () => {
    dispatch({ type: "CLOSE_ACTIVE_SECTION" });
  };

  const Backdrop = (props) => {
    let backdropActiveOnDesktop = "";
    if (state.showProduct || state.showCompany || state.showConnect) {
      backdropActiveOnDesktop = `${classes.backdropActive}`;
    }

    return (
      <div
        className={`${props.className} ${classes.backdrop} ${backdropActiveOnDesktop}`}
        onClick={props.onClose}
      ></div>
    );
  };

  const Menu = (props) => {
    return (
      <div className={`${props.className} ${classes.menu}`}>
        <div className={classes.sections}>
          <div className={classes.section}>
            <h4
              onClick={productHandler}
              className={state.showProduct ? classes.activeSection : ""}
            >
              Product {props.img}
            </h4>
            {state.showProduct && (
              <div className={classes.content}>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>Integrations</p>
              </div>
            )}
          </div>

          <div className={classes.section}>
            <h4
              onClick={companyHandler}
              className={state.showCompany ? classes.activeSection : ""}
            >
              Company {props.img}
            </h4>
            {state.showCompany && (
              <div className={classes.content}>
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Careers</p>
              </div>
            )}
          </div>

          <div className={classes.section}>
            <h4
              onClick={connectHandler}
              className={state.showConnect ? classes.activeSection : ""}
            >
              Connect {props.img}
            </h4>
            {state.showConnect && (
              <div className={classes.content}>
                <p>Contact</p>
                <p>Newsletter</p>
                <p>LinkedIn</p>
              </div>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <h4 className={classes.login}>Login</h4>
          <button className={classes.signUp}>Sign Up</button>
        </div>
      </div>
    );
  };

  // Show only on mobile/tablet design
  if (props.type === "mobile") {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} className={classes.mobileMenu} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <Menu className={classes.mobileMenu} img={darkArrowImg} />,
          document.getElementById("overlay-root")
        )}
      </Fragment>
    );
  }

  // Show only on desktop design
  if (props.type === "desktop") {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop
            onClose={closeMenuSectionHandler}
            className={classes.backdropDesktop}
          />,
          document.getElementById("backdrop-root")
        )}
        <Menu className={classes.desktopMenu} img={lightArrowImg} />
      </Fragment>
    );
  }
}

export default Menu;
