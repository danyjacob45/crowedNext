import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";
import ModalContainer from "../components/common/modal/modalContainer";
import { AuthService } from "../services/user/user.http";

const withdrawalAddress = () => {
  const [addressList, setAddressList] = useState([]);
  const [showModal, setShowModal] = useState<any>("");
  const [method, setMethod] = useState("BITCOIN");
  const [address, setAddress] = useState("");
  const [id, setId] = useState(0);

  const getList = () => {
    AuthService.getWithdraws().then((res) => {
      setAddressList(res.data.address);
      console.log(res);
      // debugger;
    });
  };

  useEffect(() => {
    getList();
  }, []);

  const closeModal = () => {
    setShowModal("");
    setId(0);
    setAddress("");
    setMethod("");
  };

  const addEditAddress = () => {
    let data: any = {
      method,
      address,
    };
    if (id) {
      data.id = id;
    }
    AuthService.addAditWithdraw(data)
      .then((res) => {
        console.log(res);
        getList();
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAddress = (e) => {
    e.preventDefault();
    AuthService.deleteWithdraws(id).then((res) => {
      console.log(res);
      getList();
      closeModal();
    });
  };

  const confirm = () => {
    return (
      <>
        <div
          style={{ background: "rgb(200, 200, 200)" }}
          className="modal-content"
        >
          <div className="modal-header">
            <button
              onClick={() => {
                closeModal();
              }}
              type="button"
              className="close"
              data-dismiss="modal"
            >
              ×
            </button>
            <div className="modal-body">
              <h4 className="font-weight-semibold text-center">
                Are you sure you want to delete this?
              </h4>
            </div>
            <div className="modal-footer">
              <a
                onClick={deleteAddress}
                href="https://crowd-growing.com/user/withdraw-address-delete/27"
                className="btn btn-sm btn-danger text-dark"
              >
                Proceed
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout title="financial">
      <ModalContainer
        closeModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      >
        {showModal === "delete" ? (
          confirm()
        ) : (
          <div
            style={{ background: "rgb(200, 200, 200)" }}
            className="modal-content"
          >
            <div className="modal-header">
              <button
                onClick={() => {
                  closeModal();
                }}
                type="button"
                className="close"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addEditAddress();
              }}
            >
              <input
                type="hidden"
                name="_token"
                value="5bCxjsjscPUEgemDCg7qnR5CLY8vRPt52ibqp0F0"
              />{" "}
              <div className="modal-body">
                <div className="form-group row">
                  <div className="col-lg-12">
                    <label
                      style={{ color: "black" }}
                      htmlFor="method"
                      className="col-form-label "
                    >
                      Method:
                    </label>
                    <select
                      onChange={(e: any) => {
                        setMethod(e.target.value);
                      }}
                      id="method"
                      value={method}
                      className="form-control"
                      name="method"
                    >
                      <option value="BITCOIN">Bitcoin</option>
                      <option value="ETH">Ethereum</option>
                      <option value="USDT">Usdt</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <label
                      style={{ color: "black" }}
                      className="col-form-label "
                    >
                      Address:
                    </label>

                    <input
                      name="address"
                      onChange={(e: any) => {
                        setAddress(e.target.value);
                      }}
                      value={address}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-sm bg-dark text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </ModalContainer>
      <div className="main-content">
        <div className="content-wrapper mx-4">
          <div className="card" id="other">
            <div className="card-header header-elements-inline">
              <a
                className="btn  btn-sm  reallyGreenColor text-white"
                data-toggle="modal"
                data-target="#create"
                onClick={() => {
                  setShowModal("add");
                  setId(0);
                }}
              >
                <i className="icon-file-plus mr-2"></i>New address
              </a>
            </div>
            <div className="table-responsive py-4">
              <div id="delete27" className="modal fade newAddModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <h4 className="font-weight-semibold text-center">
                        Are you sure you want to delete this?
                      </h4>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="https://crowd-growing.com/user/withdraw-address-delete/27"
                        className="btn btn-sm btn-danger text-dark"
                      >
                        Proceed
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table table-flush">
                <thead className="">
                  <tr>
                    <th>S/N</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addressList.map((el: any, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}.</td>
                        <td>{el.method}</td>
                        <td>{el.address}</td>
                        <td className="text-center">
                          <a
                            data-toggle="modal"
                            data-target="#update27"
                            className="btn btn-sm text-success"
                            onClick={() => {
                              setMethod(el.method);
                              setAddress(el.address);
                              setId(el.id);
                              setShowModal("edit");
                            }}
                          >
                            <i className="fa fa-pencil"></i>
                            Edit
                          </a>
                          <a
                            data-toggle="modal"
                            data-target="#delete27"
                            className="btn btn-sm text-danger"
                            onClick={() => {
                              setId(el.id);
                              setShowModal("delete");
                            }}
                          >
                            <i className="fa fa-remove"></i>Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withdrawalAddress;
