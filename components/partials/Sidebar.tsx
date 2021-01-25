import React, { useEffect, useState } from "react";
import Activelink from "./ActiveLink.jsx";
import SlideToggle from "react-slide-toggle";
import { useRouter } from "next/router";
// @ts-ignore: Unreachable code error
import InvestIcon from "../../public/assets/icons/investment.svg";
// @ts-ignore: Unreachable code error
import FinancialIcon from "../../public/assets/icons/coins.svg";
// @ts-ignore: Unreachable code error
import MarketingIcon from "../../public/assets/icons/marketing.svg";
// @ts-ignore: Unreachable code error
import MerchandisegIcon from "../../public/assets/icons/dadd.svg";
// @ts-ignore: Unreachable code error
import SecurityIcon from "../../public/assets/icons/guard.svg";
// @ts-ignore: Unreachable code error
import SupportIcon from "../../public/assets/icons/operator.svg";
// import Team from "../../public/assets/icons/Asset5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faTachometerAlt from "../../public/assets/svges/dashboardMenu.svg";
import Link from "next/link";
import { toggleSidebar } from "../../store/actions/uiActions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

type MenuItem = {
  icon?: Function;
  title: string;
  href: string;
  subMenus?: MenuItem[];
  withNestedRoutes?: boolean;
};

const Sidebar = () => {
  const [subMenuName, setSubMenuName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 800) {
      dispatch(toggleSidebar());
    }
  }, []);
  const { sideBarCollapse } = useSelector((store: any) => {
    return store.ui;
  });
  const sidebarMenu = [
    {
      icon: () => <img width="16" src="/assets/svges/dashboardMenu.svg" />,
      href: "/",
      title: "Dashboard",
    },

    {
      icon: () => <img width="16" src="/assets/svges/investment.svg" />,

      href: "/invest",
      title: "Investment",
    },
    {
      icon: () => <img width="16" src="/assets/svges/team.svg" />,

      href: "/team",
      title: "Team",
    },
    {
      icon: () => <img width="16" src="/assets/svges/financial.svg" />,
      href: "/financial",
      title: "Financial",
    },
    {
      icon: () => <img width="16" src="/assets/svges/marketing.svg" />,
      href: "/marketing",
      title: "Marketing",
    },
    {
      icon: () => <img width="16" src="/assets/svges/Merchandise.svg" />,
      href: "/Merchandise",
      title: "Merchandise (coming)",
    },

    {
      icon: () => <img width="16" src="/assets/svges/Security.svg" />,
      href: "#",
      title: "Profile & Security",

      subMenus: [
        { href: "/profile", title: "Profile" },
        { href: "/security", title: "Security" },
      ],
    },

    {
      icon: () => <img width="16" src="/assets/svges/Support.svg" />,
      href: "/Support",
      title: " Support & FAQ’s",
    },
  ];

  const { asPath } = useRouter();

  console.log(sideBarCollapse, "sideBarCollapse");
  const renderSubMenus = ({
    subMenus,
    menuName,
  }: {
    subMenus: MenuItem[];
    menuName: string;
  }): JSX.Element => {
    return (
      <div
        className={classNames("collapse", {
          show: menuName === subMenuName,
        })}
        id="account-security"
      >
        <ul className="nav nav-sm flex-column">
          {subMenus.map((item: MenuItem) => {
            return (
              <li key={item.title} className="nav-item text-dark">
                <Activelink activeClassName="active" href={item.href}>
                  <a className="nav-link">
                    <span className="">{item.title}</span>
                  </a>
                </Activelink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav
        className={classNames(
          "sidenav  navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-dark",
          { collapse: sideBarCollapse }
        )}
      >
        <div
          className="scroll-wrapper scrollbar-inner"
          style={{ position: "relative" }}
        >
          <div
            className="scrollbar-inner scroll-content scroll-scrolly_visible"
            // style={{
            //   height: "auto",
            //   marginBottom: "0px",
            //   marginRight: "0px",
            //   maxHeight: "219.83px",
            // }}
          >
            <div className="sidenav-header d-flex align-items-center">
              <a
                className="navbar-brand pr-1 d-flex"
                href="http://local.mlm/user/profile"
              >
                <img height="31" src="/assets/images/logo.png" alt="logo" />

                <span
                  style={{
                    maxWidth: "130px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                  }}
                >
                  residual
                </span>
              </a>
              <div className="ml-auto">
                <div
                  className={classNames("sidenav-toggler d-block ", {
                    active: !sideBarCollapse,
                  })}
                  id="asideToggler"
                  onClick={() => dispatch(toggleSidebar())}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-inner">
              <div
                className="collapse navbar-collapse"
                id="sidenav-collapse-main"
              >
                <ul className="navbar-nav">
                  {sidebarMenu.map((item: MenuItem) => {
                    // if (item.subMenus) {
                    // const paths = item.href.split("/");
                    // let collapsed = asPath.indexOf(paths[1]) > -1 ? false : true;

                    // if (asPath) {
                    //   if (
                    //     asPath.includes("/store/") &&
                    //     asPath.includes("/products")
                    //   ) {
                    //     collapsed = true;
                    //   }
                    // }
                    return (
                      <li key={item.title} className="nav-item">
                        <Activelink activeClassName="active" href={item.href}>
                          <a
                            data-toggle={item.subMenus ? "collapse" : ""}
                            aria-expanded={
                              item.subMenus && item.title === subMenuName
                                ? true
                                : false
                            }
                            className="nav-link nav-link-dashboard"
                            onClick={() => {
                              dispatch(toggleSidebar(true));
                              if (item.subMenus) {
                                if (subMenuName !== item.title) {
                                  setSubMenuName(item.title);
                                } else {
                                  setSubMenuName("");
                                }
                              }
                            }}
                          >
                            <span className="asideIcon">
                              {item.icon && item.icon()}
                            </span>
                            <span className="nav-link-text text-dark">
                              {item.title}
                            </span>
                          </a>
                        </Activelink>
                        {item.subMenus
                          ? renderSubMenus({
                              subMenus: item.subMenus,
                              menuName: item.title,
                            })
                          : null}
                      </li>
                    );
                    // }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
