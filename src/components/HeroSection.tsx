import styles from "./HeroSection.module.scss";
import it1 from "../../public/images/it1.jpg";
import it3 from "../../public/images/it3.jpg";

import Image from "next/image";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1>
          Empowering Global <br />
          Blockchain Innovations
        </h1>
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.gridItem}>
          <Image src={it1} alt="Tech Events" />
          <div className={styles.overlayText}>Tech Events</div>
        </div>
        <div className={styles.gridItem}>
          <Image src={it1} alt="Incubation" />
          <div className={styles.overlayText}>Incubation</div>
        </div>
        <div className={styles.gridItem}>
          <Image src={it3} alt="Networking" />
          <div className={styles.overlayText}>Networking</div>
        </div>
        <div className={styles.gridItem}>
          <Image src={it1} alt="Community" />
          <div className={styles.overlayText}>Community</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
