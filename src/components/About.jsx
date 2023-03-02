import { truck } from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={truck} alt="PLD Truck" className="w-[auto] max-h-[300px] relative z-[5] rounded-[10px]" />

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
      Excavation & Grading services at affordable prices.
      </p>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>We specialize in Residential & Commercial Site Development, encompassing all phases that ensure the success of any new or existing construction project from start to finish.</p>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>Our services include Land Clearing, Fine Grading, Soil Erosion, Level Building Sites, Roadway, Forestry Management, Farm Management, Storm Drainage & Retention Ponds, Pond Remediation, Land Mulching, Basements, Under Drain Installation, Demolition, Hauling.</p> 

    </div>
  </section>
);

export default About;
