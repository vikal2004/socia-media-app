import "./register.css"

const Register = () => {
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
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">sign up</button>
                    <button className="loginRegisterButton">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register