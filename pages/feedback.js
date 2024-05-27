import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Testimonials from "../components/HomeTwo/Testimonials";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import CustomerFeedback from "../components/HomeFive/CustomerFeedback";
import Footer from "../components/Layouts/Footer";

const Feedback = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Feedback"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Feedback"
        bgImgClass="item-bg3"
      />

      <Testimonials />

      <FeedbackSlider />

      <CustomerFeedback />

      <Footer />
    </>
  );
};

export default Feedback;
