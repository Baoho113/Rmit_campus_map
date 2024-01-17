import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <div id="login-container">
                <img id="logo" src="image/Login2.png" alt="Logo" />
                <label htmlFor="username">RMITID:</label>
                <input type="text" id="username" placeholder="RMITID or email address" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" />
                <label>By signing in, you accept the rules of use of RMIT Systems</label>
                <div id="or-sign-in">
                    <p>Or Sign in With</p>
                </div>
                <div id="social-icons">
                    <img src="image/facebook.ico" alt="Facebook" />
                    <img src="image/google.ico" alt="Twitter" />
                    <img src="image/linkedin.ico" alt="Google" />
                </div>
                <button className="btn1">Login</button>
            </div>
      </div>
    )

}

export default Login;
