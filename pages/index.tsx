import Layout from "../components/Layout";
import { Card, Nav } from "react-bootstrap";
import React from "react";
import { Button } from "../components/common/forms/button";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="main-content">
        <div className="content-wrapper">
          <div className="container-fluid mt--6">dashboard</div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
