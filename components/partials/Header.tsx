import React, { useState, useEffect } from "react";
import { User } from "../../interface";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { authLogout } from "../../store/auth/authActions";
import { AuthService } from "../../services/auth/auth.http";
import { IUser } from "../../store/auth/authReducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
// import { authLogout } from "../store/auth/authActions";

type Props = {
  authLogout: typeof authLogout;
  sideBarCollapse: any;
  // user: IUser;
};

const Header = ({ sideBarCollapse }: Props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    authLogout();
    router.push("/");
  };

  return (
    <div
      style={{ position: "fixed" }}
      className={classNames(
        "navbar navbarHorizontal navbar-expand-md navbar-light navbar-static ",
        {
          sideBarCollapse: sideBarCollapse,
        }
      )}
    >
      <div
        id="paymentCountDown"
        className="timerPay d-none"
        style={{ left: "calc(50% + 125px)" }}
      >
        Next Payout in <strong id="BalanceTimer"> </strong>
      </div>

      <div className="leftSide">
        <a href="http://local.mlm/user/dashboard">
          <img height="32" src="/assets/svges/logof.svg" alt="logo" />
        </a>
      </div>
      <div
        className="collapse navbar-collapse  justify-content-end d-flex"
        id="navbar-mobile"
      >
        <ul className="navbar-nav d-flex  notificationsList">
          <li className="nav-item dropdown  mr-2 mr-md-4">
            <a
              href="#"
              className="navbar-nav-link  caret-0"
              data-toggle="dropdown"
            >
              <div
                className="notification messages show-count notify"
                data-count="0"
              ></div>
            </a>
            <div
              style={{ position: "absolute" }}
              className="notifications dropdown-menu dropdown-menu-right dropdown-content  p-0"
            >
              <div className="dropdown-content-header head text-light bg-dark p-2 pl-5">
                <span className="font-weight-semibold">Messages</span>
                <a href="#" className="text-default">
                  <i className="icon-compose"></i>
                </a>
              </div>

              <div className="dropdown-content-body dropdown-scrollable">
                <div className="dropdown-content-footer p-3  text-center">
                  <h4>You haven't messages</h4>
                </div>
              </div>

              <div
                style={{ justifyContent: "center" }}
                className="dropdown-content-footer bg-light p-3 pl-5 text-center d-flex"
              >
                <a
                  href="http://local.mlm/user/message-delete-all"
                  className="btn btn-danger btn-sm ml-1 mr-0"
                >
                  <i className="fas fa-trash-alt"></i> Delete All
                </a>
                <a
                  href="http://local.mlm/user/markAsReadMessage"
                  className="btn btn-default btn-sm ml-1 mr-0"
                >
                  Mark As Read
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="navbar-nav-link  caret-0"
              data-toggle="dropdown"
            >
              <div
                className="notification bell show-count notify"
                data-count="1"
              ></div>
            </a>
            <div
              style={{ position: "absolute" }}
              className="notifications dropdown-menu dropdown-menu-right dropdown-content  p-0"
            >
              <div className="dropdown-content-header head text-light bg-dark p-2 pl-5">
                <span className="font-weight-semibold">Notifications</span>
                <a href="#" className="text-default">
                  <i className="icon-compose"></i>
                </a>
              </div>

              <div className="dropdown-content-body dropdown-scrollable">
                <ul
                  style={{ overflowY: "scroll", maxHeight: "400px" }}
                  className="media-list py-4 pr-4"
                >
                  <li className="media pb-3">
                    <div className="media-body">
                      <div
                        style={{ justifyContent: "space-between" }}
                        className="d-flex align-items-start"
                      >
                        <span className="text-dark ">
                          Congrats, whitesaisss just joined your business!
                        </span>
                        <form
                          method="get"
                          action="http://local.mlm/user/delete-notification/69ff04d5-721b-43ae-aa38-f785c1f1d139"
                        >
                          <button
                            type="submit"
                            className="btn btn-danger btn-sm ml-1 mr-0"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                style={{ justifyContent: "center" }}
                className=" dropdown-content-footer bg-light p-3 pl-5 text-center d-flex"
              >
                <a
                  href="http://local.mlm/user/not-delete-all"
                  className="btn btn-danger btn-sm ml-1 mr-0"
                >
                  <i className="fas fa-trash-alt"></i> Delete All
                </a>
                <a
                  href="http://local.mlm/user/markAsRead"
                  className="btn btn-default btn-sm ml-1 mr-0"
                >
                  Mark As Read
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="dropdown   ml-2 ml-md-4">
          <button
            className={classNames("btn btn-secondary dropdown-toggle", {
              show: showMenu,
            })}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
          ></button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              minWidth: "140px",
            }}
            className={classNames("dropdown-menu py-2 p-0 dropleft", {
              show: showMenu,
            })}
          >
            <a
              className="nav-link text-center"
              href="#"
              onClick={(e: any) => {
                logout(e);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-out-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                className="svg-inline--fa fa-sign-out-alt fa-w-16 fa-2x"
              >
                <path
                  fill="#000"
                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                  className=""
                ></path>
              </svg>

              <span className="nav-link-text colorBlack pl-4">Log out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { authLogout })(Header);
