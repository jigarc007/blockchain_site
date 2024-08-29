import styles from "./ResourcesSection.module.scss";
import {Rocket, Settings} from '@mui/icons-material'
const ResourcesSection = () => {
  return (
    <section className={styles.resources}>
      <div className={styles.textWrapper}>
        <h2>Resources & Support</h2>
        <p>Details about the resources and support.</p>
      </div>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.darkCard}`}>
          <h3>Accelerator Program</h3>
          <Rocket className={styles.belowIcon} />

        </div>
        <div className={styles.card}>
          <h3>Resources Library</h3>
          <Settings className={styles.belowIcon} />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
