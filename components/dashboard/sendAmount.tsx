import React, { useState, useEffect } from "react";
import ModalContainer from "../common/modal/modalContainer";
import classnames from "classnames";
import { AuthService } from "../../services/user/user.http";
import { red } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  setCurrentStore,
  updateUser,
} from "../../store/auth/authActions";

interface Props {
  openSendAmountModal: Boolean;
  setOpenSendAmountModals: any;
}

const SendAmount: React.FC<Props> = ({
  openSendAmountModal,
  setOpenSendAmountModals,
}) => {
  const { user } = useSelector((store: any) => {
    return store.auth;
  });

  const dispatch = useDispatch();

  const [addresError, setAddresError] = useState<any>("");
  const [amountError, setAmountError] = useState<any>("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loader, setLoader] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<any>(false);

  const sendAmount = () => {
    setLoader(true);
    AuthService.sendAmount(address, amount)
      .then((res) => {
        setLoader(false);
        setDone(true);
        console.log(res);
        dispatch(
          updateUser({
            user: {
              ...user,
              balance: {
                ...user.balance,
                spendable: Number(user.balance.spendable) - Number(amount),
              },
            },
          })
        );
        // debugger;
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        debugger;

        if (err?.response?.data?.errors) {
          setServerError(err.response.data.errors.SEND_AMOUNT_REQUEST);
        }
      });
  };

  const sendAmountDoneModal = () => {
    return (
      <div
        style={{ color: "#000", fontSize: "14px" }}
        className="modal-content  "
      >
        <div
          className="sweet-alert  showSweetAlert visible"
          data-custom-className=""
          data-has-cancel-button="false"
          data-has-confirm-button="true"
          data-allow-outside-click="false"
          data-has-done-function="false"
          data-animation="pop"
          data-timer="null"
          style={{ display: "inline-block" }}
        >
          <div className="sa-icon sa-success animate">
            <span className="sa-line sa-tip animateSuccessTip"></span>
            <span className="sa-line sa-long animateSuccessLong"></span>

            <div className="sa-fix"></div>
            <div className="sa-placeholder"></div>
            {/* </div><div className="sa-icon sa-custom" style="display: none;"></div> */}
          </div>
          <h2 style={{ color: "#000" }}>Success!</h2>
          <p className="lead text-muted ">
            {/* {showModal === "profile" ? "Profile" : "Photo"} Updated */}
            The transaction was completed successfully
          </p>

          <div className="sa-button-container">
            <div className="sa-confirm-button-container">
              <button
                onClick={() => closeModal()}
                className="confirm btn btn-lg btn-primary"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setOpenSendAmountModals(false);
    setDone(false);
    setAmount("");
    setAddress("");
    setAddresError("");
    setAmountError("");
  };

  return (
    <ModalContainer
      maxWidth={600}
      showModal={openSendAmountModal}
      closeModal={() => {
        setDone(false);
        setOpenSendAmountModals(false);
      }}
    >
      <>
        {loader && (
          <div className="loaderWrapper ">
            <img
              className="loader"
              src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"
            />
          </div>
        )}

        {done ? (
          sendAmountDoneModal()
        ) : (
          <div
            className="p-5"
            style={{
              background: "#C8C8C8",
            }}
          >
            <input
              type="hidden"
              name="_token"
              value="cngHFLIH95tNqyifuaTH8P3XEIRPIN8IAkbfiLvR"
            />{" "}
            <div className="row">
              <div className="col-lg-12">
                <div className="card-header header-elements-inline">
                  <h2 className="text-center colorBlack">
                    Balance ${user?.balance?.spendable.toFixed(2)}
                  </h2>
                </div>

                {serverError && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {serverError}
                </div>
              )}

              </div>
            </div>
            
            <div className="form-group row">
              <div className="col-lg-12">
                <label className="col-form-label colorBlack pb-1 d-flex justify-content-between ">
                  <span>Amount </span>
                </label>
                <div style={{ color: "red" }}>{amountError && amountError}</div>

                <div className="input-group input-group-merge">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    step="any"
                    name="amount"
                    min="10"
                    onChange={(e: any) => {
                      // debugger;
                      setServerError("");
                      setAmountError("");
                      setAmount(e.target.value.replace(/\D/g, ""));
                    }}
                    value={amount}
                    maxLength={10}
                    className="form-control"
                    // required=""
                  />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-12">
                <label className="col-form-label  colorBlack">Recipient E-Mail Address</label>
                <div style={{ color: "red" }}>{addresError && addresError}</div>

                <input
                    type="text"
                    step="any"
                    name="address"
                    
                    onChange={(e: any) => {
                        setServerError("");
                        setAddresError("");
                        
                          
                          setAddress(e.target.value);
                        
                      }}
                    
                    maxLength={1000}
                    className="form-control"
                  />
              </div>
            </div>
  
            
            <div className="text-right">
              <button
                onClick={(e) => {
                  // debugger;

                  if (!amount) {
                    setAmountError("enter amount");
                    return;
                  }

                  if (!address) {
                    setAddresError("select address");
                    return;
                  }
                  e.preventDefault();
                  sendAmount();
                  // @ts-ignore: Unreachable code error
                }}
                type="submit"
                style={{ backgroundColor: "#2EA031" }}
                className="btn btn-primary w-50 btcSubmit"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </>
    </ModalContainer>
  );
};

export default SendAmount;
