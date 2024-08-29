import { Avatar } from "@mui/material";
import styles from "./WhyBuildSection.module.scss";
const WhyBuildSection = () => {
  return (
    <section className={styles.whyBuild}>
      <div className={styles.videoWrapper}>
        {/* Video and stats */}
        <iframe
          className={`w-full aspect-video self-stretch md:min-h-96 ${styles.frameWidth}`}
          src={`https://www.youtube.com/embed/oFDeNcu3mnc`}
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
      <div className={styles.buildSection}>
        <h2>Why BUILD?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
        <div className={styles.avatarWrapper}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <span style={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems:'flex-start'}}>
        <p style={{color:'#000',fontWeight: 'bold',fontSize: '16px', margin: '0'}}>john wick</p>
        <p style={{color:'#808080',fontSize: '12px'}}>Software Developer</p>
        </span>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildSection;
