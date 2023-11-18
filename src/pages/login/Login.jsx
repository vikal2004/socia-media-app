import "./login.css"

const Login = () => {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginLogo">Duniya Dekho</h3>
                <span className='loginDesc'>
                    Connect with friends and the world aroung you on duniya dekho
                </span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login