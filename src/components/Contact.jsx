import styles from "../style";
import Button from "./Button";

const Contact = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Schedule your Free Estimate Today</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
      Please feel free to contact Premier Land Development for estimates, consultations, or any additional information and questions.
      </p>
      <p className={`${styles.paragraph} max-w-[270px] mt-5`}>434-386-1898</p>
      <p className={`${styles.paragraph} max-w-[270px] mt-1 ss:text-[18px] text-[13.8px]`}>jglover@premierlanddevelopment.com</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Contact;
