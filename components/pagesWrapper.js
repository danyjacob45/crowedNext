import React, { useEffect, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { useForm } from "react-hook-form";

// import {useH} from 'next/router'
import { useRouter } from "next/router";
import classnames from "classnames";
import Footer from "./footer";

import ScrollAnimation from "react-animate-on-scroll";

import { Carousel } from "react-responsive-carousel";

// import Logo from "/assets/imgs/pic-19.png";
import ResetPassword from "../components/resetPassword";
import Registration from "../components/register";
import { AuthService } from "../services/auth/auth.http";
import { setCurrentUser, setCurrentStore } from "../store/auth/authActions";
import { useDispatch } from "react-redux";

const home = ({ children }) => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const [registerSuccessModal, setRegisterSuccessModal] = React.useState(false);

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(0);
  const [roadPosition, setRoadPosition] = useState(1);
  const [isMobil, setIsMobil] = useState(false);
  const [regAuthModal, setRegAuthModal] = React.useState(null);
  const [serverError, setServerError] = React.useState(null);
  const [referralValue, setReferralValue] = React.useState(null);

  // const [regAuthModal, setRegAuthModal] = React.useState(null);

  const history = useRouter();

  console.log(history);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      AuthService.getUser()
        .then((res) => {
          window.hasCheckedAuth = true;
          dispatch(
            setCurrentUser({
              user: res.data.user,
              token: localStorage.getItem("token"),
            })
          );
          history.push("/user");
        })
        .catch((err) => {});
    }
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    });
    // console.log(window.innerWidth, "innerwidht111");

    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 992) {
        setIsMobil(true);
      } else {
        setIsMobil(false);
      }
    });
    if (window.innerWidth < 992) {
      setIsMobil(true);
    }
  }, []);

  const getRoadYear = () => {
    if (!isMobil) {
      if (roadPosition === 1) return 2020;
      if (roadPosition === 0) return 2017;
      return 2024;
    } else {
      if (roadPosition === 1) return 2020;
      if (roadPosition === 0) return 2019;
      if (roadPosition === -1) return 2018;
      if (roadPosition === -2) return 2017;
      if (roadPosition === 2) return 2021;
      if (roadPosition === 3) return 2022;
      if (roadPosition === 4) return 2023;
      if (roadPosition === 5) return 2024;
      return 2024;
    }
  };

  const onSubmitLogin = (data) => {
    AuthService.login(data)
      .then((res) => {
        debugger;
        if (res.data.token) {
          // localStorage.setItem("token", res.data.token);
          // console.log(res.data, "rrress")
          // setToken(res.data.token);
          if (res.data.fa_status == 1) {
            // window.location.href = "http://crowd-growing.com/2fa";
          } else {
            dispatch(
              setCurrentUser({
                user: res.data.user,
                token: res.data.token,
              })
            );

            history.push("/user");

            // window.location.href = "http://crowd-growing.com/user/dashboard";
            // window.location.href = 'http://crowd-growing.conm/user/dashboard';
          }

          // setRegAuthModal(null);
        } else {
          setServerError("incorrect user or password");
        }
      })
      .catch((err) => {
        setServerError("incorrect user or password");
        if (err.response && err.response.data) {
          setServerError(err.response.data && err.response.data.message);
        } else {
          setServerError("server error :/");
        }
      });
    // setLoadaing(true);
    // login({ email: data.userName, password: data.password })
    //   .then((res) => {
    //     setLoadaing(false);
    //     dispatch(setCurrentUser(res.data.success));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setServerError("wrong user or password");
    //     setLoadaing(false);
    //   });
  };

  const onInputChange = () => {
    setServerError(null);
  };
  return (
    <div className="landingPagesWrapper">
      <div className={classnames("header", { headerScroll })}>
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">
              <img
                height="40"
                src="/assets/svges/crowd_growing_logowhite.svg"
              />
            </div>
            <div
              onClick={() => setBurgerMenu(!burgerMenu)}
              className="d-block d-lg-none burger pr-3 "
            >
              <svg
                width="25"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-bars fa-w-14 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  class=""
                ></path>
              </svg>
            </div>
            <div
              className={
                !burgerMenu
                  ? "menu  d-lg-block"
                  : "menu openBurgerMenu d-lg-block"
              }
            >
              <ul className="list-unstyled list-inline">
                {history.pathname === "/home" ||
                history.pathname.includes("/api/password/find/") ||
                history.pathname === "/mlm-landing" ? (
                  <React.Fragment>
                    <li>
                      <Link
                        activeClass="active"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="OurGoals"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Market
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="BUSINESS_MODEL"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Business Model
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="lifCircle"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Strategy
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="profits"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        {/* How to make Profits */}
                        Locations
                      </Link>
                    </li>

                    {/* <li>
                     
                      <Link
                        activeClass="active"
                        to="Products"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Products
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        activeClass="active"
                        to="OurCEO"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                      >
                        Our Team
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="RoadMap"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Roadmap
                      </Link>
                    </li>
                  </React.Fragment>
                ) : (
                  <ul class="list-unstyled list-inline">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Goals and Vision</a>
                    </li>
                    <li>
                      <a href="/">Business Model</a>
                    </li>
                    <li>
                      <a href="/">Life Cycle </a>
                    </li>
                    <li>
                      <a href="/">
                        Locations
                        {/* How to make Profits */}
                      </a>
                    </li>
                    {/* <li>
                      <a href="/">Products</a>
                    </li> */}
                    <li>
                      <a href="/"> Our Team</a>
                    </li>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                  </ul>
                )}
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setRegAuthModal("register");
                    }}
                    className="navBtn"
                    href=""
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="homenn">
        {registerSuccessModal && (
          <div className="rt-container">
            <div className="col-rt-12">
              <div className="Scriptcontent">
                <div id="card" className="animated fadeIn">
                  <div id="upper-side">
                    {/* <h3 id="status">Success</h3> */}
                  </div>
                  <div id="lower-side">
                    {registerSuccessModal === "resetPass" ? (
                      <p id="message">
                        password reset link send on you email address
                      </p>
                    ) : registerSuccessModal === "changePassword" ? (
                      <p>Password changed successfully </p>
                    ) : (
                      ""
                    )}

                    <a
                      href="#"
                      onClick={() => {
                        setRegisterSuccessModal(false);
                        // setRegAuthModal("login");
                        history.push("/");
                      }}
                      id="contBtn"
                    >
                      close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {regAuthModal && (
          <div
            onClick={() => setRegAuthModal(false)}
            className="container registerContainer"
          >
            <div onClick={(e) => e.stopPropagation()} className="row">
              <div className="col-md-12 col-md-offset-3">
                <div className="panel panel-login">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-6">
                        <a
                          onClick={() => {
                            setRegAuthModal("login");
                          }}
                          href="#"
                          className={regAuthModal === "login" ? "active" : ""}
                          id="login-form-link"
                        >
                          Login
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          onClick={() => {
                            setRegAuthModal("register");
                          }}
                          href="#"
                          className={
                            regAuthModal === "register" ? "active" : ""
                          }
                          id="register-form-link"
                        >
                          Register
                        </a>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="panel-body">
                    {/* <div className="LoginHeader">
                    <img src={Logo} />
                    <h5>Crowd Growing </h5>
                  </div> */}

                    <div className="row">
                      <div className="col-lg-12">
                        {regAuthModal === "login" ? (
                          <form
                            onSubmit={handleSubmit(onSubmitLogin)}
                            id="login-form"
                            action="https://phpoll.com/login/process"
                            method="post"
                            role="form"
                          >
                            {serverError && (
                              <div
                                className="text-center"
                                style={{ color: "red" }}
                              >
                                {serverError}
                              </div>
                            )}

                            <div className="form-group is-invalid">
                              <label>Email</label>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                tabindex="1"
                                placeholder="username"
                                className={classnames("form-control", {
                                  "is-invalid": errors.username,
                                })}
                                ref={register({
                                  required: true,
                                })}
                                onChange={onInputChange}
                              />
                              <div className="invalid-feedback">
                                username is or email is required
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Password</label>

                              <input
                                type="password"
                                name="password"
                                id="password"
                                tabindex="2"
                                className={classnames("form-control", {
                                  "is-invalid": errors.password,
                                })}
                                placeholder="Password"
                                ref={register({
                                  required: true,
                                })}
                                onChange={onInputChange}
                              />
                              <div className="invalid-feedback">
                                password is required
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="text-center text-right">
                                    <a
                                      href="#"
                                      onClick={() => {
                                        setRegAuthModal("resetPassword");
                                      }}
                                      tabindex="5"
                                      className="forgot-password d-block text-right mr-1"
                                    >
                                      Forgot Password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-12 col-sm-offset-3">
                                  <button className="w-100 mt-4 form-control btn btn-login">
                                    {" "}
                                    Log In
                                  </button>
                                  {/* <input
                                type="submit"
                                name="login-submit"
                                id="login-submit"
                                tabindex="4"
                                className="form-control btn btn-login"
                                value="Log InLog In"
                              /> */}
                                </div>
                              </div>
                            </div>
                          </form>
                        ) : regAuthModal === "resetPassword" ? (
                          <ResetPassword
                            setRegisterSuccessModal={(d) =>
                              setRegisterSuccessModal(d)
                            }
                            setRegAuthModal={(d) => setRegAuthModal(d)}
                            setRegisterSuccessModal={(d) =>
                              setRegisterSuccessModal(d)
                            }
                          />
                        ) : regAuthModal === "changePassword" ? (
                          <ChangePassword token={resetToken} />
                        ) : (
                          <Registration
                            defaultValue={referralValue}
                            regAuthModal={regAuthModal}
                            setRegAuthModal={(d) => setRegAuthModal(d)}
                            setRegisterSuccessModal={(d) =>
                              setRegisterSuccessModal(d)
                            }
                          />
                        )}
                      </div>
                      <a
                        href="https://t.me/crowdgrowing"
                        target="_blank"
                        className="btn-floating mx-auto  mt-4 btn  telegramLink btn-tw mx-1 waves-effect waves-light"
                      >
                        <i class="fab fa-telegram" /> Join channel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default home;
