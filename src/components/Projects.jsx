import { cabView } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Projects = () => (
  <section id="projects" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Our fleet of top-performing machines ensures you’re <br className="sm:block hidden" />   getting the best service around.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our Equiment Includes: 306CR Excavator, 279D3 Skidsteer, 10 Ton Dump Truck, 10 Ton Equipment Trailer, with attachments
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={cabView} alt="cab view" className="w-[550px] h-[auto] rounded-[10px]" />
    </div>
  </section>
);

export default Projects;
