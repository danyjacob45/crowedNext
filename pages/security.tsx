import React, { useState } from "react";
import Layout from "../components/Layout";
// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";

const security = () => {
  return (
    <Layout title="financial">
      <div className="main-content">
        <div className="content-wrapper mt-4 row px-3">
          <div className="col-md-12">
            <div className="card Change_Password">
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Change Password</h3>
              </div>
              <div className="card-body">
                <form
                  action="https://crowd-growing.com/user/password"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="lBgqLaH6PQVFfQRMhD8fSgVu8766raCJnHt8jRJF"
                  />{" "}
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">
                      Old password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        name="current_password"
                        className="form-control"
                        // required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">
                      New password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        // required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">
                      Confirm new password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        name="password_confirmation"
                        className="form-control"
                        // required=""
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-neutral">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default security;
