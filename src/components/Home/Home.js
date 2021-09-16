import Header from "./Header";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className={classes.actions}>
          <button className={classes.startForFree}>Start for Free</button>
          <button className={classes.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
