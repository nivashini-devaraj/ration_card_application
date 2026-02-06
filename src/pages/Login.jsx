import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="form-wrapper">
        <form className="form-style">
        <h2 className="text-center">Citizen Login</h2>

        <label className="fw-bold">Mobile Number/User ID</label>
            <input
            type="text"
            placeholder="Enter your mobile number"
            onClick={(e) => e.target.value="93524875692"}
            className="form-control"
            />

        <label className="fw-bold">Password/OTP</label>

        <input
            type="password"
            placeholder="Create a password"
            onClick={(e) => e.target.value="25252525"}
            className="form-control"
        />
        <p className="login-help-label" style={{ textAlign: "right", marginTop: "10px" }}>
            Forgot password?
        </p>
        <Link to={"/dashboard"}
            type="submit"
            className="btn register-btn">
            Login
        </Link>

        <p className="login-help-label" style={{ textAlign: "center", marginTop: "10px" }}>
            New User? <a href="/register">Register</a>
        </p>
        </form>
    </div>
  );
};

export default LoginForm;
