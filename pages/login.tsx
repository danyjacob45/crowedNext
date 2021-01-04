import React, { useState } from "react";
import Layout from "../components/layouts/Auth";
import { connect } from "react-redux";

import { useRouter } from "next/router";
import { AuthService } from "../services/auth/auth.http";
import { setCurrentUser } from "../store/auth/authActions";
import { Button } from "../components/common/forms/button";
import Link from "next/link";
import { routes } from "../routes/routes";

type Props = {
  setCurrentUser: typeof setCurrentUser;
};

type Errors = {
  email?: string;
};

type Form = {
  email?: string;
  password?: string;
};

const LoginPage = ({}: Props) => {
  const [form, setForm] = useState<Form>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const inputHandler = (e: React.FormEvent) => {
    const target = e.target as HTMLTextAreaElement;

    const name = target.name;
    const value = target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    AuthService.login(form as any)
      .then((res: any) => {
        setCurrentUser({
          user: res.data.user,
          token: res.data.token,
          store: res.data.store,
        });
        setShowSuccess(true);
      })
      .catch((err: any) => {
        if (err.response?.data?.message) {
          setErrors({
            email: err.response.data.message,
          });
        }
      });
  };

  const FormTemplate = (
    <>
      <h1 className="ff-bold fs-20">{LANGS.Store_login}</h1>

      <form action="" className="auth-form">
        <div className="form-group">
          <label htmlFor="">{LANGS.email}</label>
          <input
            type="text"
            onChange={inputHandler}
            onFocus={() => setErrors({})}
            name="email"
            placeholder="Email"
            value={form?.email}
            className="form-control"
          />
          <span className="text-danger">{errors?.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">{LANGS.password}</label>
          <input
            type="password"
            onChange={inputHandler}
            onFocus={() => setErrors({})}
            name="password"
            placeholder="Password"
            value={form?.password}
            className="form-control"
          />
          <span className="text-danger"></span>
        </div>
        <div className="form-group">
          <Button
            onClick={handleSubmit}
            variation="secondary"
            className="w-100"
          >
            {LANGS.enter}
          </Button>
        </div>
        <div className="py-3 text-center">
          {LANGS.Do_you_have_a_store}{" "}
          <Link href={routes.register().href}>
            <a className="cl-blue">{LANGS.Sign_up}</a>
          </Link>
        </div>
      </form>
    </>
  );

  return (
    <Layout title="Register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-3 p-md-5">
            <img src="/assets/images/logo-cl.svg" alt="logo" />
          </div>

          <div className="col-md-6 bg-white min-h-md-full d-flex flex-column">
            <div className="my-auto px-md-5 ">{FormTemplate}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(null, {})(LoginPage);

const LANGS = {
  Do_you_have_a_store: "Mağazanız yoxdur?",
  Sign_up: "Qeydiyyatdan keçin",
  Store_login: "Mağaza giriş",
  email: "Elektron poçta",
  password: "Şifrə",
  enter: "Daxil ol",
  register: "Davam et",
  Email_confirmation: "Elektron poçt təsdiqi",
};
