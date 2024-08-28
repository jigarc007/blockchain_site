import styles from "./WhyBuildSection.module.scss";
const WhyBuildSection = () => {
  return (
    <section className={styles.whyBuild}>
      <div>
        {/* Video and stats */}
        <iframe
          height={"500px"}
          width={"700px"}
          className={`w-full aspect-video self-stretch md:min-h-96`}
          src={`https://www.youtube.com/embed/oFDeNcu3mnc`}
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
      <div>
        <h2>Why BUILD?</h2>
        <p>
          {'"'}Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{'"'}
        </p>
      </div>
    </section>
  );
};

export default WhyBuildSection;
