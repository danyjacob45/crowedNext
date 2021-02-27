import React, { useState, useEffect } from "react";
import ModalContainer from "../common/modal/modalContainer";

interface Props {
  openWithdrawalModal: Boolean;
  setOpenWithdrawalModals: any;
}

const Withdrawal: React.FC<Props> = ({
  openWithdrawalModal,
  setOpenWithdrawalModals,
}) => {
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
        debugger;
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
  return (
    <ModalContainer
      maxWidth={800}
      showModal={openWithdrawalModal}
      closeModal={() => setOpenWithdrawalModals(false)}
    >
      <div
        className="p-5"
        // action="https://crowd-growing.com/user/withdraw"
        // method="post"
      >
        <input
          type="hidden"
          name="_token"
          value="cngHFLIH95tNqyifuaTH8P3XEIRPIN8IAkbfiLvR"
        />{" "}
        <div className="row">
          <div className="col-lg-12">
            <div className="card-header header-elements-inline">
              <h2 className="text-center colorBlack">Balance $0.00</h2>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-lg-2 colorBlack">Amount</label>
          <div className="col-lg-10">
            <div className="input-group input-group-merge">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                step="any"
                name="amount"
                min="50"
                maxLength={10}
                // maxlength="10"
                className="form-control"
                // required=""
              />
            </div>
            <span className="text-gray font-size-sm">
              * a withdrawal fee of 3% will be deducted
            </span>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-lg-2 colorBlack">Method</label>
          <div className="col-lg-10">
            <select
              className="form-control select"
              name="coin"
              data-dropdown-css-className="bg-primary"
              data-fouc=""
              //   required=""
            >
              <option value="1">Bitcoin</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-lg-2 colorBlack">Address</label>
          <div className="col-lg-10">
            <select
              name="details"
              className="form-control select"
              data-dropdown-css-className="bg-primary"
              data-fouc=""
              //   required=""
            ></select>
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={(e) => {
              debugger;
              e.preventDefault();
              // @ts-ignore: Unreachable code error
              window.bitpay.setApiUrlPrefix("https://www.crowdgrowing.tk");
              // @ts-ignore: Unreachable code error
              window.bitpay.showInvoice("T7u4ByKibY3cYBZQ1owQaN");
            }}
            type="submit"
            className="btn btn-primary"
          >
            Submit 555
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Withdrawal;
