import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Products from "../components/Shop/Products";
import Footer from "../components/Layouts/Footer";

const Shop = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        bgImgClass="item-bg2"
      />

      <Products />

      <Footer />
    </>
  );
};

export default Shop;
