import styles from "./ResourcesSection.module.scss";

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
        </div>
        <div className={styles.card}>
          <h3>Resources Library</h3>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
