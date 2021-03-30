import React, { useState } from "react";
import Layout from "../components/Layout";
import { AuthService } from "../services/user/user.http";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../components/common/modal/modalContainer";
import {
  setCurrentUser,
  setCurrentStore,
  updateUser,
} from "../store/auth/authActions";

// import { Card, Nav } from "react-bootstrap";
// import { Button } from "../components/common/forms/button";
// import Deposit from "../components/dashboard/deposit";
// import Withdrawal from "../components/dashboard/withdrawal";

const profile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<any>();
  const [showModal, setShowModal] = useState<any>("");

  // @ts-ignore: Unreachable code error

  const store = useSelector(({ auth }) => auth.user);

  const [profileInfo, setProfileInfo] = useState<any>({});
  //  {
  //   // debugger;

  //   return { firstName:?.user?.firstName };
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   errors,
  //   setError,
  //   setValue,
  //   getValues,
  //   reset,
  // } = useForm<any>({
  //   defaultValues: store,
  // });

  React.useEffect(() => {
    if (store?.firstName) {
      // debugger;
      setProfileInfo({
        firstname: store?.firstName,
        phoneNumber: store?.address?.phoneNumber,
        country: store?.address?.country,
        city: store?.address?.city,
        zipCode: store?.address?.zipCode,
        address: store?.address?.address,
      });
    }
  }, [store]);

  const imageUploadHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    AuthService.uploadImg(data)
      .then((res) => {
        setShowModal("image");
        console.log(res);
        // dispatch(
        //   updateUser({
        //     user: res.data.user,
        //   })
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeProfileField = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    // debugger;
  };

  const profileUpdateHandler = (e) => {
    e.preventDefault();
    const data = {};

    AuthService.updateProfile(profileInfo)
      .then((res) => {
        dispatch(
          updateUser({
            user: res.data.user,
          })
        );
        setShowModal("profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout title="financial">
      <ModalContainer
        showModal={!!showModal}
        closeModal={(val: any) => setShowModal(val)}
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
            {showModal === "profile" ? "Profile" : "Photo"} Updated
            Successfully.
          </p>

          <div className="sa-button-container">
            <div className="sa-confirm-button-container">
              <button
                onClick={() => setShowModal(false)}
                className="confirm btn btn-lg btn-primary"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </ModalContainer>
      <div className="main-content">
        <div className="content-wrapper mt-4 row px-3">
          <div className="col-md-8">
            <div className="card account_information" id="edit">
              <div className="card-header header-elements-inline">
                <h3
                  onClick={() => {
                    // console.log(getValues(), store);
                    // debugger;
                  }}
                  className="mb-0"
                >
                  Update account information
                </h3>
              </div>
              <div className="card-body">
                <form method="post" onSubmit={profileUpdateHandler}>
                  <input
                    type="hidden"
                    name="_token"
                    value="lBgqLaH6PQVFfQRMhD8fSgVu8766raCJnHt8jRJF"
                  />{" "}
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Name</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={profileInfo.firstname}
                        onChange={changeProfileField}
                        // ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Mobile</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        value={profileInfo.phoneNumber}
                        onChange={changeProfileField}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Country</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        value={profileInfo.country}
                        onChange={changeProfileField}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">City</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={profileInfo.city}
                        onChange={changeProfileField}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Zip code</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="zipCode"
                        className="form-control"
                        value={profileInfo.zipCode}
                        onChange={changeProfileField}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Address</label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={profileInfo.address}
                        onChange={changeProfileField}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn reallyGreenColor btn-neutral"
                    >
                      Update<i className="icon-paperplane ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card profileImageWrapper">
              <div className="card-header header-elements-inline">
                <h3 className="mb-0">Change account photo</h3>
              </div>
              <div className="card-body">
                <form
                  onSubmit={(e) => imageUploadHandler(e)}
                  //   enctype="multipart/form-data"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="lBgqLaH6PQVFfQRMhD8fSgVu8766raCJnHt8jRJF"
                  />{" "}
                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFileLang"
                        name="image"
                        accept="image/*"
                        onChange={(e: any) => {
                          setImage(e.target.files[0]);
                          debugger;
                        }}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFileLang"
                      >
                        {image ? image.name : "Select photo"}
                      </label>
                    </div>
                    <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
                    <span className="form-text text-muted">
                      Accepted formats: png, jpg, jpeg.
                    </span>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn reallyGreenColor btn-neutral"
                    >
                      Upload<i className="icon-paperplane ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
