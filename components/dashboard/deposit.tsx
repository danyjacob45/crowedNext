import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalContainer from "../common/modal/modalContainer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AuthService } from "../../services/user/user.http";
import axios from "axios";
import {
  setCurrentUser,
  setCurrentStore,
  updateUser,
} from "../../store/auth/authActions";
import classnames from "classnames";
interface Props {
  openDepositModal: Boolean;
  setOpenDepositModals: any;
}

const Deposit: React.FC<Props> = ({
  openDepositModal,
  setOpenDepositModals,
}) => {
  const { user } = useSelector((store: any) => {
    return store.auth;
  });

  const dispatch = useDispatch();

  const [depositType, setDepositType] = useState("BTC");
  const [copyReferer, setCopyReferer] = useState(false);
  const [copyReferer2, setCopyReferer2] = useState(false);
  const [openETH, setOpenETH] = useState<any>(null);
  const [amount, setAmount] = useState(false);
  const [amountError, setAmountError] = useState<any>("");
  const [loader, setLoader] = useState(false);
  const [transactionDone, setTransactionDone] = useState(false);

  useEffect(() => {
    /* jshint browser: true, strict: false, maxlen: false, maxstatements: false */
    (function () {
      function warn() {
        if (window.console && window.console.warn) {
          // @ts-ignore: Unreachable code error
          window.console.warn.apply(window.console, arguments);
        }
      }
      // @ts-ignore: Unreachable code error
      if (window.bitpay) {
        // @ts-ignore: Unreachable code error
        warn("bitpay.js attempted to initialize more than once.");
        return;
      }

      var iframe = document.createElement("iframe");
      iframe.name = "bitpay";
      // @ts-ignore: Unreachable code error
      iframe.class = "bitpay";
      iframe.setAttribute("allowtransparency", "true");
      iframe.style.display = "none";
      // @ts-ignore: Unreachable code error
      iframe.style.border = 0;
      iframe.style.position = "fixed";
      // @ts-ignore: Unreachable code error
      iframe.style.top = 0;
      // @ts-ignore: Unreachable code error
      iframe.style.left = 0;
      iframe.style.height = "100%";
      iframe.style.width = "100%";
      iframe.style.zIndex = "2147483647";

      var origin = "https://bitpay.com";
      var onModalWillEnterMethod = function () {};
      var onModalWillLeaveMethod = function () {};

      function showFrame() {
        document.body.style.overflow = "hidden";
        if (window.document.getElementsByName("bitpay").length === 0) {
          window.document.body.appendChild(iframe);
        }
        onModalWillEnterMethod();
        iframe.style.display = "block";
      }

      function hideFrame() {
        onModalWillLeaveMethod();
        iframe.style.display = "none";
        iframe = window.document.body.removeChild(iframe);
        document.body.style.overflow = "auto";
      }

      function onModalWillEnter(customOnModalWillEnter) {
        onModalWillEnterMethod = customOnModalWillEnter;
      }

      function onModalWillLeave(customOnModalWillLeave) {
        onModalWillLeaveMethod = customOnModalWillLeave;
      }

      function receiveMessage(event) {
        var uri;

        if (origin !== event.origin) {
          return;
        }
        if (event.data === "close") {
          hideFrame();
        } else if (event.data === "loaded") {
          showFrame();
        } else if (event.data && event.data.open) {
          uri = event.data.open;
          if (
            uri.indexOf("bitcoin:") === 0 ||
            uri.indexOf("bitcoincash:") === 0 ||
            uri.indexOf("ethereum:") === 0 ||
            uri.indexOf("ripple:") === 0 ||
            uri.indexOf("bitpay:") === 0 ||
            uri.indexOf("copay:") === 0
          ) {
            event.preventDefault();
            if (event.data.mobile) {
              window.location.href = uri;
              return;
            }
            var iframe = document.createElement("iframe");
            iframe.src = uri;
            document.head.appendChild(iframe);
            setTimeout(function () {
              // @ts-ignore: Unreachable code error
              iframe.parentNode.removeChild(iframe);
            }, 100);
          }
        } else if (event.data && event.data.mailto) {
          uri = event.data.mailto;
          if (uri.indexOf("mailto:") === 0) {
            window.location = uri;
          }
        }
      }

      function showInvoice(invoiceId, params) {
        document.body.style.overflow = "hidden";
        window.document.body.appendChild(iframe);
        var invoiceUrl =
          origin + "/invoice?id=" + invoiceId + "&v=3&view=modal";
        if (params && params.animateEntrance === false) {
          invoiceUrl += "&animateEntrance=false";
        }
        iframe.src = invoiceUrl;
      }

      function setApiUrlPrefix(urlPrefix) {
        // debugger;
        origin = urlPrefix;
      }

      function enableTestMode(enable) {
        if (enable === false) {
          origin = "https://bitpay.com";
          return;
        }
        origin = "https://test.bitpay.com";
        // @ts-ignore: Unreachable code error
        warn("bitpay.js is running in test mode.");
      }

      function isLoadedFromBitPay() {
        var loadedFromBitPay = false;
        var scriptTags = window.document.getElementsByTagName("script");
        for (var i = 0; i < scriptTags.length; i++) {
          var tag = scriptTags[i];
          if (
            (tag.outerHTML &&
              tag.outerHTML.indexOf &&
              tag.outerHTML.indexOf("https://bitpay.com/bitpay.js") !== -1) ||
            tag.outerHTML.indexOf("https://bitpay.com/bitpay.min.js") !== -1
          ) {
            loadedFromBitPay = true;
          }
        }
        if (
          window.location.origin === "https://bitpay.com" ||
          window.location.origin === "https://test.bitpay.com" ||
          window.location.origin === origin
        ) {
          loadedFromBitPay = true;
        }
        return loadedFromBitPay;
      }

      function setButtonListeners() {
        var buttons = window.document.querySelectorAll("[data-bitpay-button]");
        for (var i = 0; i < buttons.length; i++) {
          var b = buttons[0];
          b.addEventListener("submit", showFrame);
        }
      }

      window.addEventListener("load", function load() {
        if (!isLoadedFromBitPay()) {
          // @ts-ignore: Unreachable code error
          warn("worn");
        }
        window.removeEventListener("load", load);
      });

      window.addEventListener("message", receiveMessage, false);
      setButtonListeners();
      // @ts-ignore: Unreachable code error
      window.bitpay = {
        showFrame: showFrame,
        hideFrame: hideFrame,
        showInvoice: showInvoice,
        onModalWillEnter: onModalWillEnter,
        onModalWillLeave: onModalWillLeave,
        enableTestMode: enableTestMode,
        setApiUrlPrefix: setApiUrlPrefix,
      };
    })();
  }, []);

  const transactionDoneModal = () => {
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
          {/* <div className="sa-icon sa-warning" style="display: none;">
<span className="sa-body"></span>
<span className="sa-dot"></span>
</div> */}
          {/* <div className="sa-icon sa-info" style="display: none;">
</div> */}
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

  const [timeout, setTime] = useState<any>();

  const chackTimout = (id, openDepositModal) => {
    if (!openDepositModal) {
      return clearTimeout(timeout);
    }
    setTime(
      setTimeout(() => {
        checkPayment(id);
      }, 1500)
    );
  };

  const checkPayment = (id) => {
    if (!openDepositModal) {
      return;
    }
    AuthService.transactionCheck(id)
      .then((res) => {
        // console.log(res);
        if (res.data.deposit.status === "COMPLETE") {
          setTransactionDone(true);
          dispatch(
            updateUser({
              user: {
                ...user,
                balance: {
                  ...user.balance,
                  spendable: Number(user.balance.spendable) + Number(amount),
                },
              },
            })
          );
          clearTimeout(timeout);
        } else {
          // debugger;
          // debugger;
          if (!openDepositModal) {
            setTransactionDone(true);

            clearTimeout(timeout);
          }
          {
            // debugger;
            chackTimout(id, openDepositModal);
          }
          // debugger;
        }
      })
      .catch((err) => {
        console.log(err);
        checkPayment(id);
      });
  };

  const ethHandler = () => {
    setLoader(true);
    AuthService.getEthAddress({
      amount,
      method: depositType,
    })
      .then((res) => {
        setLoader(false);

        console.log(res);
        // debugger;
        checkPayment(res?.data?.deposit?.id);
        setOpenETH(res?.data?.deposit);
        // debugger;
        // debugger;
      })
      .catch((err) => {
        setLoader(false);

        console.log(err);
        alert("Server Error Try Again Later");
      });
  };

  const closeModal = () => {
    // debugger;
    clearTimeout(timeout);
    setTransactionDone(false);
    setOpenDepositModals(false);
    setOpenETH(false);
    setAmount(false);
  };

  const ethModal = () => {
    if (transactionDone) {
      return transactionDoneModal();
    }
    return (
      <div
        style={{ color: "#000", fontSize: "14px" }}
        className="modal-content"
      >
        <div className="modal-header pb-2">
          <h4
            style={{ textAlign: "center", width: "100%", marginLeft: "51px" }}
            className="modal-title"
          >
            <img
              style={{ height: "43px" }}
              src="/assets/images/logo.png"
              alt="logo"
            />
          </h4>
          <button
            type="button"
            onClick={() => closeModal()}
            className="close"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>

        <div id="modal-body" className="modal-body pt-0">
          <div
            style={{ backgroundColor: "#81b757" }}
            className="Awaiting_Payment mb-2 py-3 text-center"
          >
            Awaiting Payment...
          </div>
          {/* <div
            style={{ color: "#000" }}
            className="Awaiting_Payment py-3 text-center"
          >
            Awaiting Payment...
          </div> */}
          <h3 style={{ color: "#000" }}>
            Please notice, the deposit will be credited to your balance once
            your {depositType} transaction in confirmed.
          </h3>

          <div
            style={{ color: "#000" }}
            className="Pay_with d-flex justify-content-between betweeen py-1"
          >
            <span> Payment method: </span>{" "}
            {depositType === "ETH" ? (
              <span> Ethereum (ETH) </span>
            ) : (
              <span> Tether (USDT) </span>
            )}
          </div>

          <div id="modal-body" className="modal-body p-0">
            <div className="orderBlock">
              <hr className="my-3" />
              <div className="copy">
                <div className="d-flex justify-content-between mb-2">
                  <span>Amount: </span>
                  <span id="amountAth">
                    {depositType === "ETH" ? openETH?.crypto : amount}{" "}
                    {depositType}{" "}
                  </span>
                </div>
                {/* <button className="btn p-0 btn-icon fa fa-copy copyBtn">
                  <span id="copyP1"> copied </span>
                  <span className="addresses" id="copyAmount">
                    0.0078758016803903
                  </span>
                </button> */}

                <CopyToClipboard
                  text={openETH.crypto}
                  onCopy={() => {
                    setCopyReferer(true);
                    setTimeout(() => {
                      setCopyReferer(false);
                    }, 1500);
                  }}
                >
                  <button
                    style={{ color: "#000" }}
                    className="btn btn-icon fa fa-copy copyBtn"
                    // onclick="copyToClipboard('#p1', '#copyP1' )"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="copy"
                      width="20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-copy fa-w-14 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                        className=""
                      ></path>
                    </svg>
                    <span id="copyP1" className={copyReferer ? "animate" : ""}>
                      {" "}
                      copied{" "}
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
              <hr className="my-3" />
              <h4 style={{ color: "#000" }} className="text-center m-0">
                To complete your payment, please send{" "}
                {depositType === "ETH" ? openETH?.crypto : amount} {depositType}{" "}
                to the address below.
              </h4>
              <div
                style={{ flexDirection: "column", alignItems: "center" }}
                className="betweeen  d-flex justify-content-between mb-2 mt-3"
              >
                <span>Address:</span>
                <div className="align-items-center  d-flex justify-content-between">
                  <CopyToClipboard
                    text={openETH.address}
                    onCopy={() => {
                      setCopyReferer2(true);
                      setTimeout(() => {
                        setCopyReferer2(false);
                      }, 1500);
                    }}
                  >
                    <button
                      style={{ color: "#000" }}
                      className="btn btn-icon fa fa-copy copyBtn"
                      // onclick="copyToClipboard('#p1', '#copyP1' )"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="copy"
                        width="20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-copy fa-w-14 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                          className=""
                        ></path>
                      </svg>
                      <span
                        id="copyP1"
                        className={copyReferer2 ? "animate" : ""}
                      >
                        {" "}
                        copied{" "}
                      </span>
                    </button>
                  </CopyToClipboard>
                  <span
                    style={{ color: "#000" }}
                    className="addresses"
                    id="copyAddress"
                  >
                    {openETH?.address}
                  </span>
                </div>
              </div>

              <hr className="my-3" />

              <div className="text-center">
                <img
                  // src={`https://chart.googleapis.com/chart?chs=105x105&amp;chld=L|2&amp;cht=qr&amp;chl=ethereum:${openETH.address}`}
                  src={`https://chart.googleapis.com/chart?chs=105x105&cht=qr&chl=${
                    depositType === "ETH" ? "ethereum" : "usdt"
                  }:${openETH.address}`}
                />
              </div>

              <div className="modal-footer pt-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ModalContainer
      maxWidth={openETH ? 500 : 600}
      showModal={openDepositModal}
      closeModal={() => {
        closeModal();
        setOpenETH(false);
        setOpenDepositModals();
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
        {openETH ? (
          ethModal()
        ) : (
          <form
            className="p-5"
            action="https://crowd-growing.com/user/btc-pay"
            method="post"
            style={{
              background: "#C8C8C8",
            }}
          >
            <input
              type="hidden"
              name="_token"
              value="cngHFLIH95tNqyifuaTH8P3XEIRPIN8IAkbfiLvR"
            />
            <div
              className="text-center mb-4"
              style={{ fontWeight: "bold", fontSize: "19px" }}
            >
              Balance ${user?.balance?.spendable.toFixed(2)}
            </div>
            <div className="form-group row">
              <div className="text-center w-100 mb-0">
                <div className="mb-3" style={{ color: "#000" }}>
                  Method
                </div>
                <div className="methodGroup">
                  <span
                    onClick={() => {
                      setDepositType("BTC");
                    }}
                    className="pointer"
                  >
                    <span
                      className={classnames("methodRadio mr-2  ", {
                        active: depositType === "BTC",
                      })}
                    ></span>
                    <img width="40" src="./assets/svges/btc.svg" />
                  </span>
                  <span
                    onClick={() => {
                      setDepositType("ETH");
                    }}
                    className="mx-4 pointer"
                  >
                    <span
                      className={classnames("methodRadio mr-1  ", {
                        active: depositType === "ETH",
                      })}
                    ></span>

                    <img width="40" src="./assets/svges/eth.svg" />
                  </span>
                  <span
                    onClick={() => {
                      setDepositType("USDT");
                    }}
                    className="pointer"
                  >
                    <span
                      className={classnames("methodRadio mr-2  ", {
                        active: depositType === "USDT",
                      })}
                    ></span>

                    <img width="40" src="./assets/svges/usdt.svg" />
                  </span>
                </div>
              </div>
              {/* <div className="col-lg-12">
              <label className="col-form-label colorBlack pb-1 d-flex justify-content-between ">
                <span>Method </span>
                <span>* a withdrawal fee of 3% will be deducted</span>
              </label>
              <select
                className="form-control select"
                id="selectedCurrency"
                name="method"
                data-dropdown-css-class="bg-primary"
                onChange={(e: any) => {
                  setDepositType(e.target.value);
                }}

                //   required=""
              >
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="usdt">usdt</option>
              </select>
            </div> */}
            </div>
            <div className="form-group row">
              <div className="col-lg-12">
                <label className="col-form-label colorBlack pb-1 ">
                  Amount
                </label>
                <div className="input-group input-group-merge">
                  <div className="input-group-prepend">
                    <span
                      style={{ color: "#2EA031" }}
                      className="input-group-text"
                    >
                      $
                    </span>
                  </div>
                  <input
                    type="number"
                    id="btcInput"
                    step="any"
                    name="amount"
                    // maxlength="10"
                    className="form-control"
                    onChange={(e: any) => {
                      setAmountError(null);
                      setAmount(e.target.value);
                    }}
                    // required=""
                  />
                </div>
                {amountError && (
                  <span style={{ color: "red" }}>{amountError}</span>
                )}
              </div>
            </div>
            <div
              className="form-group row inputAddressWrapper d-none"
              id="show"
            >
              <label className="col-form-label col-lg-2">ETH Address</label>
              <div className="col-lg-10">
                <div className="input-group input-group-merge">
                  <input
                    type="text"
                    id="inputAddress"
                    step="any"
                    // disabled=""
                    name="address"
                    required
                    // maxlength="10"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div
              className="form-group row inputAddressWrapper d-none"
              id="show"
            >
              <label className="col-form-label col-lg-2"></label>
              <div className="col-lg-10">
                <div className="input-group input-group-merge text-center">
                  <img id="qrImg" className="m-auto" />
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={(e) => {
                  // debugger;
                  e.preventDefault();
                  // debugger;
                  if (!amount) {
                    setAmountError("Please insert amount");

                    return;
                  }

                  if (depositType === "BTC") {
                    // @ts-ignore: Unreachable code error
                    axios
                      .post("https://admin.crowd-growing.com/create-payment", {
                        token: localStorage.getItem("token"),
                        amount: amount,
                      })
                      .then((res) => {
                        // debugger;
                        // @ts-ignore: Unreachable code error

                        window.bitpay.setApiUrlPrefix(
                          "https://www.crowdgrowing.tk"
                        );
                        // @ts-ignore: Unreachable code error
                        window.bitpay.showInvoice(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                  if (depositType === "ETH" || depositType === "USDT") {
                    ethHandler();
                  }
                }}
                type="submit"
                style={{ backgroundColor: "#2EA031" }}
                className="btn btn-primary w-50 btcSubmit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </>
    </ModalContainer>
  );
};

export default Deposit;
