import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-3 text-center">
        <Link className="fs-5 text-decoration-none text-black" to="/login">Login Page</Link>
      </div>
      <div className="col-md-3 text-center">
        <Link className="fs-5 text-decoration-none text-black" to="/register">Register Page</Link>
      </div>
    </div>
  );
};

export default Home;
