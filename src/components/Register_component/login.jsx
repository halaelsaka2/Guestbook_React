import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginUser } from "../../Api/user";

class Login extends Component {
  state = {
    userAccount: {
      userName: "",
      password: "",
    },
  };

  handelChange = (e) => {
    let userAccount = { ...this.state.userAccount };
    userAccount[e.target.name] = e.target.value;
    this.setState({ userAccount });
    console.log(this.state.userAccount);
  };
  handelLogin = async (e) => {
    e.preventDefault();
    console.log(this.state.userAccount);
    const res = await LoginUser(this.state.userAccount).catch((err) =>
      console.log(err)
    );
    if (res) {
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form className="w-50 p-3 bg-white">
          <div className="form-group">
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={this.state.userAccount.userName}
              onChange={(e) => this.handelChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.userAccount.password}
              onChange={(e) => this.handelChange(e)}
            />
          </div>
          <div className="buttons-container">
            <Link onClick={this.handelLogin} to="/home" className="submit">
              Login
            </Link>
            <Link to="/register" className="float-right submit">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
