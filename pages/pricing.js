import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PricingCard from "../components/Pricing/PricingCard";
import Footer from "../components/Layouts/Footer";

const Pricing = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Our Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImgClass="item-bg3"
      />

      <PricingCard />

      <Footer />
    </>
  );
};

export default Pricing;
