import React from "react";
import styles from "./NewsletterSubscription.module.scss";

const NewsletterSubscription = () => {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.headingWrapper}>
        <h3>Subscribe</h3>
        <h3>To Our Newsletter</h3>
        <p>Get timely updates and business-oriented content in your inbox.</p>
      </div>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
        />
        <button type="submit" className={styles.subscribeButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default NewsletterSubscription;
