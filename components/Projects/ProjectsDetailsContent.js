import React from "react";

const ProjectsDetailsContent = () => {
  return (
    <>
      <div className="projects-details-area ptb-110">
        <div className="container">
          <div className="projects-details">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="projects-details-image">
                  <img src="/images/projects-img1.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="projects-details-image">
                  <img src="/images/projects-img2.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="projects-details-info">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <ul>
                        <li>
                          <span>Customer Name:</span> Steven Smith
                        </li>
                        <li>
                          <span>Category:</span> Design, Idea
                        </li>
                        <li>
                          <span>Start Date:</span> February 20, 2020
                        </li>
                        <li>
                          <span>End Date:</span> February 28, 2020
                        </li>
                        <li>
                          <span>Status:</span> Finished
                        </li>
                        <li>
                          <span>Demo Link:</span>{" "}
                          <a href="#">www.bariton.com</a>
                        </li>
                        <li>
                          <span>Tags:</span> App, Design, Web, Dev
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects-details-desc">
              <h3>Incredible Infrastructure</h3>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis. Primis nost rud no
                eos, no impedit dissenti as mea, ea vide labor amus neglegentur
                vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.
              </p>

              <p>
                Ad po exerci nusquam eos te. Cu altera expet enda qui, munere
                oblique theo phrastu ea vix. Ne nec modus civibus modera tius,
                sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu
                altera expetenda qui, munere oblique theophr astus ea vix modus
                civiu mod eratius.
              </p>

              <blockquote className="wp-block-quote">
                <p className="mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </blockquote>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis.
              </p>

              <p>
                Nost rud no eos, no impedit dissenti as mea, ea vide labor amus
                neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet
                nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui,
                munere oblique theo phrastu ea vix. Ne nec modus civibus modera
                tius, sit ei lorem doctus. Ne docen di verterem reformidans eos.
                Cu altera expetenda qui, munere oblique theophr astus ea vix
                modus civiu mod eratius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsContent;
