import styles from "./EventsSection.module.scss";
import back from '/public/images/card_back.jpg'
const EventsSection = () => {
  const events = [
    {
      title: "Build Hackathon",
      description: "Join us for the ultimate event for tech enthusiasts!",
      imageUrl: back.src,
    },
    {
      title: "Networking Summit",
      description: "Meet industry leaders and discover new opportunities.",
      imageUrl: back.src,
    },
    {
      title: "Be A Sponsor",
      description: "Support our events and get your brand noticed.",
      imageUrl: back.src,
    },
  ];
  return (
    <section className={styles.events}>
      <h2>Events</h2>
      <div className={styles.eventCards}>
        {events.map(({ title, imageUrl, description }, index) => (
          <div key={title} className={styles.eventCard} > 
            <div className={styles.cardContent} style={{ backgroundImage: `url(${imageUrl})`}}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className={styles.cardIcon}>
              <span className={styles.plusIcon}>&#43;</span>
           
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
