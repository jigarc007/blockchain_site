import styles from "./GetPublishedSection.module.scss";

const GetPublishedSection = () => {
  return (
    <section className={styles.getPublished}>
      <h2>Get Published</h2>
      <div className={styles.publicationOptions}>
        {/* Options for blog, forum, video, etc. */}
        <div className={styles.cards}>
          {/* Repeat the structure for each community */}
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
      </div>
    </section>
  );
};

export default GetPublishedSection;
