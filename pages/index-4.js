import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomeFour/MainBanner";
import About from "../components/HomeFour/About";
import Services from "../components/HomeFour/Services";
import Webinar from "../components/HomeFour/Webinar";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import BlogPost from "../components/Common/BlogPost";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

const Index4 = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <Webinar />

      <PartnerContent />

      <FeedbackSlider />

      <PricingCard />

      <BlogPost />
      
      <FreeTrialForm />
      
      <Footer />
    </>
  );
};

export default Index4;
