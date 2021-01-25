import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React from "react";
import { Button } from "../components/common/forms/button";

const financial = () => {
  return (
    <Layout title="financial">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default financial;
