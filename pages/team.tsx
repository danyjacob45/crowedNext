import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import { Button } from "../components/common/forms/button";
import { AuthService } from "../services/user/user.http";
import classnames from "classnames";

const Dashboard = () => {
  const [team, setTeam] = useState<any>([]);
  const [activeTeam, setActiveTeam] = useState<any>(-1);
  const [statistic, setStatistic] = useState<any>();

  useEffect(() => {
    AuthService.getTeam().then((res) => {
      let teams: any = [];

      for (const key in res.data.referrers) {
        teams.push(res.data.referrers[key]);
      }
      // debugger;

      setTeam(teams);
      // debugger;
    });

    AuthService.teamStatistic().then((res) => {
      console.log(res);
      setStatistic(res.data.referrers);
    });
  }, []);
  return (
    <Layout title="Dashboard">
      <div className="main-content">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">
            <div className="row">
              <div className="col-lg-3">
                <span>Member</span>
                <div className="card bg-white border-0">
                  <div className="card-body">1</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Active Member</span>
                <div className="card bg-white border-0">
                  <div className="card-body">{statistic?.activeMembers}</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Turnover</span>
                <div className="card bg-white border-0">
                  <div className="card-body">{statistic?.turnOver} $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Est. Monthly Income</span>
                <div className="card bg-white border-0">
                  <div className="card-body">{statistic?.monthlyIncome} $</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <span>Direct Commission</span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    {statistic?.directCommissions.toFixed(2)} $
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Residual Commission</span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    {statistic?.residualCommissions} $
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Total Earned</span>
                <div className="card bg-white border-0">
                  <div className="card-body">
                    {statistic?.totalEarned.toFixed(2)} $
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Rank</span>
                <div className="card bg-white border-0">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    {statistic?.rank}
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
                <h3 className="mb-0">Direct Commission</h3>
              </div>
              {/* {team.map((el, i) => {
                return ( */}
              <table className="table table-flush" id="basic">
                <thead
                // onClick={() => {
                //   if (activeTeam === i) {
                //     setActiveTeam(null);
                //   } else {
                //     setActiveTeam(i);
                //   }
                // }}
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
                    <th className="bold12">{1} LEVEL</th>
                    <th className="bold12">{0} MEMBER</th>
                    <th className="bold12">0.00 $ TURN OVER</th>
                    <th className="bold12">0.00 $ EARNED</th>
                  </tr>
                </thead>

                <tbody className="d-none">
                  <tr>
                    <td></td>

                    <th className="bold12">Username</th>
                    <th className="bold12">Email Address</th>
                    <th className="bold12">Invested Amount</th>
                    <th className="bold12">Earned</th>
                  </tr>
                  {/* {el.map((user, i) => { */}
                  {/* return ( */}
                  <tr key={"i"}>
                    <td></td>

                    <td>{"user.realUsername"} </td>
                    <td>{"user.email"}</td>
                    <td>100.00 $</td>
                    <td>3.83$</td>
                  </tr>
                  {/* ); */}
                  {/* })} */}
                </tbody>
              </table>
              {/* );
              })} */}
            </div>

            {/* ////// */}

            <div
              className="card"
              style={{ overflowX: "auto", overflowY: "hidden" }}
              id="other"
            >
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Residual Bonus</h3>
              </div>
              {team.map((el, i) => {
                return (
                  <table className="table table-flush" id="basic">
                    <thead
                      onClick={() => {
                        if (activeTeam === i) {
                          setActiveTeam(null);
                        } else {
                          setActiveTeam(i);
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
                        <th className="bold12">{i + 1} LEVEL</th>
                        <th className="bold12">{el.length} MEMBER</th>
                        <th className="bold12">400.00 $ TURN OVER</th>
                        <th className="bold12">15.30 $ EARNED</th>
                      </tr>
                    </thead>

                    <tbody
                      className={classnames({ "d-none": activeTeam !== i })}
                    >
                      <tr>
                        <td></td>

                        <th className="bold12">Username</th>
                        <th className="bold12">Email Address</th>
                        <th className="bold12">Invested Amount</th>
                        <th className="bold12">Earned</th>
                      </tr>
                      {el.map((user, i) => {
                        return (
                          <tr key={i}>
                            <td></td>

                            <td>{user.realUsername} </td>
                            <td>{user.email}</td>
                            <td>100.00 $</td>
                            <td>3.83$</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
              })}
            </div>

            {/* /////// */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
