import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";
import { isEmail } from "./utils";
// import { useHistory } from 'react-router';
import { AuthService } from "../services/auth/auth.http";

const ResetPassword = ({
  regAuthModal,
  setRegisterSuccessModal,
  setRegAuthModal,
  defaultValue,
}) => {
  const [serverError, setServerError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    getValues,
  } = useForm();

  const onSubmitRegister = (data) => {
    setLoading(true);

    AuthService.recover(data)
      .then((res) => {
        //   window.location.href = "http://local.mlm/user/dashboard"
        console.log(data, res);

        setRegisterSuccessModal("resetPass");

        setRegAuthModal(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        if (err.response && err.response.data) {
          setServerError({ email: err.response.data.message });
        } else {
          setServerError({ email: "Server Error Try Again Later" });
        }
      });
    // setLoadaing(true);
    // login({ email: data.userName, password: data.password })
    //   .then((res) => {
    //     setLoadaing(false);
    //     dispatch(setCurrentUser(res.data.success));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setServerError("wrong user or password");
    //     setLoadaing(false);
    //   });
  };

  console.log(errors, "v");

  const onInputChange = () => {
    setServerError({});
  };

  // let history = useHistory();
  return (
    <form
      onSubmit={handleSubmit(onSubmitRegister)}
      id="register-form"
      action="https://phpoll.com/register/process"
      method="post"
      role="form"
    >
      {loading && (
        <img
          className="loader"
          src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"
        />
      )}
      <label style={{ color: "#fff" }}>Enter email address</label>
      <div class="form-group">
        <input
          type="email"
          name="email"
          className={classnames("form-control", {
            "is-invalid": errors.email || serverError.email,
          })}
          placeholder="Email Address"
          ref={register({
            validate: {
              email: isEmail,
            },
            required: true,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.email || "wrong email format"}
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-sm-12 col-sm-offset-3">
            <input
              disabled={loading}
              type="submit"
              name="register-submit"
              id="register-submit"
              tabindex="4"
              class="form-control w-100 mt-4 btn btn-register"
              value="reset password"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
