import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ProjectsDetailsContent from "../components/Projects/ProjectsDetailsContent";

const ProjectsDetails = () => {
  return (
    <>
      <NavbarTwo />
      
      <PageBanner
        pageTitle="Projects Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects Details"
        bgImgClass="item-bg2"
      />

      <ProjectsDetailsContent />

      <Footer />
    </>
  );
};

export default ProjectsDetails;
