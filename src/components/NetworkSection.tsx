import styles from "./NetworkSection.module.scss";

const NetworkSection = () => {
  return (
    <section className={styles.network}>
      <h2>Network & Communities</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Partners Network</h3>
          <p>
            Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Student Network</h3>
          <p>
            Lorem ipsum dolor sit. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Business Network</h3>
          <p>
            Lorem ipsum dolor sit. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Developers Network</h3>
          <p>
            Lorem ipsum dolor sit. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
