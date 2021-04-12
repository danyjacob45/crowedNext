import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Button } from "../components/common/forms/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore: Unreachable code error
import FbIcon from "../svg/fb.svg";
// @ts-ignore: Unreachable code error
import Telegram from "../svg/teleggram.svg";
// @ts-ignore: Unreachable code error
import Youtube from "../svg/youtube.svg";
import { AuthService } from "../services/user/user.http";

const marketing = () => {
  const [presentations, setPresentations] = useState<any>([]);

  useEffect(() => {
    AuthService.presentations().then((res) => {
      setPresentations(
        res.data.presentations
          .filter((el) => el.type == "pdf")
          .map((item) => {
            const countryName = item.title.split(" ")[
              item.title.split(" ").length - 1
            ];
            if (countryName == "TK") {
              item.flag = "https://www.countryflags.io/tr/flat/64.png";
            } else if (countryName == "GER") {
              item.flag = "https://www.countryflags.io/de/flat/64.png";
            } else if (countryName == "RUS") {
              item.flag = "https://www.countryflags.io/ru/flat/64.png";
            } else if (countryName == "VN") {
              item.flag = "https://www.countryflags.io/vn/flat/64.png";
            } else if (countryName == "ES") {
              item.flag = "https://www.countryflags.io/es/flat/64.png";
            } else if (countryName == "EN") {
              item.flag = "https://www.crwflags.com/fotw/images/g/gb-eng.gif";
            } else if (countryName == "CHN") {
              item.flag = "https://www.countryflags.io/cn/flat/64.png";
            } else if (countryName == "POL") {
              item.flag = "https://www.countryflags.io/pl/flat/64.png";
            } else if (countryName == "EST") {
              item.flag = "https://www.countryflags.io/ee/flat/64.png";
            } else if (countryName == "LVA") {
              item.flag =
                "https://cdn.britannica.com/49/6249-004-D8906A92/Flag-Latvia.jpg";
            }
            return item;
          })
      );
      // debugger;
    });
  });

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
                      {presentations.map((el: any) => {
                        return (
                          <li>
                            <a target="_blank" href={el.url}>
                              <span
                                style={{
                                  display: "inline-block",
                                  minWidth: "156px",
                                }}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <img
                                  width="30"
                                  className="mr-2"
                                  src={el.flag}
                                ></img>
                                {el.title}
                              </span>
                            </a>
                          </li>
                        );
                      })}
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
