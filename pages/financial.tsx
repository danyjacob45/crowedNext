import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import { Button } from "../components/common/forms/button";
import Deposit from "../components/dashboard/deposit";
import Withdrawal from "../components/dashboard/withdrawal";
import { AuthService } from "../services/user/user.http";
import classnames from "classnames";

const financial = () => {
  const [openDepositModal, setOpenDepositModals] = useState(false);
  const [activeTab, setActiveTab] = useState<any>(false);
  const [openWithdrawalModal, setOpenWithdrawalModals] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [team, setTeam] = useState<any>([]);
  const [directComissions, setDirectComissions] = useState<any>([]);
  const [investments, setInvestments] = useState<any>([]);

  useEffect(() => {
    AuthService.transactions().then((res) => {
      setTransactions(res.data.deposits.content);
      // debugger;
      // setHasReferrer(res.data.referrers && res.data.referrers.length);
    });

    AuthService.getTeam().then((res) => {
      let teams: any = [];

      for (const key in res.data.referrers) {
        res.data.referrers[key].map((el) => {
          teams.push(el);
        });
      }
      console.log(teams);
      // debugger;
      // debugger;
      setTeam(teams);
      setDirectComissions(
        res.data.directComissions.filter((el) => el.investedAmount)
      );
      // debugger;
    });
    AuthService.profits()
      .then((res) => {
        setInvestments(res.data.profits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSum = (arr, key) => {
    let acumulator = 0;

    arr.map((el) => {
      if (el[key]) {
        acumulator += el[key];
      }
    });

    return acumulator;
  };

  const getLastDate = (date: any) => {
    let time = new Date(date);
    return `${time.getFullYear()}/${
      time.getMonth() + 1
    }/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    //   "/" +
    //   (time.getMonth() + 1) +
    //   "/" +
    //   time.getDate() +
    //   " "}
    // {time.getHours() +
    //   ":" +
    //   time.getMinutes() +
    //   ":" +
    //   time.getSeconds()}
  };

  return (
    <Layout title="financial">
      <Deposit
        openDepositModal={openDepositModal}
        setOpenDepositModals={(val: boolean) => setOpenDepositModals(val)}
      />

      <Withdrawal
        openWithdrawalModal={openWithdrawalModal}
        setOpenWithdrawalModals={(val: boolean) => setOpenWithdrawalModals(val)}
      />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">
            <div style={{ justifyContent: "center" }} className="row">
              <div className="col-lg-4">
                <div
                  style={{ height: "calc(100% - 30px)" }}
                  className="card bg-white border-0"
                >
                  <div className="card-header header-elements-inline">
                    <h3 className="text-center">Deposit</h3>
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table table-flush">
                      <thead className="">
                        <tr>
                          <th className="text-center">
                            We offer 3 different deposit options:
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">Bitcoin (BTC)</td>
                        </tr>
                        <tr>
                          <td className="text-left">Ethereum (ETH)</td>
                        </tr>
                        <tr>
                          <td className="text-left">Tether (USDT)</td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <a
                              data-toggle="modal"
                              data-target="#modal-formx2"
                              href=""
                              id="Wi"
                              className="btn btn-sm btn-neutral"
                              onClick={(e: any) => {
                                e.preventDefault();
                                setOpenDepositModals(true);
                              }}
                            >
                              Deposit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ height: " calc(100% - 30px)" }}
                  className="card bg-white border-0"
                >
                  <div className="card-header header-elements-inline">
                    <h3 className="text-center">Withdrawal</h3>
                  </div>
                  <div className="table-responsive py-3">
                    <table className="table table-flush">
                      <thead className="">
                        <tr>
                          <th className="text-center">
                            One request per 24 hour:
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">Minimum 50$</td>
                        </tr>
                        <tr>
                          <td className="text-left">3% disbursement fee</td>
                        </tr>
                        <tr>
                          <td className="text-left">Exclusively in BTC</td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <a
                              data-toggle="modal"
                              data-target="#modal-formx"
                              href=""
                              id="Wi"
                              className="btn btn-sm btn-neutral"
                              onClick={(e: any) => {
                                e.preventDefault();
                                setOpenWithdrawalModals(true);
                              }}
                            >
                              Withdrawal
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{ overflowX: "auto", overflowY: "hidden" }}
              id="other"
            >
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Transaction History</h3>
              </div>
              {/* {team.map((el, i) => {
                return ( */}
              <table className="table table-flush" id="basic">
                <thead>
                  <tr>
                    <th></th>
                    <th className="bold12">TYPE </th>
                    <th className="bold12">AMOUNT</th>
                    <th className="bold12">CURRENCY</th>
                    <th className="bold12">DATE</th>
                  </tr>
                </thead>
                <thead
                  onClick={() => {
                    if (activeTab === "deposit") {
                      setActiveTab(null);
                    } else {
                      setActiveTab("deposit");
                    }
                  }}
                >
                  <tr>
                    <th>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        role="img"
                        width="11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-plus-circle fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          className=""
                        ></path>
                      </svg>
                    </th>
                    <th className="bold12">Deposit</th>
                    <th className="bold12">
                      {transactions.length &&
                        // @ts-ignore: Unreachable code error
                        transactions?.reduce((sum: any, el: any) => {
                          if (sum.finalAmount) {
                            return sum.finalAmount + el.finalAmount;
                          }
                          return sum + el.finalAmount;
                        })}{" "}
                      $
                    </th>
                    <th className="bold12">ETH</th>
                    <th className="bold12">
                      {transactions.length &&
                        // @ts-ignore: Unreachable code error

                        getLastDate(transactions[0].createdAt)}
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    display: activeTab === "deposit" ? "contents" : "none",
                  }}
                >
                  {transactions.map((el: any, i) => {
                    const time = new Date(el.createdAt);
                    return (
                      <tr key={i}>
                        <td></td>

                        <td>{el?.type} </td>
                        <td>{el.finalAmount} $</td>
                        <td>{el.depositMethod}</td>
                        <td>
                          {" "}
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
                            time.getSeconds()}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* /////////// */}

                <thead
                  onClick={() => {
                    if (activeTab === "ProfitShare") {
                      setActiveTab(null);
                    } else {
                      setActiveTab("ProfitShare");
                    }
                  }}
                >
                  <tr>
                    <th>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        role="img"
                        width="11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-plus-circle fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          className=""
                        ></path>
                      </svg>
                    </th>
                    <th className="bold12">Profit Share</th>
                    <th className="bold12">
                      {/* {investments.length &&
                        // @ts-ignore: Unreachable code error
                        transactions?.reduce((sum: any, el: any) => {
                          if (sum.finalAmount) {
                            return sum.finalAmount + el.finalAmount;
                          }
                          return sum + el.finalAmount;
                        })}{" "} */}
                      {investments.length && getSum(investments, "amount")}$
                    </th>
                    <th className="bold12">
                      Earned $
                      {investments.length &&
                        getSum(investments, "profit").toFixed(2)}
                    </th>
                    <th className="bold12">
                      {investments.length &&
                        getLastDate(investments[0].createdAt)}
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    display: activeTab === "ProfitShare" ? "contents" : "none",
                  }}
                >
                  {investments.map((el: any, i) => {
                    const time = new Date(el.createdAt);
                    return (
                      <tr key={i}>
                        <td></td>

                        <td>{"Profit Share"} </td>
                        <td>{el.amount} $</td>

                        <td> ${el.profit}</td>
                        <td>
                          {" "}
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
                            time.getSeconds()}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* //////////////////////////// */}
                <thead
                  onClick={() => {
                    if (activeTab === "COMMISSION") {
                      setActiveTab(null);
                    } else {
                      setActiveTab("COMMISSION");
                    }
                  }}
                >
                  <tr>
                    <th>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        role="img"
                        width="11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-plus-circle fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          className=""
                        ></path>
                      </svg>
                    </th>
                    <th className="bold12">Direct Commission</th>
                    <th className="bold12">
                      {directComissions.length &&
                        directComissions
                          .reduce((sum: any, item: any) => {
                            // debugger;
                            if (item.investedAmount) {
                              return sum.investedAmount + item.investedAmount;
                            }
                            return sum;
                          })
                          ?.toFixed(2)}{" "}
                      $
                    </th>
                    <th className="bold12">
                      Earned $
                      {directComissions.length &&
                        directComissions
                          .reduce((sum: any, item: any) => {
                            // debugger;
                            if (item.earned) {
                              return sum.earned + item.earned;
                            }
                            return sum;
                          })
                          ?.toFixed(2)}
                    </th>
                    <th className="bold12">
                      {directComissions.length &&
                        // @ts-ignore: Unreachable code error

                        getLastDate(directComissions[0].createdAt)}
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    display: activeTab === "COMMISSION" ? "contents" : "none",
                  }}
                >
                  {directComissions.map((el: any, i) => {
                    const time = new Date(el.createdAt);
                    return (
                      <tr key={i}>
                        <td></td>

                        <td>Direct Commission </td>
                        <td>{el.investedAmount}</td>
                        <td>{el.earned}</td>
                        <td>
                          {" "}
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
                            time.getSeconds()}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                {/* ////// */}

                <thead
                  onClick={() => {
                    if (activeTab === "ResidualBonus") {
                      setActiveTab(null);
                    } else {
                      setActiveTab("ResidualBonus");
                    }
                  }}
                >
                  <tr>
                    <th>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        role="img"
                        width="11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-plus-circle fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          className=""
                        ></path>
                      </svg>
                    </th>
                    <th className="bold12">Residual Bonus</th>
                    <th className="bold12">
                      {/* {investments.length &&
                        // @ts-ignore: Unreachable code error
                        transactions?.reduce((sum: any, el: any) => {
                          if (sum.finalAmount) {
                            return sum.finalAmount + el.finalAmount;
                          }
                          return sum + el.finalAmount;
                        })}{" "} */}
                      {team.length && getSum(team, "investedAmount")}$
                    </th>
                    <th className="bold12">
                      Earned ${team.length && getSum(team, "earned").toFixed(2)}
                    </th>
                    <th className="bold12">
                      {team.length && getLastDate(team[0].createdAt)}
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    display:
                      activeTab === "ResidualBonus" ? "contents" : "none",
                  }}
                >
                  {team.map((el: any, i) => {
                    const time = new Date(el.createdAt);
                    return (
                      <tr key={i}>
                        <td></td>

                        <td>{"Residual Bonus"} </td>
                        <td>{el.investedAmount} $</td>

                        <td> ${el.earned}</td>
                        <td>
                          {" "}
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
                            time.getSeconds()}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <thead
                  onClick={() => {
                    if (activeTab === "Investment") {
                      setActiveTab(null);
                    } else {
                      setActiveTab("Investment");
                    }
                  }}
                >
                  <tr>
                    <th>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        role="img"
                        width="11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-plus-circle fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          className=""
                        ></path>
                      </svg>
                    </th>
                    <th className="bold12">Investment</th>
                    <th className="bold12">
                      {/* {investments.length &&
                        // @ts-ignore: Unreachable code error
                        transactions?.reduce((sum: any, el: any) => {
                          if (sum.finalAmount) {
                            return sum.finalAmount + el.finalAmount;
                          }
                          return sum + el.finalAmount;
                        })}{" "} */}
                      {investments.length && getSum(investments, "amount")}$
                    </th>
                    <th className="bold12">
                      Earned $
                      {investments.length &&
                        getSum(investments, "profit").toFixed(2)}
                    </th>
                    <th className="bold12">
                      {investments.length &&
                        getLastDate(investments[0].createdAt)}
                    </th>
                  </tr>
                </thead>

                <tbody
                  style={{
                    display: activeTab === "Investment" ? "contents" : "none",
                  }}
                >
                  {investments.map((el: any, i) => {
                    const time = new Date(el.createdAt);
                    return (
                      <tr key={i}>
                        <td></td>

                        <td>{"Investment"} </td>
                        <td>{el.amount} $</td>

                        <td> ${el.profit}</td>
                        <td>
                          {" "}
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
                            time.getSeconds()}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* /\//// */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default financial;
