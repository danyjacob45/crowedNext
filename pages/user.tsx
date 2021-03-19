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
import { Pie, Line } from "react-chartjs-2";
import { AuthService } from "../services/user/user.http";
import classnames from "classnames";

const Yes = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="check"
      width="15"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-check fa-w-16 fa-2x"
    >
      <path
        fill="currentColor"
        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        className=""
      ></path>
    </svg>
  );
};

const No = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      role="img"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
      className="svg-inline--fa fa-times fa-w-11 fa-2x"
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        className=""
      ></path>
    </svg>
  );
};

const Dashboard = () => {
  const { user } = useSelector((store: any) => store.auth);
  let history = useRouter();

  useCheckAuth();
  const [origin, setOrigin] = useState("");
  const [copyReferer, setCopyReferer] = useState(false);
  const [copyReferer2, setCopyReferer2] = useState(false);
  const [hasInvestment, setHasInvestment] = useState(false);
  const [hasReferrer, setHasReferrer] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [profitType, setProfitType] = useState("MONTHLY");
  const [profitChartData, setProfitChartData] = useState([]);
  const [profitSum, setProfitSum] = useState<any>(0);
  const [allProfitSum, setAllProfitSum] = useState<any>(0);
  const [investedSum, setInvestedSum] = useState<any>(0);

  useEffect(() => {
    if (window) {
      const hostname = window.location.origin;
      setOrigin(hostname);
      // console.log(hostname, "window.location");
    }

    AuthService.profits()
      .then((res) => {
        // debugger;
        setHasInvestment(res.data.profits.length);
        let sum = 0;
        res.data.profits.map((el: any) => {
          sum += el.profit;
        });
        setAllProfitSum(Number(sum)?.toFixed(2));
        // setInvestments(res.data.profits);
      })
      .catch((err) => {
        console.log(err);
      });

    AuthService.getTeam().then((res) => {
      setHasReferrer(res.data.referrers && res.data.referrers["level-1"]);
    });
    AuthService.transactions().then((res) => {
      setTransactions(res.data.deposits.content);
      // debugger;
      // setHasReferrer(res.data.referrers && res.data.referrers.length);
    });

    AuthService.profits().then((res) => {
      let sum = 0;
      res?.data?.profits?.map((el: any) => {
        sum += el.amount;
      });

      setInvestedSum(sum);
    });
  }, []);

  useEffect(() => {
    AuthService.profitsFiltered({ type: profitType })
      .then((res) => {
        setProfitChartData(res.data.profits);
        let sum = 0;
        res.data.profits.map((el: any) => {
          sum += el.profit;
        });
        setProfitSum(Number(sum)?.toFixed(2));
        // debugger;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profitType]);

  const [openDepositModal, setOpenDepositModals] = useState(false);
  const [openWithdrawalModal, setOpenWithdrawalModals] = useState(false);

  console.log(history, "historyhistoryhistory");

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
      {/* //////////// */}

      {/* {history.query.isFirst === "true" && ( */}
      <div
        className={classnames("modal fade ", {
          show: history.query.isFirst === "true",
          "d-none": history.query.isFirst !== "true",
        })}
        id="myModal"
        aria-modal="true"
        onClick={() => {
          history.push("/user");
        }}
        style={{ paddingRight: "21px", zIndex: "231414", display: "block" }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal-dialog modal-lg"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            <div className="modal-body">
              {history.query.isFirst === "true" && (
                <iframe
                  width="100%"
                  height="415"
                  src="https://www.youtube.com/embed/cjClq2Ds3EQ"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen=""
                ></iframe>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => history.push("/user")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* //////////////////////// */}
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
                    {Number(user?.balance?.spendable)?.toFixed(2)} $
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
                <span>Invested</span>
                <div className="card bg-white border-0 invest-withBg">
                  <div className="card-body">{investedSum} $</div>
                </div>
              </div>

              <div className="col-lg-3">
                <span>Profit</span>
                <div className="card bg-white profit-withBg border-0">
                  <div className="card-body">{allProfitSum} $</div>
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
                          className={classnames(
                            "mb-2 btn btn-sm btn-neutral greenColor ",
                            { active: profitType === "WEEKLY" }
                          )}
                          id="weekChart"
                          onClick={() => {
                            setProfitType("WEEKLY");
                          }}
                        >
                          Week
                        </button>
                        <button
                          // className="btn btn-sm btn-neutral mb-2 greenColor"
                          className={classnames(
                            "mb-2 btn btn-sm btn-neutral greenColor ",
                            { active: profitType === "MONTHLY" }
                          )}
                          id="monthChart"
                          onClick={() => {
                            setProfitType("MONTHLY");
                          }}
                        >
                          {" "}
                          Month
                        </button>
                        <button
                          // className="btn btn-sm btn-neutral mb-2 greenColor"
                          className={classnames(
                            "mb-2 btn btn-sm btn-neutral greenColor ",
                            { active: profitType === "YEAR" }
                          )}
                          id="monthChart"
                          onClick={() => {
                            setProfitType("YEAR");
                          }}
                        >
                          {" "}
                          Year
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
                          Profit {profitSum}$
                        </span>
                      </div>
                      <Line
                        data={{
                          labels: profitChartData.map((el: any) => {
                            const time = new Date(el.createdAt);
                            // debugger;

                            return `${time.getFullYear()}/${
                              time.getMonth() + 1
                            }/${time.getDate()}`;
                          }),

                          datasets: [
                            {
                              label: "profit",
                              data: profitChartData.map((el: any) => el.profit),
                              backgroundColor: "transparent",
                              borderColor: "#3E932C",
                              color: "#fff",
                              borderWidth: 2,
                              pointBackgroundColor: "#3E932C",
                              pointRadius: 2,
                              fill: false,
                              lineTension: 0,
                              lineJoint: "round",
                              spanGaps: true,
                            },
                          ],
                        }}
                        // @ts-ignore: Unreachable code error
                        // max-height={"100%"}
                        height={"100%"}
                        maxHeight={"250px"}
                        options={{
                          scales: {
                            xAxes: [
                              {
                                fontColor: "#FFF",

                                ticks: {
                                  beginAtZero: true,
                                  fontColor: "#FFF",
                                },
                              },
                            ],

                            yAxes: [
                              {
                                fontColor: "#FFF",
                                ticks: {
                                  callback: function (value: any) {
                                    // return value.toFixed() + ' $'
                                    return value + " $";
                                  },

                                  min: 0,
                                  fontColor: "#FFF",

                                  // max: 5,
                                  // stepSize: 0.5
                                },
                              },
                            ],
                            x: {
                              type: "time",
                              time: {
                                unit: "week",
                              },
                            },
                          },
                          tooltips: {
                            mode: "label",

                            // mode: 'label',
                            callbacks: {
                              label: function (tooltipItem, data) {
                                return (
                                  data["datasets"][0]["data"][
                                    tooltipItem["index"]
                                  ] + " $"
                                );
                              },
                            },
                          },
                          legend: {
                            display: false,
                          },
                          responsive: true,
                          aspectRatio: 1,
                          maintainAspectRatio: false,
                        }}
                      />
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
                      Register for free <Yes />
                    </p>
                    <p>
                      <p className="steps3">
                        First Investment {hasInvestment ? <Yes /> : <No />}
                      </p>
                    </p>
                    <p className="steps3">
                      Refer a friend {hasReferrer ? <Yes /> : <No />}
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
                    overflow: "hidden",
                    // background: "#DB1B4D !important ",
                  }}
                  className={classnames("withRankBg statusBg card ", {
                    [user?.plan?.name]: user?.plan?.name,
                  })}
                >
                  <img
                    style={{
                      position: "absolute",
                      width: "61%",
                      right: "-1px",
                      opacity: "0.4",
                    }}
                    src="/assets/ranks/logoFFF.png "
                  />
                  <div className="card-body d-flex align-items-center justify-content-center">
                    {user?.plan ? user?.plan?.name : "No status"}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <span>Rank </span>

                <div
                  style={{ height: " calc(100% - 54px)" }}
                  className="card withRankBg bg-white"
                >
                  <div className="card-body d-flex align-items-center justify-content-center  ">
                    {" "}
                    no rank
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4">
                <span>Founder Pool Stats</span>
                <div
                  style={{ minHeight: "calc(100% - 54px)" }}
                  className="card bg-white border-0"
                >
                  <div className="card-body">
                    <div>
                      <Pie
                        // width="100%"
                        min-height="240px"
                        data={{
                          labels: ["Founder", "Payout"],
                          datasets: [
                            {
                              data: [1000, 2000],
                              backgroundColor: ["#004627", "#258d25"],
                              borderColor: "transparent",
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          legend: {
                            display: false,
                          },
                          // tooltips: {
                          //   enabled: false,
                          // },
                          tooltips: {
                            callbacks: {
                              label: function (tooltipItem, data) {
                                var dataLabel = data.labels[tooltipItem.index];
                                var value =
                                  ": " +
                                  data.datasets[tooltipItem.datasetIndex].data[
                                    tooltipItem.index
                                  ].toLocaleString();
                                // @ts-ignore: Unreachable code error

                                if (Chart.helpers.isArray(dataLabel)) {
                                  dataLabel = dataLabel.slice();

                                  if (tooltipItem.index === 0) {
                                    dataLabel[0] += value;
                                  } else {
                                    dataLabel[0] += value + " $";
                                  }
                                } else {
                                  if (tooltipItem.index === 0) {
                                    dataLabel += value;
                                  } else {
                                    dataLabel += value + " $";
                                  }
                                }

                                return dataLabel;
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <h4 className="chartText ">56 / 1000 Founders</h4>
                    <h4 className="chartText">
                      Founders Total Profit 15,456.00 $
                    </h4>

                    <h4 className="chartText">Total Average 276.00 $</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <span>Marketing Materials</span>
                <div
                  style={{ minHeight: "calc(100% - 54px)" }}
                  className="card bg-white border-0"
                >
                  <div
                    className="card-body"
                    style={{ height: "308px", width: "100%" }}
                  >
                    <h4>
                      <a
                        href="https://www.youtube.com/watch?v=F7dcJW02fKw&amp;t=18s"
                        target="_blank"
                      >
                        Welcome Video
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://www.youtube.com/watch?v=7t8hiv8GJhU"
                        target="_blank"
                      >
                        Crowd Growing Teaser
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://www.youtube.com/watch?v=VPh5c1CE1vY"
                        target="_blank"
                      >
                        Business Presentation Video
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://m.youtube.com/watch?v=hZxG6fAt6Yc"
                        target="_blank"
                      >
                        Product Video
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_turkish.pdf"
                        target="_blank"
                      >
                        Business Presentation PDF TK
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_german.pdf"
                        target="_blank"
                      >
                        Business Presentation PDF GER
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_russian.pdf"
                        target="_blank"
                      >
                        Business Presentation PDF RUS
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_vietnamese.pdf"
                        target="_blank"
                      >
                        Business Presentation PDF VN
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://crowd-growing.com/mlm-landing/static/media/CrowdGrowing_BusinessPresentation_spanish.pdf"
                        target="_blank"
                      >
                        Business Presentation PDF ES
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <span>Transaction History</span>
                <div
                  style={{ minHeight: "calc(100% - 54px)" }}
                  className="card bg-white border-0"
                >
                  <div
                    className="card-body"
                    style={{
                      height: "308px",
                      width: "100%",
                      overflowX: "scroll",
                      overflowY: "auto",
                    }}
                  >
                    <table className="table table-flush">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((el: any, i) => {
                          const time = new Date(el.createdAt);

                          return (
                            <tr key={i}>
                              <td>{el?.type}</td>
                              <td>{el.finalAmount} $</td>
                              <td>
                                {/* 2020/10/24 06:22:AM */}
                                {time.getFullYear() +
                                  "/" +
                                  (time.getMonth() + 1) +
                                  "/" +
                                  time.getDate() +
                                  " "}
                                {time.getHours() +
                                  ":" +
                                  time.getMinutes() +
                                  ":" +
                                  time.getSeconds()}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

export default Dashboard;
