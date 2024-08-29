import styles from "./NetworkSection.module.scss";
import { Rocket, Computer, Book, NetworkCell, Business } from "@mui/icons-material";
const NetworkSection = () => {
  const networkCommunityData = [
    {
      id: 1,
      text: "Partners Network",
      description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      icon: <NetworkCell />,
    },
    {
      id: 1,
      text: "Student Network",
      description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      icon: <Book />,

    },
    {
      id: 1,
      text: "Business Network",
      description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      icon: <Rocket />,

    },
    {
      id: 1,
      text: "Developers Network",
      description: ` Lorem ipsum dolor sit. Ut enim ad mi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      icon: <Computer />,

    },
  ];
  return (
    <section className={styles.network}>
      <h2>Network & Communities</h2>
      <div className={styles.cards}>
        {networkCommunityData?.map(({ text, description, icon }) => (
          <div key={`${text}`} className={styles.card}>
            {icon}
            <h3>{text}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkSection;
