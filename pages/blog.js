import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
        bgImgClass="item-bg2"
      />

      <BlogThreeGrid />

      <Footer />
    </>
  );
};

export default Blog;
