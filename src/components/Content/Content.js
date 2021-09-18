import { Fragment } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function Content() {
  return (
    <Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Fragment>
  );
}

export default Content;
