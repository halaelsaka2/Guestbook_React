import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getGuestByUserId, updateGuestbook } from "../../Api/guestBook";
import { addMessage } from "../../Api/message";
class AddMessage extends Component {
  state = {
    message: {
      value: "",
      userId: "",
    },
  };
  addHandler = async (e) => {
    e.preventDefault();
    const value = this.state.message.value;
    let id = this.props.match.params.id;
    const guestBook = await getGuestByUserId(id);
    const gusetUserId = guestBook.id;
    const data = await addMessage(value);
    await updateGuestbook(gusetUserId, data.id);
    this.props.history.push(`/messages`);
  };

  handelChange = async (e) => {
    let message = { ...this.state.message };
    message[e.target.name] = e.target.value;
    this.setState({ message });
  };

  render() {
    return (
      <React.Fragment>
        <Link className="button" to={`/home`}>
          Back To Home
        </Link>
        <div className="container1">
          <h3>
            <span className="title">Guestbook</span>
          </h3>
          <div className="box">
            <div className="text">
              <div className="before">
                <div className="line"></div>
              </div>
              <h5 className="content">Say Hi</h5>
              <div className="after">
                <div className="line"></div>
              </div>
            </div>
            <div className="box-content">
              <form className="form">
                <div className="form-message form-input">
                  <textarea
                    className=""
                    required="required"
                    placeholder="Write us something nice ..."
                    name="value"
                    onChange={(e) => this.handelChange(e)}
                  ></textarea>
                </div>

                <div className="form-submit">
                  <Link className="submit" onClick={this.addHandler}>
                    Add message
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddMessage;
