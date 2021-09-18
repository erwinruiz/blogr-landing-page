import classes from "./ThirdSection.module.css";

function ThirdSection() {
  return (
    <section className={classes.container}>
      <img
        src="./images/illustration-laptop-mobile.svg"
        alt="illustration laptop mobile"
      />
      <div className={classes.textContent}>
        <h2>Free, open, simple</h2>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </div>
      <div className={classes.textContent}>
        <h2>Powerful tooling</h2>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  );
}

export default ThirdSection;
