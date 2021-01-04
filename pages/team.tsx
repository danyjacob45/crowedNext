import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React from "react";
import { Button } from "../components/common/forms/button";

const Dashboard = () => {
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
                  <div className="card-body">0</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Turnover</span>
                <div className="card bg-white border-0">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Est. Monthly Income</span>
                <div className="card bg-white border-0">
                  <div className="card-body">0 $</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <span>Direct Commission</span>
                <div className="card bg-white border-0">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Residual Commission</span>
                <div className="card bg-white border-0">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Total Earned</span>
                <div className="card bg-white border-0">
                  <div className="card-body">0.00 $</div>
                </div>
              </div>
              <div className="col-lg-3">
                <span>Rank</span>
                <div className="card bg-white border-0">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    No Rank
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
