import classes from "./MobileMenu.module.css";
import ReactDOM from "react-dom";
import { Fragment, useReducer } from "react";

const arrowImg = (
  <img src="./images/icon-arrow-dark.svg" alt="icon-arrow-dark.svg" />
);

const initialState = {
  showProduct: false,
  showCompany: false,
  showConnect: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "product":
      return { ...initialState, showProduct: !state.showProduct };

    case "company":
      return { ...initialState, showCompany: !state.showCompany };

    case "connect":
      return { ...initialState, showConnect: !state.showConnect };

    default:
      return state;
  }
};

function MobileMenu(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const productHandler = () => {
    dispatch({ type: "product" });
  };
  const companyHandler = () => {
    dispatch({ type: "company" });
  };
  const connectHandler = () => {
    dispatch({ type: "connect" });
  };

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
  };

  const Menu = () => {
    return (
      <div className={classes.mobileMenu}>
        <div className={classes.sections}>
          <div className={classes.section}>
            <h4
              onClick={productHandler}
              className={state.showProduct ? classes.activeSection : ""}
            >
              Product {arrowImg}
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
              Company {arrowImg}
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
              Connect {arrowImg}
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

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<Menu />, document.getElementById("overlay-root"))}
    </Fragment>
  );
}

export default MobileMenu;
