import React from "react";
// import "./style.scss";
import Wrapper from "../components/pagesWrapper";

var terms = () => {
  return (
    <Wrapper>
      <div className="pageContainer hostingAndPlans">
        <h3>Hosting Plans</h3>

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />
                    <div> From 100$ </div>
                    <span>minimum amount </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />

                    <div> Weekly </div>
                    <span>payouts </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />

                    <div> Everyday </div>
                    <span>withdrawal of rewards </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />

                    <div> Up to 8 – 13% profit </div>
                    <span>monthly </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />

                    <div> From 50$ </div>
                    <span>minimum withdrawal </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pointsList">
                    <i class="far fa-check-circle" />

                    <div> 800 – 1000 days </div>
                    <span>hosting time </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <img src="/assets/imgs/hostingPlans.svg" />
            </div>
          </div>
          <hr />

          <div className="row pt-4 pl-3">
            <div className="col-12">
              <h5 style={{ color: "#5e8f3b" }}> How does it work? </h5>
              Hosting plans can be purchased starting from 100$ and paid with
              BTC, ETH or USDT. By purchasing a hosting plan, you basically
              invest in growing equipment, which is needed for the cultivation
              of Cannabis. We are hosting the equipment in our partner
              facilities and you receive a weekly profit share of the harvest.{" "}
              <br />
              Customers can expect a maximum return of up to 8-13% a month.
              After the expiration of the hosting contract, customers can either
              renew the plan for only 50% its initial costs or receive back 50%
              of the initial costs.
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default terms;
