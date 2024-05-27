import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CartTable from "../components/Shop/CartTable";

const Cart = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        bgImgClass="item-bg1"
      />

      <CartTable />

      <Footer />
    </>
  );
};

export default Cart;
