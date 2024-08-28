import styles from "./EventsSection.module.scss";

const EventsSection = () => {
  const events = [
    {
      title: "Build Hackathon",
      description: "Join us for the ultimate event for tech enthusiasts!",
      imageUrl: "../../public/images/card_back.jpg",
    },
    {
      title: "Networking Summit",
      description: "Meet industry leaders and discover new opportunities.",
      imageUrl: "../../public/images/card_back.jpg",
    },
    {
      title: "Be A Sponsor",
      description: "Support our events and get your brand noticed.",
      imageUrl: "../../public/images/card_back.jpg",
    },
  ];
  return (
    <section className={styles.events}>
      <h2>Events</h2>
      <div className={styles.eventCards}>
        {events.map(({ title, imageUrl, description }, index) => (
          <div key={title} className={styles.eventCard} style={{ backgroundImage: `url(${imageUrl})` }}> 
            <div className={styles.cardContent}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className={styles.cardIcon}>
             &#43;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
// const EventsSection = () => {

//   return (
//     <div className={styles.events}>
//       <h2>Events</h2>
//       <div className={styles.cards}>
//       {events.map(({title,imageUrl,description}, index) => (
//          <div key={`${title}`} className={styles.card} style={{ backgroundImage: `url('../../public/images/card_back.jpg')` }}>
//          <div className={styles.content}>
//            <h3>{title}</h3>
//            <p>{description}</p>
//          </div>
//          <div className={styles.iconContainer}>
//           <span className={styles.icon}> &#43;</span>

//          </div>
//          </div>
//       ))}
//       </div>
//     </div>
//   );
// };

export default EventsSection;
