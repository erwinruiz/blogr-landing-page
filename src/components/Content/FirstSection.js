import classes from "./FirstSection.module.css";

function FirstSection() {
  return (
    <section className={classes.container}>
      <h2 className={classes.firstTitle}>Designed for the future</h2>
      <img
        className={classes.mobileImg}
        src="./images/illustration-editor-mobile.svg"
        alt="illustration-editor-mobile"
      />
      <div className={`${classes.textContent} ${classes.firstTextContent}`}>
        <h2>Introducing an extensible editor</h2>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>
      <div className={`${classes.textContent} ${classes.secondTextContent}`}>
        <h2>Robust content management</h2>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </section>
  );
}

export default FirstSection;
