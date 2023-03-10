import styles from "../style";
// import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-3 w-full`}>
      {/* <div className="flex-[1] flex flex-col justify-start">
        <img
          src={logo}
          alt="pld logo"
          className="w-[200px] h-[200px] -mt-7"
        />
        <p className={`${styles.paragraph} max-w-[312px]`}>
          Land Clearing, Forestry Mulching, Demolition, and ground services
        </p>
      </div> */}

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex align-middle justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Premier Land Development. All Rights Reserved.
      </p>
      <div class="mini-footer">
			<a
				href="https://www.mirandathomasson.com/"
				target="_blank"
				rel="noreferrer"
				>➡️ Built and Maintained by: Miranda Thomasson 👋🏼</a
			>
		</div>

      <div className="flex flex-row md:mt-0 mt-6 fb-icon">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[35px] h-[35px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
