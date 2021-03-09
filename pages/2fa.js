import React, { useState } from "react";
import { AuthService } from "../services/user/user.http";

function twofa() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const submitHandler = () => {
    AuthService.twoFaLogin({ username, password, code });
  };

  return (
    <div className="container registerContainer">
      <div className="row">
        <div className="col-md-12 col-md-offset-3">
          <div className="panel panel-login">
            <div className="panel-heading">
              <h4
                style={{
                  color: "#fff",
                  textAlign: "center",
                  width: " 100%",
                  marginBottom: "0px",
                }}
              >
                Verify your crowd-growing.com Account
              </h4>
              <hr />
            </div>
            <div className="panel-body">
              <div className="LoginHeader">
                <a href="https://crowd-growing.com/">
                  <img
                    src="https://crowd-growing.com/mlm-landing/static/media/pic-19.ce60862e.png"
                    alt="pic"
                  />
                  <h5>Crowd Growing</h5>
                </a>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form
                    id="login-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      submitHandler();
                    }}
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="d55iejNYKlwLnwO1LEXESaAWrijkvQ0QJzN06Ay5"
                    />{" "}
                    <div
                      className="form-group is-invalid mb-4 mx-auto w-75"
                      //   style={{ textAlign: "center" }}
                    >
                      <label>username</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="code"
                        placeholder="username"
                        required=""
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        value={username}
                      />

                      <div className="invalid-feedback">
                        username is or email is required
                      </div>
                    </div>
                    <div
                      className="form-group is-invalid mb-4 mx-auto w-75"
                      //   style={{ textAlign: "center" }}
                    >
                      <label>password</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="code"
                        placeholder="password"
                        required=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                      />

                      <div className="invalid-feedback">
                        username is or email is required
                      </div>
                    </div>
                    <div
                      className="form-group is-invalid mb-4 mx-auto w-75"
                      //   style={{ textAlign: "center" }}
                    >
                      <label>Code</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="code"
                        placeholder="Code"
                        required=""
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />

                      <div className="invalid-feedback">
                        username is or email is required
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-12 col-sm-offset-3">
                          <button className="w-100 mt-4 form-control btn btn-login">
                            Log In
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <a
                  href="https://t.me/crowdgrowing"
                  target="_blank"
                  className="btn-floating mx-auto mt-4 btn telegramLink btn-tw mx-1 waves-effect waves-light"
                >
                  <i className="fab fa-telegram"></i> Join channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default twofa;
