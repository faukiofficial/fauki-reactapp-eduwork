import InputElement from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (props) => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">{props.title}</h3>
          <form>
            <InputElement
              identity="inputEmail"
              label="Email"
              type="email"
              placeholder="Enter email"
            ></InputElement>
            <InputElement
              identity="inputPassword"
              label="Password"
              type="password"
              placeholder="********"
            ></InputElement>
            <Button
              type="submit"
              classname="btn btn-primary"
              text="Login"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
