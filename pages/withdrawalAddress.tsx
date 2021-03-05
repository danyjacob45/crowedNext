import React, { useState } from "react";
import Layout from "../components/Layout";
// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";

const withdrawalAddress = () => {
  return (
    <Layout title="financial">
      <div className="main-content">
        <div className="content-wrapper mx-4">
          <div className="card" id="other">
            <div className="card-header header-elements-inline">
              <a
                className="btn btn-dark btn-sm text-white"
                data-toggle="modal"
                data-target="#create"
              >
                <i className="icon-file-plus mr-2"></i>New address
              </a>
            </div>
            <div className="table-responsive py-4">
              <div id="delete27" className="modal fade newAddModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <h4 className="font-weight-semibold text-center">
                        Are you sure you want to delete this?
                      </h4>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="https://crowd-growing.com/user/withdraw-address-delete/27"
                        className="btn btn-sm btn-danger text-dark"
                      >
                        Proceed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="update27" className="modal fade newAddModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <form
                      action="https://crowd-growing.com/user/withdraw-address-update/27"
                      method="post"
                    ></form>
                    <input
                      type="hidden"
                      name="_token"
                      value="2k803GMrtHeAWcf2r60aMZBLk5gWUP8b9quk3v5y"
                    />{" "}
                    <div className="modal-body">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-3">
                          Method:
                        </label>
                        <div className="col-lg-9">
                          <select
                            id="method"
                            className="form-control"
                            name="method"
                          >
                            <option value="1" selected>
                              Bitcoin
                            </option>
                          </select>
                          <input type="hidden" name="id" value="27" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-3">
                          Address:
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            value="1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-sm bg-dark text-white"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table table-flush">
                <thead className="">
                  <tr>
                    <th>S/N</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Bitcoin</td>
                    <td>1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9</td>
                    <td className="text-center">
                      <a
                        data-toggle="modal"
                        data-target="#update27"
                        className="btn btn-sm text-success"
                      >
                        <i className="fa fa-pencil"></i>
                        Edit
                      </a>
                      <a
                        data-toggle="modal"
                        data-target="#delete27"
                        className="btn btn-sm text-danger"
                      >
                        <i className="fa fa-remove"></i>Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withdrawalAddress;
