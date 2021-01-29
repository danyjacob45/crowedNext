import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React from "react";
import { Button } from "../components/common/forms/button";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="main-content main-content-Dashboard">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">
            <div className="row">
              <div className="col-lg-3">
                <span>Balance</span>
                <div className="card bg-white border-0">
                  <div
                    className="card-body dashboard-balance dashboard-balance-withBg"
                    style={{ position: "relative" }}
                  >
                    0.00 $
                    <a
                      data-toggle="modal"
                      // onclick="openInvoice()"
                      data-target="#modal-formx2"
                      href=""
                      id="Wi"
                      className="btn btn-sm btn-neutral greenColor"
                    >
                      <i className="fa fa-arrow-right"></i>Deposit
                    </a>
                    <a
                      id="Withdrawal"
                      href=""
                      data-toggle="modal"
                      data-target="#modal-formx"
                      className="btn btn-sm btn-neutral greenColor right "
                    >
                      <i className="fa fa-arrow-right"></i> Withdrawal{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <span>Profit</span>
                <div className="card bg-white profit-withBg border-0">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Invested</span>
                <div className="card bg-white border-0 invest-withBg">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>

              <div className="col-lg-3">
                <span>&nbsp;</span>
                <div className="card bg-white investNowCard border-0">
                  <div className="card-body align-self-center">
                    <a className="greenColor" href="/">
                      INVEST NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ marginTop: "24px" }} className="col-md-9">
                <div className="col-md-12 lineChart">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{
                        height: "250px",
                        width: "100%",
                        position: "relative",
                        paddingTop: "50px !important",
                      }}
                    >
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div className=""></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div className=""></div>
                        </div>
                      </div>
                      <div
                        className="chartBtns d-flex align-item-center"
                        style={{ position: "absolute", marginTop: "-43px" }}
                      >
                        <button
                          className="mb-2 btn btn-sm btn-neutral greenColor active"
                          id="weekChart"
                        >
                          Week
                        </button>
                        <button
                          className="btn btn-sm btn-neutral mb-2 greenColor"
                          id="monthChart"
                        >
                          {" "}
                          Month
                        </button>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            cursor: "default",
                            border: "none",
                            height: "27px",
                            // display: " inline-block",
                            padding: "0 20px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="   mb-2"
                        >
                          {" "}
                          Profit 0.00 $
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <span> 3 Steps to Success </span>
                <div className="card bg-white">
                  <div
                    className="card-body align-self-center "
                    style={{ height: "250px", width: "100%" }}
                  >
                    <p className="steps3">
                      Register for free{" "}
                      <i className="fa fa-check text-success"></i>
                    </p>
                    <p>
                      <a className="steps3" href="/">
                        First Investment{" "}
                        <i className="fa fa-remove text-danger"></i>
                      </a>
                    </p>
                    <p className="steps3">
                      Refer a friend{" "}
                      <i className="fa fa-check text-success"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <span> links </span>
                <div className="card bg-white">
                  <div className="card-body align-self-left Referral">
                    <h3>Referral Link: </h3>
                    <p>
                      <span id="p1"> http://local.mlm/?referral=residual </span>
                      <button className="btn btn-icon fa fa-copy copyBtn">
                        <span id="copyP1"> copied </span>
                      </button>
                    </p>
                    <h3>Anonymous Referral Link: </h3>
                    <p>
                      <span id="p2"> http://local.mlm/?referral=Re1LUi </span>
                      <button className="btn btn-icon fa fa-copy copyBtn">
                        <span id="copyP2"> copied </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <span> Investment Status</span>
                <div
                  style={{
                    height: " calc(100% - 54px)",
                    background: "#DB1B4D !important ",
                  }}
                  className="withRankBg card bg-white"
                >
                  <div className="card-body    ">No status</div>
                </div>
              </div>
              <div className="col-md-3">
                <span>Rank </span>

                <div
                  style={{ height: " calc(100% - 54px)" }}
                  className="card withRankBg bg-white"
                >
                  <div className="card-body   "> no rank</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
