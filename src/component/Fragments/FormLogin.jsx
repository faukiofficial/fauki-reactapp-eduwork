import InputElement from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import React from "react";

class FormLogin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!re.test(String(email).toLowerCase())) {
      alert("Email tidak valid")
    } else if (password.length < 8){
      alert("Password tidak boleh kurang dari 8 karakter")
    } else {
      alert("Semua data benar")
    }
  };
  render(){
    return (
      <div className="col-md-4">
        <div className="card" style={{minWidth: "400px"}}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">{this.props.title}</h3>
            <form onSubmit={this.handleSubmit}>
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
              <Button
                type="submit"
                classname="btn btn-primary"
                text="Login"
              ></Button>
            </form>
  
            <p className="text-center mt-3">
              Belum punya akun? <Link className="fw-bold text-decoration-none" to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
  
};

export default FormLogin;
