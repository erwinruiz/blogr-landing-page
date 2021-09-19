import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <img src="./images/logo.svg" alt="logo" />

      <div className={classes.section}>
        <h4>Product</h4>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h4>Connect</h4>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
