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
import ModalContainer from "../components/common/modal/modalContainer";

const security = () => {
  // @ts-ignore: Unreachable code error

  const store = useSelector(({ auth }) => auth.user);

  const [qr, setQr] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState<any>();
  const [disable, setDisable] = useState(false);
  const [oldPassword, setOldPassword] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<any>({});
  const [rePassword, setRePassword] = useState("");
  const [loadPassword, setLoadPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    AuthService.qrCode().then((res) => {
      // debugger;
      setQr(res.data.qr);
    });
  }, []);

  useEffect(() => {
    setDisable(store?.using2fa);
  }, [store]);

  const set2fa = (e) => {
    e.preventDefault();
    AuthService.activateTwoFa({ code, enable: !disable })
      .then((res) => {
        console.log(res);
        setDisable(!disable);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };

  const changePassword = () => {
    if (password.length < 6) {
      return setPasswordErrors({
        ...passwordErrors,
        password: "enter minimum 6 character",
      });
    } else if (password !== rePassword) {
      return setPasswordErrors({
        ...passwordErrors,
        rePassword: "The password confirmation does not match.",
      });
    }
    setLoadPassword(true);
    AuthService.changePass({ oldPassword, password, rePassword }).then(
      (res) => {
        // debugger;
        setLoadPassword(false);
        if (res.data.reseted === false) {
          return setPasswordErrors({
            ...passwordErrors,
            oldPassword: "wrong password",
          });
        }
        setOpenModal(true);
      }
    );
  };

  console.log(store, "storestore");

  return (
    <Layout title="financial">
      <ModalContainer
        maxWidth={600}
        showModal={openModal}
        closeModal={() => setOpenModal(false)}
      >
        <div
          style={{ color: "#000", fontSize: "14px" }}
          className="modal-content  "
        >
          <div
            className="sweet-alert  showSweetAlert visible"
            data-custom-className=""
            data-has-cancel-button="false"
            data-has-confirm-button="true"
            data-allow-outside-click="false"
            data-has-done-function="false"
            data-animation="pop"
            data-timer="null"
            style={{ display: "inline-block" }}
          >
            <div className="sa-icon sa-success animate">
              <span className="sa-line sa-tip animateSuccessTip"></span>
              <span className="sa-line sa-long animateSuccessLong"></span>

              <div className="sa-fix"></div>
              <div className="sa-placeholder"></div>
            </div>
            <h2 style={{ color: "#000" }}>Success!</h2>
            <p className="lead text-muted ">
              The password was changed successfully
            </p>

            <div className="sa-button-container">
              <div className="sa-confirm-button-container">
                <button
                  onClick={() => setOpenModal(false)}
                  className="confirm btn btn-lg btn-primary"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>

      <div className="main-content">
        <div className="content-wrapper mt-4 row px-3">
          <div className="col-md-12">
            <div className="card Change_Password">
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Change Password</h3>
              </div>
              <div className="card-body">
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    changePassword();
                  }}
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
                        name="oldPassword"
                        className="form-control"
                        onChange={(e: any) => {
                          setPasswordErrors({});

                          setOldPassword(e.target.value);
                        }}
                        value={oldPassword}
                        // required=""
                      />

                      {passwordErrors.oldPassword && (
                        <div style={{ color: "red" }}>
                          {passwordErrors.oldPassword}
                        </div>
                      )}
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
                        onChange={(e: any) => {
                          setPassword(e.target.value);
                          setPasswordErrors({});
                        }}
                        value={password}
                        // required=""
                      />

                      {passwordErrors.password && (
                        <div style={{ color: "red" }}>
                          {passwordErrors.password}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">
                      Confirm new password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        name="rePassword"
                        onChange={(e: any) => {
                          setPasswordErrors({});

                          setRePassword(e.target.value);
                        }}
                        value={rePassword}
                        className="form-control"

                        // required=""
                      />
                      {passwordErrors.rePassword && (
                        <div style={{ color: "red" }}>
                          {passwordErrors.rePassword}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      disabled={loadPassword}
                      type="submit"
                      className="btn btn-neutral reallyGreenColor relly"
                    >
                      {loadPassword ? "load.." : "Submit"}
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
                          {disable ? "ACTIVE" : "Disabled"}
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
                                  setError(null);
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
                            <button
                              type="submit"
                              className="btn reallyGreenColor btn-neutral"
                            >
                              {disable ? "Disable" : "Enable"}
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
