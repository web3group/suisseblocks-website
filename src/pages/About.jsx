import React from "react";
import styles from "../style";
import FaqSection from "../components/FaqSection";
import Founder from "../components/Founder";
import Hero5 from "../components/Hero5";
import { imgsea } from "../assets";
import Partners from "../components/Partners";
import { Helmet } from "react-helmet";

const About = () => {
  const content = {
    title: "THE PEOPLE BEHIND SUISSEBLOCKS",
    mainTitle: "Strength lies in the experience and network",
    subtitle:
      "We are using new ways to scale, enable SaaS business to grow 6-8x over 5-7 years.",
  };

  return (
    <>
      <Helmet>
        <title>About Suisseblovks - Robert Shemin, Jesper Qvist and the team behind Private Equity.</title>
        {/* about-page meta */}
        <meta name="your-keyword" content="desc" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div
        className={`${styles.flexCenter}`}
        style={{
          backgroundImage: `url("${imgsea}")`,
          backgroundSize: "cover",
        }}
      >
          <div className={`bg-black ${styles.paddingX} ${styles.boxWidth} min-h-[110vh] relative text-white`}>
              <Hero5
                  title={content.title}
                  mainTitle={content.mainTitle}
                  subtitle={content.subtitle}
              />
          </div>
      </div>
      <div className={`${styles.flexCenter} h-full bg-white relative`}>
        <div className={`${styles.paddingX} h-full ${styles.boxWidth}`}>
          <Founder />
        </div>
      </div>
      <div className={`${styles.flexCenter} h-full bg-white`}>
        <div className={`${styles.paddingX} h-full ${styles.boxWidth}`}>
          <Partners />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <FaqSection />
        </div>
      </div>
    </>
  );
};

export default About;
