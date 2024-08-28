import styles from "./JoinUsSection.module.scss";
import Image from "next/image";

const JoinUsSection = () => {
  return (
    <section className={styles.joinUs}>
      <div className={styles.textWrapper}>
        <h2>Join Us</h2>
        <p>Connect with us with different social media platform</p>
      </div>
      <div className={styles.socialLinks}>
        {/* Social Media Links */}
        <Image
          src={require("/public/images/facebook.png")}
          alt="facebook"
          className={styles.socialIcon}
        />
        <Image
          src={require("/public/images/instagram.png")}
          alt="instagram"
          className={styles.socialIcon}
        />
        <Image
          src={require("/public/images/linkedin.png")}
          alt="linkedin"
          className={styles.socialIcon}
        />
        <Image
          src={require("/public/images/twiter.png")}
          alt="twiter"
          className={styles.socialIcon}
        />
        <Image
          src={require("/public/images/telegram.png")}
          alt="telegram"
          className={styles.socialIcon}
        />

      </div>
    </section>
  );
};

export default JoinUsSection;
