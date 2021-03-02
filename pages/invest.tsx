import React, { useState } from "react";
import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import { Button } from "../components/common/forms/button";
import classnames from "classnames";
import ModalContainer from "../components/common/modal/modalContainer";
import { AuthService } from "../services/user/user.http";
const investTypes = {
  FOUNDER: "FOUNDER",
  PROFESSIONAL: "PROFESSIONAL",
  ADVANCED: "ADVANCED",
  BEGINNER: "BEGINNER",
};

const investment = () => {
  const [activeInvest, setActiveInvest] = useState("");
  const [amount, setAmount] = useState(0);
  const [modal, SetModal] = useState(false);
  const [profit, setProfit] = useState<any>(null);
  const [success, setSuccess] = useState<any>(null);

  const calculateInvestment = (amount) => {
    AuthService.calcInvestment({ amount })
      .then((res) => {
        setProfit(res.data);
        // debugger;
      })
      .catch((err) => {
        // debugger;
        if (err.response?.data?.errors) {
          // debugger;
          setProfit(err.response?.data?.errors?.PLANS);
        } else {
          setProfit("something went wrong");
        }
      });
  };

  const investHandler = () => {
    AuthService.investment({ amount })
      .then((res) => {
        // debugger;
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        // setSuccess(true);

        // return;
        SetModal(false);

        if (err.response?.data?.errors) {
          // debugger;
          setProfit(err.response?.data?.errors?.PLANS);
        } else {
          setProfit("something went wrong");
        }
      });
  };

  const closeModal = () => {
    setSuccess(false);
    SetModal(false);
  };

  const successModal = () => {
    return (
      <div
        className="sweet-alert  showSweetAlert visible"
        data-custom-className=""
        data-has-cancel-button="false"
        data-has-confirm-button="true"
        data-allow-outside-click="false"
        data-has-done-function="false"
        data-animation="pop"
        data-timer="null"
        style={{ display: "inline-block" }}
      >
        {/* <div className="sa-icon sa-warning" style="display: none;">
<span className="sa-body"></span>
<span className="sa-dot"></span>
</div> */}
        {/* <div className="sa-icon sa-info" style="display: none;">
</div> */}
        <div className="sa-icon sa-success animate">
          <span className="sa-line sa-tip animateSuccessTip"></span>
          <span className="sa-line sa-long animateSuccessLong"></span>

          <div className="sa-fix"></div>
          <div className="sa-placeholder"></div>
          {/* </div><div className="sa-icon sa-custom" style="display: none;"></div> */}
        </div>
        <h2 style={{ color: "#000" }}>Success Investment!</h2>

        <div className="sa-button-container">
          <div className="sa-confirm-button-container">
            <button
              onClick={() => closeModal()}
              className="confirm btn btn-lg btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="investment">
      <ModalContainer showModal={modal} closeModal={() => SetModal(false)}>
        {success ? (
          successModal()
        ) : (
          <>
            <div className="modal-body">
              <h4
                style={{ color: "#000" }}
                className="text-center invetModalText"
              >
                You are going to invest {amount} $
              </h4>
            </div>
            <div
              className="modal-footer justify-content-center "
              style={{ alignSelf: "center" }}
            >
              <button
                type="button"
                className="btn btn-primary confirmInvest  d-block"
                data-dismiss="modal"
                onClick={investHandler}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-danger infoModalClose ml-4 cancelInvestment d-block"
                onClick={() => {
                  SetModal(false);
                }}
              >
                cancel
              </button>
            </div>
          </>
        )}
      </ModalContainer>
      <div className="main-content">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">
            <div className="row">
              <div className="col-md-12">
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12 videoWrapper ">
                      <p>
                        Crowd Growing offers customers the opportunity to invest
                        in growing equipment and then host it for its customers.
                        <br />
                        Every customer can already participate in Crowd Growing
                        by purchasing equipment, starting from 100$ and can
                        expect returns of up to 8-10% on average per month, paid
                        out weekly.
                        <br />
                        The different hosting plans thereby have no impact on
                        the distribution of profits, only on the duration of the
                        hosting and the referral program.
                        <br />
                        For the first 1000 users, who decide to participate in
                        Crowd Growing with 10000$ or more, we have reserved
                        so-called founder plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className={classnames("col-md-3  Starter investTypes ", {
                  active: activeInvest === investTypes.BEGINNER,
                })}
              >
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12">
                      <img
                        className="freeImgs"
                        src="/assets/ranks/logoFFF.png "
                      />
                      <div className="row">
                        <div className="col-12">
                          <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Beginner
                          </h4>
                        </div>
                      </div>
                      <div className="priceRange_Line display-2 text-dark text-center">
                        <div className="pricesLine mt-4">
                          <div className="linContainer">
                            <div className="startPrice">$100</div>
                            <div className="endPrice">$999</div>
                            <div className="leftTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                            <div className="centralLine"></div>
                            <div className="rightTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="text-sm text-white font-13 mb-0 text-left">
                        <p>
                          Monthly profit 8% – 10%
                          <br />
                          weekly payouts
                          <br />
                          hosting time: 1000 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classnames("col-md-3  Advanced investTypes ", {
                  active: activeInvest === investTypes.ADVANCED,
                })}
              >
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12">
                      <img
                        className="freeImgs"
                        src="/assets/ranks/logoFFF.png "
                      />
                      <div className="row">
                        <div className="col-12">
                          <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Advanced
                          </h4>
                        </div>
                      </div>
                      <div className="priceRange_Line display-2 text-dark text-center">
                        <div className="pricesLine mt-4">
                          <div className="linContainer">
                            <div className="startPrice">$1000</div>
                            <div className="endPrice">$2499</div>
                            <div className="leftTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                            <div className="centralLine"></div>
                            <div className="rightTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="text-sm text-white font-13 mb-0 text-left">
                        <p>
                          Monthly profit 8% – 10%
                          <br />
                          weekly payouts
                          <br />
                          hosting time: 950 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classnames("col-md-3  Pro investTypes ", {
                  active: activeInvest === investTypes.PROFESSIONAL,
                })}
              >
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12">
                      <img
                        className="freeImgs"
                        src="/assets/ranks/logoFFF.png "
                      />
                      <div className="row">
                        <div className="col-12">
                          <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Professional
                          </h4>
                        </div>
                      </div>
                      <div className="priceRange_Line display-2 text-dark text-center">
                        <div className="pricesLine mt-4">
                          <div className="linContainer">
                            <div className="startPrice">$2500</div>
                            <div className="endPrice">$9999</div>
                            <div className="leftTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                            <div className="centralLine"></div>
                            <div className="rightTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="text-sm text-white font-13 mb-0 text-left">
                        <p>
                          Monthly profit 8% – 10%
                          <br />
                          weekly payouts
                          <br />
                          hosting time: 900 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classnames("col-md-3  Founder investTypes ", {
                  active: activeInvest === investTypes.FOUNDER,
                })}
              >
                <div className="pricing card-group flex-column flex-md-row mb-3">
                  <div className="card card-pricing border-0 bg-white text-center mb-4">
                    <div className="card-body px-lg-12">
                      <img
                        className="freeImgs"
                        src="/assets/ranks/logoFFF.png "
                      />
                      <div className="row">
                        <div className="col-12">
                          <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Founder
                          </h4>
                        </div>
                      </div>
                      <div className="priceRange_Line display-2 text-dark text-center">
                        <div className="pricesLine mt-4">
                          <div className="linContainer">
                            <div className="startPrice">$10000</div>
                            <div className="endPrice">$100000</div>
                            <div className="leftTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                            <div className="centralLine"></div>
                            <div className="rightTube Tube">
                              <i className="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="text-sm text-white font-13 mb-0 text-left">
                        <p>
                          Monthly profit 8% – 10%
                          <br />
                          weekly payouts
                          <br />
                          extra 1% – 3% monthly
                          <br />
                          hosting time: 800 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="investForm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  SetModal(true);
                }}
                className="text-center"
              >
                <input
                  type="number"
                  name="amount"
                  id="investInput"
                  min="100"
                  placeholder="Invest value"
                  className="form-control amount"
                  onChange={(e: any) => {
                    closeModal();
                    setAmount(e.target.value);
                    if (e.target.value >= 10000) {
                      setActiveInvest(investTypes.FOUNDER);
                    } else if (e.target.value >= 2500) {
                      setActiveInvest(investTypes.PROFESSIONAL);
                    } else if (e.target.value >= 1000) {
                      setActiveInvest(investTypes.ADVANCED);
                    } else if (e.target.value >= 100) {
                      setActiveInvest(investTypes.BEGINNER);
                    }
                    calculateInvestment(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  id="investInputTarget"
                  className="btn btn-sm  planSubmit text-white"
                  style={{ backgroundColor: "#38973C" }}
                >
                  Invest Now
                </button>
              </form>
            </div>

            {!profit ? (
              ""
            ) : typeof profit === "string" ? (
              <div
                style={{ maxWidth: "800px", background: "rgb(56, 151, 60)" }}
                id="ttestdiv"
                className="card mx-auto mb-5 Starter text-center  "
              >
                <p className="text-danger mt-3 text-center">{profit}</p>
              </div>
            ) : (
              <div
                style={{
                  maxWidth: "800px",
                  background:
                    activeInvest === investTypes.BEGINNER
                      ? "rgb(56, 151, 60) !important"
                      : activeInvest === investTypes.ADVANCED
                      ? "rgb(0, 119, 165)"
                      : activeInvest === investTypes.ADVANCED
                      ? "rgb(167, 40, 114)"
                      : activeInvest === investTypes.ADVANCED
                      ? "rgb(0, 70, 39)"
                      : "rgb(56, 151, 60) !important",
                }}
                id="ttestdiv"
                className="p-2 mx-auto mb-5 Starter text-center  "
              >
                <h4>Profit Calculator </h4>
                <p>
                  Estimated earnings from current <b> hosting plan </b>
                </p>
                <ul className=" text-center">
                  <li className="">
                    <span className="title">week </span>{" "}
                    <span> {profit?.week} $</span>
                  </li>
                  <li className="">
                    <span className="title">month </span>{" "}
                    <span> {profit?.month} $</span>
                  </li>
                  <li className="">
                    <span className="title">year </span>{" "}
                    <span> {profit?.year} $</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default investment;
