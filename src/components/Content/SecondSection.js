import classes from "./SecondSection.module.css";

function SecondSection() {
  return (
    <section className={classes.container}>
      <img src="./images/illustration-phones.svg" alt="phones illustration" />
      <div className={classes.textContent}>
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}

export default SecondSection;
