import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CheckoutForm from "../components/Shop/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        bgImgClass="item-bg2"
      />

      <CheckoutForm />

      <Footer />
    </>
  );
};

export default Checkout;
