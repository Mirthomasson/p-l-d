import styles from "./style";
import { Billing, Services, Projects, Contact, Footer, Navbar, Hero, Clients } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Services />
        <Billing />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
