import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Button } from "../components/common/forms/button";
import { useCheckAuth } from "../hooks/useCheckAuth";
import Deposit from "../components/dashboard/deposit";
import Withdrawal from "../components/dashboard/withdrawal";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Dashboard = () => {
  const { user } = useSelector((store: any) => store.auth);
  useCheckAuth();
  const route = useRouter();
  const [origin, setOrigin] = useState("");
  const [copyReferer, setCopyReferer] = useState(false);
  const [copyReferer2, setCopyReferer2] = useState(false);

  useEffect(() => {
    if (window) {
      const hostname = window.location.origin;
      setOrigin(hostname);
      // console.log(hostname, "window.location");
    }
  }, []);

  const [openDepositModal, setOpenDepositModals] = useState(false);
  const [openWithdrawalModal, setOpenWithdrawalModals] = useState(false);

  return (
    <Layout title="Dashboard">
      <Deposit
        openDepositModal={openDepositModal}
        setOpenDepositModals={(val: boolean) => setOpenDepositModals(val)}
      />
      <Withdrawal
        openWithdrawalModal={openWithdrawalModal}
        setOpenWithdrawalModals={(val: boolean) => setOpenWithdrawalModals(val)}
      />
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
                      onClick={(e: any) => {
                        e.preventDefault();
                        setOpenDepositModals(true);
                      }}
                    >
                      <i className="fa fa-arrow-right"></i>Deposit
                    </a>
                    <a
                      id="Withdrawal"
                      href=""
                      data-toggle="modal"
                      data-target="#modal-formx"
                      onClick={(e: any) => {
                        e.preventDefault();
                        setOpenWithdrawalModals(true);
                      }}
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
                    <a
                      className="greenColor"
                      href="/"
                      onClick={(e: any) => {
                        e.preventDefault();
                        route.push("/invest");
                      }}
                    >
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
                      <span id="p1">
                        {" "}
                        {`${origin}/?referral=${user?.realUsername}`}{" "}
                      </span>

                      <CopyToClipboard
                        text={`${origin}/?referral=${user?.realUsername}`}
                        onCopy={() => {
                          setCopyReferer(true);
                          setTimeout(() => {
                            setCopyReferer(false);
                          }, 1500);
                        }}
                      >
                        <button
                          className="btn btn-icon fa fa-copy copyBtn"
                          // onclick="copyToClipboard('#p1', '#copyP1' )"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="copy"
                            width="20"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-copy fa-w-14 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                              className=""
                            ></path>
                          </svg>
                          <span
                            id="copyP1"
                            className={copyReferer ? "animate" : ""}
                          >
                            {" "}
                            copied{" "}
                          </span>
                        </button>
                      </CopyToClipboard>
                    </p>
                    <h3>Anonymous Referral Link: </h3>
                    <p>
                      <span id="p2">
                        {`${origin}/?referral=${user?.referralLink}`}
                      </span>
                      <CopyToClipboard
                        text={`${origin}/?referral=${user?.referralLink}`}
                        onCopy={() => {
                          setCopyReferer2(true);
                          setTimeout(() => {
                            setCopyReferer2(false);
                          }, 1500);
                        }}
                      >
                        <button
                          className="btn btn-icon fa fa-copy copyBtn"
                          // onclick="copyToClipboard('#p1', '#copyP1' )"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="copy"
                            width="20"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-copy fa-w-14 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                              className=""
                            ></path>
                          </svg>
                          <span
                            id="copyP1"
                            className={copyReferer2 ? "animate" : ""}
                          >
                            {" "}
                            copied{" "}
                          </span>
                        </button>
                      </CopyToClipboard>
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
