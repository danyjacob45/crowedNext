import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React from "react";
import { Button } from "../components/common/forms/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore: Unreachable code error
import FbIcon from "../svg/fb.svg";
// @ts-ignore: Unreachable code error
import Telegram from "../svg/teleggram.svg";
// @ts-ignore: Unreachable code error
import Youtube from "../svg/youtube.svg";

const marketing = () => {
  return (
    <Layout title="marketing">
      <div className="main-content">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">
            <div className="row  pt-5">
              <div className="col-md-12">
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12 videoWrapper ">
                      In order to provide our affiliates the best possible
                      support in building up their business, we have provided
                      you with all the important marketing materials in this
                      area. If you need further marketing material, please do
                      not hesitate to contact our support team on Telegram
                      @CrowdGrowingSupport.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row marketing pt-5">
              <div className="col-lg-3">
                <span> Presentations </span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    <ul className="pl-0 marketingList">
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_turkish.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF TK
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_german.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF GER
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_russian.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF RUS
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_vietnamese.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF VN
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_spanish.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF ES
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_spanish.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF EN
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_chinese.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF CHN
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_polish.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF POL
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_estonian.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF EST
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_latvian.pdf"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              minWidth: "156px",
                            }}
                          >
                            Business Presentation PDF LVA
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span> Video </span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    <ul className="pl-0 marketingList">
                      <li>
                        <a href="https://www.youtube.com/watch?v=F7dcJW02fKw&amp;t=18s">
                          <span> Welcome Video </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=7t8hiv8GJhU">
                          <span> Crowd Growing Teaser </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=VPh5c1CE1vY">
                          <span> Business Presentation Video </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://m.youtube.com/watch?v=hZxG6fAt6Yc">
                          <span> Product Video </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=NftiVBVg8rk">
                          <span> Growing Step One - Clones </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span> Media </span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    <ul className="pl-0 marketingList">
                      <li>
                        <a
                          target="_blank"
                          href="https://crowd-growing.com/mlm-landing/static/media/design_guide.pdf"
                        >
                          <span> Design Guide </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span> Social Media </span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    <ul className="pl-0">
                      <li>
                        <a href="https://cutt.ly/cgfb">
                          <span className="socialSpan fb">
                            <FbIcon />
                            facebook
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://cutt.ly/cgtg">
                          <span className="socialSpan tg ">
                            <Telegram />
                            telegram
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://cutt.ly/cgyt">
                          <span className="socialSpan tube">
                            <Youtube />
                            youtube
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default marketing;
