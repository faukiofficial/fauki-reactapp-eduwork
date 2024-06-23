import InputElement from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import React from "react";

class FormRegister extends React.Component {
  state = {
    nama: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {nama, username, email, password, confirmPassword} = this.state;
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if(nama.length < 5){
      alert("Nama tidak boleh kurang dari 5 karakter")
    } else if(username.length < 5){
      alert("Username tidak boleh kurang dari 5 karakter")
    } else if(!re.test(String(email).toLowerCase())) {
      alert("Email tidak valid")
    } else if (password.length < 8){
      alert("Password tidak boleh kurang dari 8 karakter")
    } else if(confirmPassword !== password){
      alert("Password tidak sama")
    } else {
      alert("Semua data benar")
    }
  };
  render() {
    return (
      <div className="col-md-4">
        <div className="card" style={{minWidth: "400px"}}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">{this.props.title}</h3>
            <form onSubmit={this.handleSubmit}>
              <InputElement
                identity="name"
                label="Nama Lengkap"
                type="text"
                placeholder="Nama minimal 5 karakter"
                onChange={(value) =>
                  this.setState({ nama: value }
                  )
                }
              ></InputElement>
              <InputElement
                identity="username"
                label="Username"
                type="text"
                placeholder="Username minimal 5 karakter"
                onChange={(value) =>
                  this.setState({ username: value }
                  )
                }
              ></InputElement>
              <InputElement
                identity="inputEmail"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                onChange={(value) =>
                  this.setState({ email: value }
                  )
                }
              ></InputElement>
              <InputElement
                identity="password"
                label="Password"
                type="password"
                placeholder="********"
                onChange={(value) =>
                  this.setState({ password: value }
                  )
                }
              ></InputElement>
              <InputElement
                identity="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="********"
                onChange={(value) =>
                  this.setState({ confirmPassword: value }
                  )
                }
              ></InputElement>
              <Button
                type="submit"
                classname="btn btn-primary"
                text="Register"
              ></Button>
            </form>
            <p className="text-center mt-3">
              Sudah punya akun? <Link className="fw-bold text-decoration-none" to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
  
};

export default FormRegister;
