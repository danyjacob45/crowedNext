import React from "react";
import classnames from "classnames";

interface Props {
  Icons: any;
  title: string;
  active: string;
}

const notifications: React.FC<Props> = ({ Icons, title, active }) => {
  const [openNtification, setOpenNotification] = React.useState(false);

  React.useEffect(() => {
    const closeNotification = () => {
      setOpenNotification(false);
    };
    window.addEventListener("click", closeNotification);
    return () => {
      window.removeEventListener("click", closeNotification);
    };
  }, []);
  return (
    <>
      <a
        onClick={(e) => {
          //
          e.stopPropagation();
          if (openNtification === false) {
            e.stopPropagation();
          }
          setOpenNotification(true);
        }}
        href="#"
        className="navbar-nav-link  caret-0"
        data-toggle="dropdown"
      >
        {Icons()}
      </a>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ position: "absolute" }}
        className={classnames(
          "notifications dropdown-menu dropdown-menu-right dropdown-content   p-0",
          {
            show: openNtification && active === title,
          }
        )}
      >
        <div
          style={{ backgroundColor: "#afafb1", color: "#000" }}
          className="dropdown-content-header head   p-2 pl-2 show"
        >
          <span className="font-weight-semibold">
            {/* {title} */}
            {title === "Message" ? (
              <img width="20" src="./assets/svg/envelope.svg" />
            ) : (
              <img width="20" src="./assets/svg/bell.svg" />
            )}
          </span>
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
          style={{
            justifyContent: "center",
            background: "#fff",
            borderTop: "1px solid #afafb166",
          }}
          className=" dropdown-content-footer   p-3 pl-5 text-center d-flex"
        >
          <a
            href="http://local.mlm/user/not-delete-all"
            style={{ backgroundColor: "transparent", color: "#afafb1" }}
            className="btn btn-sm ml-1 mr-0"
          >
            <i className="fas fa-trash-alt"></i> Delete All
          </a>
          <a
            href="http://local.mlm/user/markAsRead"
            style={{ backgroundColor: "transparent", color: "#afafb1" }}
            className="btn  btn-sm ml-1 mr-0"
          >
            Mark As Read
          </a>
        </div>
      </div>
    </>
  );
};

export default notifications;
