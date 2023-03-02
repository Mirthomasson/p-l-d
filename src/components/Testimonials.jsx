import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { fb, goo } from "../assets";

const Testimonials = () => (
  <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex justify-center align-middle items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] gap-40">
      <h2 className={`${styles.heading2}`}>
        Testimonials<br className="sm:block hidden" /> 
        <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[500px]`}>
        We are so thankful for the amazing feedback we receive from our customers and associates! 
        Completing a review is a great way to let us know about your experience with Premier Land Development.
        <br></br>Please take a moment to share your review with us on these sites:
        </p>
        <div className="flex flex-row justify-start items-center">
        <a href="https://g.page/r/CZ44LDTRjjr1EB0/review" target="_blank"><img src={goo} alt='google review button' className="google-review"/></a>
        <a href="https://www.facebook.com/profile.php?id=100088992085987&sk=reviews" target="_blank"><img src={fb} alt='facebook review button' className="fb-review"/></a>
        </div>
      </div>
      </h2>
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    </div>

  </section>
);

export default Testimonials;
