import React, { useState } from "react";
import Layout from "../components/layouts/Auth";
import { connect } from "react-redux";

import { useRouter } from "next/router";
import { AuthService } from "../services/auth/auth.http";
import { setCurrentUser } from "../store/auth/authActions";
import { Button } from "../components/common/forms/button";
import Link from "next/link";

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

const RegisterPage = ({}: Props) => {
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

  const Register = (e: React.MouseEvent) => {
    e.preventDefault();
    AuthService.register(form as any)
      .then((res: any) => {
        setCurrentUser({
          user: res.data.user,
          token: res.data.token,
          // store: res.data.store,
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
      <h1 className="ff-bold fs-20">{LANGS.Store_registration}</h1>

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
          <Button onClick={Register} variation="secondary" className="w-100">
            {LANGS.register}
          </Button>
        </div>
        <div className="py-3 text-center">
          {LANGS.Do_you_have_a_store}{" "}
          <Link href="/login">
            <a className="cl-blue">{LANGS.Please_log_in}</a>
          </Link>
        </div>
      </form>
    </>
  );

  const SuccessTemplate = (
    <>
      <svg
        width="52"
        height="53"
        viewBox="0 0 52 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.4453 5.88281C33.3125 4.15625 29.6562 0.5 26 0.5C22.2422 0.5 18.6875 4.05469 16.4531 5.88281C13 8.625 5.38281 14.8203 1.72656 17.7656C0.710938 18.5781 0 20.2031 0 21.5234V47.625C0 50.3672 2.13281 52.5 4.875 52.5H47.125C49.7656 52.5 52 50.3672 52 47.625V21.5234C52 20.2031 51.1875 18.5781 50.1719 17.7656C46.5156 14.8203 38.8984 8.625 35.4453 5.88281ZM47.125 49.25H4.875C3.96094 49.25 3.25 48.5391 3.25 47.625V21.5234C3.25 21.0156 3.45312 20.5078 3.75781 20.2031C6.5 18.0703 16.1484 10.25 18.4844 8.42188C20.3125 7 23.5625 3.75 26 3.75C28.3359 3.75 31.5859 7 33.4141 8.42188C35.75 10.25 45.3984 18.0703 48.1406 20.2031C48.4453 20.5078 48.75 21.0156 48.75 21.5234V47.625C48.75 48.5391 47.9375 49.25 47.125 49.25ZM46.2109 27.3125L45.7031 26.7031C45.2969 26.1953 44.4844 26.0938 43.9766 26.5C41.6406 28.4297 38.3906 30.9688 33.4141 34.9297C31.6875 36.3516 28.3359 39.6016 26 39.5C23.5625 39.6016 20.2109 36.3516 18.4844 34.9297C13.5078 30.9688 10.2578 28.4297 7.92188 26.5C7.41406 26.0938 6.60156 26.1953 6.19531 26.7031L5.6875 27.3125C5.28125 27.8203 5.38281 28.6328 5.89062 29.0391C8.22656 30.9688 11.4766 33.5078 16.4531 37.4688C18.5859 39.1953 22.2422 42.8516 25.8984 42.75C29.6562 42.8516 33.3125 39.1953 35.4453 37.4688C40.4219 33.5078 43.6719 30.9688 46.0078 29.0391C46.5156 28.6328 46.6172 27.8203 46.2109 27.3125Z"
          fill="#D1D3D2"
        />
      </svg>

      <h1 className="ff-bold fs-20 mt-4">{LANGS.Email_confirmation}</h1>
      <p>
        Hesabınızı doğrulayıb davam etmək üçün əlavə etdiyiniz {form.email}{" "}
        ünvanını nəzərdən keçirdin.
      </p>
      <p className="text-danger">
        <a href={`/register-step-two`}>
          Click here to go step two before email service is implemented for
          confirmation
        </a>
      </p>
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
            <div className="my-auto px-md-5 ">
              {showSuccess ? SuccessTemplate : FormTemplate}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(null, {})(RegisterPage);

const LANGS = {
  Store_registration: "Mağaza qeydiyyatı",
  email: "Elektron poçta",
  password: "Şifrə",
  register: "Davam et",
  Do_you_have_a_store: "Mağazanız var?",
  Please_log_in: "Giriş edin",

  Email_confirmation: "Elektron poçt təsdiqi",
};
