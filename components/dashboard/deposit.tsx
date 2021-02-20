import React, { useState } from "react";
import ModalContainer from "../common/modal/modalContainer";

interface Props {
  openDepositModal: Boolean;
  setOpenDepositModals: any;
}

const Deposit: React.FC<Props> = ({
  openDepositModal,
  setOpenDepositModals,
}) => {
  return (
    <ModalContainer
      maxWidth={800}
      showModal={openDepositModal}
      closeModal={() => setOpenDepositModals()}
    >
      <form
        className="p-5"
        action="https://crowd-growing.com/user/btc-pay"
        method="post"
      >
        <input
          type="hidden"
          name="_token"
          value="cngHFLIH95tNqyifuaTH8P3XEIRPIN8IAkbfiLvR"
        />{" "}
        <div className="form-group row">
          <label className="col-form-label colorBlack col-lg-2">Method</label>
          <div className="col-lg-10">
            <select
              className="form-control select"
              id="selectedCurrency"
              name="method"
              data-dropdown-css-class="bg-primary"
              data-fouc=""
              //   required=""
            >
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label colorBlack col-lg-2">Amount</label>
          <div className="col-lg-10">
            <div className="input-group input-group-merge">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                id="btcInput"
                step="any"
                name="amount"
                // maxlength="10"
                className="form-control"
                // required=""
              />
            </div>
          </div>
        </div>
        <div className="form-group row inputAddressWrapper d-none" id="show">
          <label className="col-form-label col-lg-2">ETH Address</label>
          <div className="col-lg-10">
            <div className="input-group input-group-merge">
              <input
                type="text"
                id="inputAddress"
                step="any"
                // disabled=""
                name="address"
                // maxlength="10"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-group row inputAddressWrapper d-none" id="show">
          <label className="col-form-label col-lg-2"></label>
          <div className="col-lg-10">
            <div className="input-group input-group-merge text-center">
              <img id="qrImg" className="m-auto" />
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary btcSubmit">
            Submit
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default Deposit;
