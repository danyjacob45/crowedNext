import React, { useState, useEffect } from "react";
import { User } from "../../interface";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { authLogout } from "../../store/auth/authActions";
import { AuthService } from "../../services/user/user.http";
import { IUser } from "../../store/auth/authReducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import Notification from "../notifications/notifications";
// import { authLogout } from "../store/auth/authActions";

type Props = {
  authLogout: typeof authLogout;
  sideBarCollapse: any;
  // user: IUser;
};

const Header = ({ sideBarCollapse }: Props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [activeNotification, setActiveNotification] = useState("");
  // const [text, setText] = useState("");

  // const convertTZ = (date: any, tzString: any) => {
  //   return new Date(
  //     (typeof date === "string" ? new Date(date) : date).toLocaleString(
  //       "en-US",
  //       { timeZone: tzString }
  //     )
  //   );
  // };

  const getNotifications = () => {
    AuthService.notifications().then((res) => {
      // console.log(res);
      setNotifications(res.data.notifications);
      setNotificationCount(
        res.data.notifications.filter((el) => !el.seen).length
      );
    });
  };

  useEffect(() => {
    getNotifications();
    const closeMenu = () => setShowMenu(false);

    // var x = setInterval(function () {
    //   var event = new Date();
    //   var londonTime = new Date("2021/3/12 24:00");
    //   console.log(
    //     event.toLocaleString("en-GB", { timeZone: "Europe/London" }),
    //     "london",
    //     convertTZ(event, "Europe/London")
    //   );
    //   var now = convertTZ(event, "Europe/London").getTime();
    //   var countDownDate = convertTZ(londonTime, "Europe/London").getTime();
    //   var distance = countDownDate - now;
    //   // debugger;
    //   // var distance = distance / 1000;
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor(
    //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //   );
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //   setText(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    //   // $("#Withdrawal").addClass("isDisabled")
    //   // $("#paymentCountDown").removeClass("d-none")

    //   if (distance < 0) {
    //     clearInterval(x);
    //     // $("#BalanceTimer").text("")
    //     // $("#Withdrawal").removeClass("isDisabled")
    //     // $("#paymentCountDown").addClass("d-none")
    //   }
    // }, 1000);

    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
      // clearInterval(x);
    };
  }, []);

  const deleteNotification = (id) => {
    AuthService.deleteNotification(id).then((res) => {
      console.log(res.data, "nnnnnnnnnnnnnnn");
      getNotifications();
    });
  };

  const deleteAllNotifications = () => {
    AuthService.deleteAllNotifications().then((res) => {
      console.log(res.data, "nnnnnnnnnnnnnnn");
      getNotifications();
    });
  };

  const readAllNotifications = () => {
    AuthService.readAllNotifications().then((res) => {
      console.log(res.data, "nnnnnnnnnnnnnnn");
      getNotifications();
    });
  };

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
      {/* <div
        id="paymentCountDown"
        className="timerPay"
        style={{ left: "calc(50% )" }}
      >
        Next Payout in <strong id="BalanceTimer">{text} </strong>
      </div> */}
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
            <Notification
              title="Message"
              active={activeNotification}
              data={[]}
              deleteItem={(id) => {
                console.log(id);
              }}
              markAsRead={() => {}}
              deleteAll={() => {}}
              Icons={() => (
                <div
                  onClick={() => setActiveNotification("Message")}
                  className="notification messages show-count notify"
                  data-count="0"
                ></div>
              )}
            />
          </li>
          <li className="nav-item dropdown">
            <Notification
              title="Notifications"
              active={activeNotification}
              data={notifications}
              markAsRead={() => {
                readAllNotifications();
              }}
              deleteAll={() => {
                deleteAllNotifications();
              }}
              deleteItem={(id: any) => deleteNotification(id)}
              Icons={() => (
                <div
                  onClick={() => setActiveNotification("Notifications")}
                  className="notification bell show-count notify"
                  data-count={notificationCount}
                ></div>
              )}
            />
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
