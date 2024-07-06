import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Elements/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string()
    .min(8, "Password tidak boleh kurang dari 8 karakter")
    .required("Password wajib diisi"),
});

class FormLogin extends React.Component {
  handleLogin = (values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);

    alert("Sukses, lihat data di localStorage");
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card" style={{ minWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">{this.props.title}</h3>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                this.handleLogin(values);
              }}
            >
              {({ isSubmitting, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="mb-1">Email</label>
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
                  <Button
                    type="submit"
                    classname="btn btn-primary"
                    text="Login"
                    disabled={isSubmitting}
                  ></Button>
                </Form>
              )}
            </Formik>

            <p className="text-center mt-3">
              Belum punya akun?{" "}
              <Link className="fw-bold text-decoration-none" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLogin;
