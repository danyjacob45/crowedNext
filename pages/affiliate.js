import React from "react";
// import "./style.scss";
import Wrapper from "../components/pagesWrapper";

var terms = () => {
  return (
    <Wrapper>
      <div className="pageContainer Affiliate">
        <div className="section11">
          <div className="container ">
            <h3 className="mb-5">Become an Affiliate</h3>

            <div className="row">
              <div className="col-sm-6 img  ">
                <img src="/assets/imgs/affiliate1.svg" />
              </div>
              <div className="col-sm-6 text">
                <div>
                  Crowd Growing offers its users a whole new range of benefits
                  that have never before been available in this form in the
                  cannabis market. Every member of Crowd Growing can become an
                  affiliate member. Become our affiliate member today and take
                  advantage of the unlimited possibilities that Crowd Growing
                  has to offer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section12">
          <div className="container ">
            <div className="row">
              <div className="col-sm-6 img d-block d-sm-none ">
                <img src="/assets/imgs/affiliate2.svg" />
              </div>
              <div className="col-sm-6  text  ">
                <div>
                  Build your affiliate network by recommending the Crowd Growing
                  platform to potential users. <br />
                  The bigger your affiliate network - the more bonuses and
                  rewards you can achieve.
                </div>
              </div>
              <div className="col-sm-6 img d-none d-sm-block ">
                <img src="/assets/imgs/affiliate1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="section13">
          <div className="container ">
            <div className="row">
              <div className="col-sm-6 img  ">
                <img src="/assets/imgs/affiliate3.svg" />
              </div>
              <div className="col-sm-6 text">
                <div>
                  The bonuses of the affiliate program are distributed from the
                  resources the platform generates through its operations in the
                  cannabis market.
                  <br />
                  All our platform users are part of the Crowd Growing
                  community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default terms;
