import React, { useState } from "react";
import ModalContainer from "../common/modal/modalContainer";

interface Props {
  openWithdrawalModal: Boolean;
  setOpenWithdrawalModals: any;
}

const Withdrawal: React.FC<Props> = ({
  openWithdrawalModal,
  setOpenWithdrawalModals,
}) => {
  return (
    <ModalContainer
      maxWidth={800}
      showModal={openWithdrawalModal}
      closeModal={() => setOpenWithdrawalModals(false)}
    >
      <form
        className="p-5"
        action="https://crowd-growing.com/user/withdraw"
        method="post"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default Withdrawal;
