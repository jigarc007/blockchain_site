import React from "react";
import styles from "./StatsSection.module.scss";

const StatsSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <h2>500+</h2>
          <p>Branches And Boutiques</p>
        </div>
        <div className={styles.statItem}>
          <h2>1</h2>
          <p>Modules</p>
        </div>
        <div className={styles.statItem}>
          <h2>3+</h2>
          <p>Local Initiatives</p>
        </div>
        <div className={styles.statItem}>
          <h2>2+</h2>
          <p>Public Halls</p>
        </div>
        <div className={styles.statItem}>
          <h2>5+</h2>
          <p>Projects Unboxed</p>
        </div>
      </div>
    </div>
  );
};
export default StatsSection;
