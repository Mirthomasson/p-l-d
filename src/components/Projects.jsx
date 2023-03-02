import { cabView } from "../assets";
import { skid } from "../assets";
import { layout } from "../style";
// import Button from "./Button";

const Projects = () => (
  <section id="projects" className={`${layout.section} gap-[5em]`}>
{/*    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        EMPTY
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        EMPTY 
      </p>

      <Button styles={`mt-10`} />
</div> */}
<div className={layout.sectionImg}>
      <img src={skid} alt="skidsteer" className="w-[550px] h-[auto] rounded-[10px]" />
    </div>

    <div className={layout.sectionImg}>
      <img src={cabView} alt="cab view" className="w-[550px] h-[auto] rounded-[10px]" />
    </div>
  </section>
);

export default Projects;
