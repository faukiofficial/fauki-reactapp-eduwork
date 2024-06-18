// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Label from "./component/Elements/Input/Label.jsx";
// import Input from "./component/Elements/Input/Input.jsx";
import FormLogin from "./component/Fragments/FormLogin.jsx";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <FormLogin title="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
