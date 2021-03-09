import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";
import { AuthService } from "../services/user/user.http";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  setCurrentStore,
  updateUser,
} from "../store/auth/authActions";

const security = () => {
  // @ts-ignore: Unreachable code error

  const store = useSelector(({ auth }) => auth.user);

  const [qr, setQr] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    AuthService.qrCode().then((res) => {
      debugger;
      setQr(res.data.qr);
    });
  }, []);

  const set2fa = (e) => {
    e.preventDefault();
    AuthService.activateTwoFa({ code, enable: !store?.using2fa })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };

  console.log(store, "storestore");

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

            <div className="row">
              <div className="col-lg-12">
                <div className="card Security bg-white">
                  <div className="card-header header-elements-inline">
                    <h3 className="mb-0">Two-Factor Security Option</h3>
                  </div>
                  <div className="card-body">
                    <div className="align-item-sm-center flex-sm-nowrap text-left">
                      <div className="">
                        <p>
                          Two-factor authentication is a method for protection
                          your web account. When it is activated you need to
                          enter not only your password, but also a special code.
                          You can receive this code by in mobile app. Even if
                          third person will find your password, then can't
                          access with that code.
                        </p>
                        <span className="badge badge-pill badge-primary">
                          {store?.using2fa ? "ACTIVE" : "Disabled"}
                        </span>
                        <p>
                          1) Install an authentication app on your device. Any
                          app that supports the Time-based One-Time Password
                          (TOTP) protocol should work.
                        </p>
                        <p>
                          2) Use the authenticator app to scan the barcode
                          below.
                        </p>
                        {qr && (
                          <img
                            src={qr}
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        )}

                        <p>
                          3) Enter the code generated by the authenticator app
                        </p>
                        <form onSubmit={set2fa}>
                          <input
                            type="hidden"
                            name="_token"
                            value="2k803GMrtHeAWcf2r60aMZBLk5gWUP8b9quk3v5y"
                          />{" "}
                          <div className="form-group row">
                            <div className="col-lg-6">
                              <input
                                type="number"
                                name="code"
                                className="form-control"
                                value={code}
                                onChange={(e: any) => {
                                  setCode(e.target.value);
                                }}
                              />
                              <input
                                type="hidden"
                                name="vv"
                                value="AXNRWLLTI6LXQAZO"
                              />
                              <input type="hidden" name="type" value="1" />
                            </div>
                          </div>
                          {error && <div style={{ color: "red" }}>{error}</div>}
                          <div className="text-left">
                            <button type="submit" className="btn btn-neutral">
                              {store?.using2fa ? "Disable" : "Enable"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default security;
