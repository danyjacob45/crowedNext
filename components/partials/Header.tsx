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

type Props = {
  authLogout: typeof authLogout;
  sideBarCollapse: any;
  // user: IUser;
};

const Header = ({ authLogout, sideBarCollapse }: Props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    AuthService.logout()
      .then(() => {
        authLogout();
        router.push("/login");
      })
      .catch((err: any) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

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
            className={classNames("dropdown-menu dropleft", { show: showMenu })}
          >
            <a
              className="nav-link text-center"
              href="http://local.mlm/user/logout"
            >
              <img
                width="20"
                className="freeImgs"
                src="http://local.mlm/asset/icons/Asset9.png "
              />

              <span className="nav-link-text pl-4">Log out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { authLogout })(Header);
