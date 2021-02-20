import React, { useState } from "react";
import Layout from "../components/Layout";
// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";

const profile = () => {
  return (
    <Layout title="financial">
      <div className="main-content">
        <div className="content-wrapper mt-4 row px-3">
          <div className="col-md-8">
            <div className="card account_information" id="edit">
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Update account information</h3>
              </div>
              <div className="card-body">
                <form
                  action="https://crowd-growing.com/user/account"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="lBgqLaH6PQVFfQRMhD8fSgVu8766raCJnHt8jRJF"
                  />{" "}
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Name</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value="sadsa"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Mobile</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value="00"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Country</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">City</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Zip code</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="zip_code"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Address</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-neutral">
                      Update<i className="icon-paperplane ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card profileImageWrapper">
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Change account photo</h3>
              </div>
              <div className="card-body">
                <form
                  action="https://crowd-growing.com/user/avatar"
                  //   enctype="multipart/form-data"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="lBgqLaH6PQVFfQRMhD8fSgVu8766raCJnHt8jRJF"
                  />{" "}
                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFileLang"
                        name="image"
                        accept="image/*"
                      />
                      <label className="custom-file-label" for="customFileLang">
                        Select photo
                      </label>
                    </div>
                    <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
                    <span className="form-text text-muted">
                      Accepted formats: png, jpg, jpeg.
                    </span>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-neutral">
                      Upload<i className="icon-paperplane ml-2"></i>
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

export default profile;
