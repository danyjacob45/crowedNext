import React, { useState, useEffect } from "react";
import classnames from "classnames";

const dataTable = ({ investments }) => {
  const [searchVal, setSearchVal] = useState("");
  const [showEntries, setShowEntries] = useState(5);
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    let data = investments.filter((el) => {
      if (
        el.trx?.includes(searchVal) ||
        el.total.toString().includes(searchVal) ||
        el.typeTitle?.includes(searchVal)
      ) {
        return true;
      }
      return false;
    });
    setData(data);
  }, [searchVal, investments]);

  const getTable = () => {
    // const splitValue =
    // setData(data);

    const newData = data.slice(
      activePage * showEntries,
      (activePage + 1) * showEntries
    );

    return newData.map((el, i) => {
      const time = new Date(el.createdAt);

      return (
        <tr key={i} role="row" className="even">
          <td className="">{activePage * showEntries + i + 1}.</td>
          <td>{el.typeTitle}</td>
          <td>{el.trx}</td>
          <td>
            {/* 2020/10/24 06:22:AM */}
            {time.getFullYear() +
              "/" +
              (time.getMonth() + 1) +
              "/" +
              time.getDate() +
              " "}
            {time.getHours() +
              ":" +
              time.getMinutes() +
              ":" +
              time.getSeconds()}
          </td>
          <td className="sorting_1">$ {el.amount}</td>
          <td>
            <span className="badge badge-success">Active</span>

            <i
              style={{
                lineHeight: "17px",
                verticalAlign: "middle",
                color: "blue",
              }}
              className="fas fa-info-circle"
              data-toggle="tooltip"
              data-placement="left"
              title=""
              data-original-title="It takes up to 7 days to set up your hosting equipment. As soon as its setup, ith will be shown as active."
            ></i>
          </td>
        </tr>
      );
    });
  };

  const getPagination = () => {
    // let pagination = [];
    let pagination = new Array(Math.ceil(data.length / showEntries));
    pagination.fill("");
    // debugger;

    return (
      <ul className="pagination">
        <li
          className="paginate_button page-item previous disabled"
          id="datatable-basic_previous"
        >
          <a
            href="#"
            aria-controls="datatable-basic"
            data-dt-idx="0"
            tabindex="0"
            className="page-link"
          >
            {"<"}
          </a>
        </li>
        {pagination.map((el, i) => {
          return (
            <li
              onClick={() => {
                setActivePage(i);
              }}
              className={classnames("paginate_button page-item ", {
                active: i === activePage,
              })}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-controls="datatable-basic"
                data-dt-idx="1"
                // tabindex="0"
                className="page-link"
              >
                {i + 1}
              </a>
            </li>
          );
        })}

        <li
          className="paginate_button page-item next"
          id="datatable-basic_next"
        >
          <a
            href="#"
            aria-controls="datatable-basic"
            data-dt-idx="3"
            // tabindex="0"
            className="page-link"
          >
            {">"}
          </a>
        </li>
      </ul>
    );
  };
  return (
    <div className="">
      <div className="card" id="other">
        <div className="card-header header-elements-inline">
          <h3 className="mb-0">Investment History</h3>
        </div>
        <div className="table-responsive py-4">
          <div className="dataTables_wrapper dt-bootstrap4 no-footer">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_length">
                  <label className="d-flex align-items-center">
                    Show
                    <select
                      style={{ width: "90px" }}
                      name="datatable-basic_length"
                      className="form-control form-control-sm"
                      onChange={(e) => {
                        setShowEntries(e.target.value);
                        setActivePage(0);
                      }}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      {/* <option value="100"></option> */}
                    </select>{" "}
                    entries
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="datatable-basic_filter" className="dataTables_filter">
                  <label className="d-flex align-items-center">
                    Search:
                    <input
                      type="search"
                      onChange={(e) => {
                        setSearchVal(e.target.value);
                      }}
                      value={searchVal}
                      className="form-control form-control-sm"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <table
                  className="table table-flush dataTable no-footer"
                  role="grid"
                >
                  <thead className="">
                    <tr role="row">
                      <th className="sorting" style={{ width: "151.016px" }}>
                        S/N
                      </th>
                      <th
                        className="sorting"
                        aria-controls="datatable-basic"
                        aria-label="Name: activate to sort column ascending"
                        style={{ width: "222.266px" }}
                      >
                        Name
                      </th>
                      <th className="sorting" style={{ width: "436.016px" }}>
                        Reference: #
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="datatable-basic"
                        rowspan="1"
                        colspan="1"
                        aria-label="Started: activate to sort column ascending"
                        style={{ width: " 422.266px" }}
                      >
                        Started
                      </th>
                      <th
                        className="sorting_desc"
                        tabindex="0"
                        aria-controls="datatable-basic"
                        rowspan="1"
                        colspan="1"
                        aria-label="Amount: activate to sort column ascending"
                        style={{ width: "237.266px" }}
                        aria-sort="descending"
                      >
                        Amount
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="datatable-basic"
                        rowspan="1"
                        colspan="1"
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: "258.516px" }}
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getTable()}
                    {/* <tr role="row" className="even">
                      <td className="">10.</td>
                      <td>Beginner</td>
                      <td>SbLfLaFn28axEKsP</td>
                      <td>2020/10/24 06:22:AM</td>
                      <td className="sorting_1">$ 100.00</td>
                      <td>
                        <span className="badge badge-success">Active</span>

                        <i
                          style={{
                            lineHeight: "17px",
                            verticalAlign: "middle",
                            color: "blue",
                          }}
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          data-placement="left"
                          title=""
                          data-original-title="It takes up to 7 days to set up your hosting equipment. As soon as its setup, ith will be shown as active."
                        ></i>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="datatable-basic_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {activePage * showEntries + 1} to{" "}
                  {(activePage + 1) * showEntries} of {data.length} entries
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="datatable-basic_paginate"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {getPagination()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dataTable;
