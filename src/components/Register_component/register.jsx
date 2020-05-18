import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RegisterUser } from "../../Api/user";
class Register extends Component {
  state = {
    newUserAccount: {
      userName: "",
      password: "",
      confirmPassword: "",
    },
  };
  handelChange = (e) => {
    let newUserAccount = { ...this.state.newUserAccount };
    newUserAccount[e.target.name] = e.target.value;
    this.setState({ newUserAccount });
  };
  handelRegister = async (e) => {
    e.preventDefault();
    console.log(this.state.newUserAccount);
    const res = await RegisterUser(this.state.newUserAccount).catch((err) =>
      console.log(err)
    );
    if (res) {
      this.props.history.push("/login");
      console.log(res);
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
          <div class="form-group">
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              name="userName"
              onChange={(e) => this.handelChange(e)}
            />
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={(e) => this.handelChange(e)}
            />
          </div>
          <div class="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => this.handelChange(e)}
            />
          </div>
          <Link to="/login" onClick={this.handelRegister} class="submit">
            Submit
          </Link>
          <Link to="/login" className="float-right submit">
            You are alredy a member?
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
