import React from "react";
import classnames from "classnames";

interface Props {
  Icons: any;
  title: string;
  active: string;
  data: any;
  deleteItem: Function;
  deleteAll: Function;
  markAsRead: Function;
}

const notifications: React.FC<Props> = ({
  Icons,
  title,
  active,
  data,
  deleteItem,
  deleteAll,
  markAsRead,
}) => {
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
            className="media-list pl-0 "
          >
            {!data?.length ? (
              <h4
                className="p-4"
                style={{ color: "#000", textAlign: "center" }}
              >
                not found
              </h4>
            ) : (
              data.map((el, i) => {
                return (
                  <li
                    style={{
                      opacity: el.seen ? "0.6" : "1",
                      background: i % 2 == 0 ? "#afafb13b" : "#fff",
                    }}
                    className="media pb-3 px-3 py-2"
                  >
                    <div className="media-body">
                      <div
                        style={{ justifyContent: "space-between" }}
                        className="d-flex align-items-start"
                      >
                        <span style={{ color: "#000" }} className=" ">
                          {el.text}
                        </span>
                        <form>
                          <button
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              deleteItem(el.id);
                            }}
                            className="btn btn-danger btn-sm ml-1 mr-0"
                          >
                            <i className="fas fa-trash-alt">delete</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <div
          style={{
            justifyContent: "center",
            background: "#fff",
            borderTop: "1px solid #afafb166",
            // @ts-ignore: Unreachable code error

            justifyContent: "space-around",
          }}
          className=" dropdown-content-footer   p-3 pl-5 text-center d-flex"
        >
          <a
            href="#"
            style={{ backgroundColor: "transparent", color: "#afafb1" }}
            className="btn btn-sm ml-1 mr-0"
            onClick={(e) => {
              e.preventDefault();
              deleteAll();
            }}
          >
            <i className="fas fa-trash-alt"></i> Delete All
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              markAsRead();
            }}
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
