import React, { useEffect, useState } from "react";

interface Props {
  closeModal: any;
  showModal: Boolean;
  children: JSX.Element;
  maxWidth?: number;
}

const ModalContainer: React.FC<Props> = ({
  closeModal,
  children,
  maxWidth,
  showModal,
}) => {
  return (
    <>
      {showModal && (
        <div
          className="modal fade show modalWrapper"
          role="dialog"
          style={{ display: "block", paddingRight: "21px" }}
          onClick={() => {
            closeModal();
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: `${maxWidth ? maxWidth : 500}px`,
            }}
            className="modal-dialog modal- modal-dialog-centered "
            role="document"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-content">
              <div className="loaderWrapper d-none">
                <img
                  className="loader"
                  src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"
                />
              </div>
              <div className="modal-body p-0">
                <div className="card bg-white border-0 mb-0">
                  <div className="card-body p-0">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
