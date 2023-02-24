import { truck } from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={truck} alt="PLD Truck" className="w-[auto] h-[400px] relative z-[5] rounded-[10px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        20+ Years of Experience<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      Honesty, integrity, and hard work are important to us and are integrated into each project. 
      We are customer driven and customer satisfaction is our number one goal. 
      With a wide range of services, and competitive prices, we can fulfill all of your grading and excavating needs.
      </p>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>Managed utility crews and heavy civil crews. Started from the bottom as a laborer and moved up the ladder.</p>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>From laborer to rough grade operator to a finish grade operator, foreman to senior foreman, assistant superintendent to superintendent. Open to all the aspects of the industry, even underground utilities.</p> 

    </div>
  </section>
);

export default About;
