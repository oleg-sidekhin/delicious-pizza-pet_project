import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLogo}>
        <img src="img/logo.png" alt="logo" className={classes.logoImage} />
        <span className={classes.logoText}>Delicious Pizza</span>
      </div>
      <span className={classes.footerAuthor}>by Oleg Sidekhin © 2023</span>
    </footer>
  );
}

export default Footer;
