import classes from './Footer.module.scss';

function Footer() {
   return (
      <div className={classes.footer}>
         <div className={classes.footerLogo}>
            <img src="img/logo.png" alt="logo" className={classes.logoImage} />
            <span className={classes.logoText}>Delicious Pizza</span>
         </div>
         <span className={classes.footerAuthor}>by Oleg Sidekhin</span>
      </div>
   );
}

export default Footer;
