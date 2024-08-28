import styles from "./EventsSection.module.scss";

const EventsSection = () => {
  return (
    <section className={styles.events}>
      <h2>Events</h2>
      <div className={styles.eventCards}>
        <div className={styles.eventCard}>
          <div className={styles.cardContent}>
            <h3>Build Hackathon</h3>
            <p>Details about the event.</p>
          </div>
          <div className={styles.cardIcon}>
            <i className="icon">+</i>
          </div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.cardContent}>
            <h3>Networking Summit</h3>
            <p>Details about the event.</p>
          </div>
          <div className={styles.cardIcon}>
            <i className="icon">+</i>
          </div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.cardContent}>
            <h3>Be A Sponsor</h3>
            <p>Details about the event.</p>
          </div>
          <div className={styles.cardIcon}>
            <i className="icon">+</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
