import styles from "../style";
import { cat, square } from "../assets";

function message(e) {
  e.preventDefault();
  
  if (navigator.userAgent.match(/(Android)/i|/(iPhone)/i)) {
     window.open('sms://4343861898');
  }
}

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} -mt-14 mx-12`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6 px-6`}>
        <div onClick={message} className="estimate flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={square} alt="square" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Call or Text</span> for a{" "}
            <span className="text-white">Free Estimate</span>: 434-386-1898
          </p>
        </div>

        <div className="flex flex-row justify-around items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            Premier Land Development<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Excavating & Grading</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        {/* BLANK */}
        </h1>
        <p className={`${styles.paragraph} max-w-[440px] mt-5`}>
        Land Clearing, Forestry Mulching, Demolition, and ground services
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={cat} alt="cat" className="w-[750px] h-[auto] relative z-[5] rounded-[10px]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
