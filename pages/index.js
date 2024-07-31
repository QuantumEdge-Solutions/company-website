import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import MainBanner from "../components/HomeThree/MainBanner";
import Services from "../components/HomeThree/Services";
import FunFacts from "../components/HomeThree/FunFacts";
import Projects from "../components/HomeThree/Projects";
import Testimonials from "../components/HomeThree/Testimonials";
import BlogPost from "../components/Common/BlogPost";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Services />

      <FunFacts />

      <Projects />

      <Testimonials />

      <BlogPost />
      
      <PartnerSlider />

      <Footer />

      <iframe
        src="https://quantumedge-bot.netlify.app"
        style={{
          zIndex: 999,
          position: "fixed",
          bottom: "70px",
          right: "20px",
          height: "450px",
          width: "350px",
          maxWidth: "90vw",
          maxHeight: "65vh",
          border: "none",
          display: "block",
          borderRadius: "20px",
          opacity: 1,
          transition: "opacity 0.2s ease-in-out 0s",
          userSelect: "none",
        }}
      ></iframe>
    </>
  );
};

export default Index;