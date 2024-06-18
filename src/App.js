import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FormLogin from "./component/Fragments/FormLogin.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center w-100">
          <FormLogin title="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
