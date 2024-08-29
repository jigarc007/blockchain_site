import styles from "./GetPublishedSection.module.scss";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";

const networkCommunityData = [
  {
    id: 1,
    text: "Partners Network",
    description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 1,
    text: "Student Network",
    description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 1,
    text: "Business Network",
    description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 1,
    text: "Developers Network",
    description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
];
const GetPublishedSection = () => {
  return (
    <section className={styles.getPublished}>
      <h2>Get Published</h2>
      <div className={styles.publicationOptions}>
        {/* Options for blog, forum, video, etc. */}
        <div className={styles.cards}>
          {networkCommunityData?.map(({ text, description }) => (
            <div key={`${text}`} className={styles.card}>
              <div className={styles.arrowWrapper}>
                <CallMadeRoundedIcon />
              </div>
              <h3>{text}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetPublishedSection;
