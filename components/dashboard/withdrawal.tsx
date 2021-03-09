import React, { useState, useEffect } from "react";
import ModalContainer from "../common/modal/modalContainer";
import classnames from "classnames";
import { AuthService } from "../../services/user/user.http";

interface Props {
  openWithdrawalModal: Boolean;
  setOpenWithdrawalModals: any;
}

const Withdrawal: React.FC<Props> = ({
  openWithdrawalModal,
  setOpenWithdrawalModals,
}) => {
  const [depositType, setDepositType] = useState("BTC");
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    AuthService.getWithdraws().then((res) => {
      setAddressList(res.data.address);
    });
  }, []);

  return (
    <ModalContainer
      maxWidth={600}
      showModal={openWithdrawalModal}
      closeModal={() => setOpenWithdrawalModals(false)}
    >
      <div
        className="p-5"
        // action="https://crowd-growing.com/user/withdraw"
        // method="post"
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
              <h2 className="text-center colorBlack">Balance $0.00</h2>
            </div>
          </div>
        </div>
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
        <div className="form-group row">
          <div className="col-lg-12">
            <label className="col-form-label colorBlack pb-1 d-flex justify-content-between ">
              <span>Amount </span>
              <span>* a withdrawal fee of 3% will be deducted</span>
            </label>

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
          </div>
        </div>
        {/* <div className="form-group row">
          <div className="col-lg-12">
            <label className="col-form-label  colorBlack">Method</label>

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
        </div> */}
        <div className="form-group row">
          <div className="col-lg-12">
            <label className="col-form-label  colorBlack">Address</label>

            <select
              name="details"
              className="form-control select"
              data-dropdown-css-className="bg-primary"
              data-fouc=""
              //   required=""
              onChange={(e: any) => {
                const selected: any = addressList.find(
                  (el: any) => el.address === e.target.value
                );
                if (selected) {
                  debugger;
                  if (selected?.method === "BITCOIN") {
                    return setDepositType("BTC");
                  }
                  setDepositType(selected?.method);
                }
              }}
            >
              {addressList.map((el: any, i) => {
                return (
                  <option key={i} value={el.address}>
                    {el.address}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={(e) => {
              debugger;
              e.preventDefault();
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
    </ModalContainer>
  );
};

export default Withdrawal;
