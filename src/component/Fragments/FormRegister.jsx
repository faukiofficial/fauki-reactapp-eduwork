import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Elements/Button";

const validationSchema = Yup.object().shape({
  nama: Yup.string()
    .min(5, "Nama tidak boleh kurang dari 5 karakter")
    .required("Nama wajib diisi"),
  username: Yup.string()
    .min(5, "Username tidak boleh kurang dari 5 karakter")
    .required("Username wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string()
    .min(8, "Password tidak boleh kurang dari 8 karakter")
    .required("Password wajib diisi"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Konfirmasi password harus sama dengan password"
    )
    .required("Konfirmasi password wajib diisi"),
});

class FormRegister extends React.Component {
  handleLogin = (values) => {
    localStorage.setItem("nama", values.nama);
    localStorage.setItem("username", values.username);
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    localStorage.setItem("confirmPassword", values.confirmPassword);

    alert("Sukses, lihat data di localStorage");
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card" style={{ minWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">{this.props.title}</h3>
            <Formik
              initialValues={{
                nama: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                this.handleLogin(values);
              }}
            >
              {({ isSubmitting, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="nama" className="mb-1">
                      Nama
                    </label>
                    <Field
                      name="nama"
                      type="text"
                      id="nama"
                      placeholder="Nama minimal 5 karakter"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="nama"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nama" className="mb-1">
                      Username
                    </label>
                    <Field
                      name="username"
                      type="text"
                      id="username"
                      placeholder="Username minimal 5 karakter"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="mb-1">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      id="inputEmail"
                      placeholder="example@gmail.com"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      placeholder="********"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      id="confirmPassword"
                      placeholder="********"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <Button
                    type="submit"
                    classname="btn btn-primary"
                    text="Register"
                    disabled={isSubmitting}
                  ></Button>
                </Form>
              )}
            </Formik>
            <p className="text-center mt-3">
              Sudah punya akun?{" "}
              <Link className="fw-bold text-decoration-none" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormRegister;
