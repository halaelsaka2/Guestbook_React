import React, { Component } from "react";
import { getGuestByUserId, AddnewGuestbook } from "../../Api/guestBook";
import ModalComponent from "../Modal_component";
import { addReply, getMessageById } from "../../Api/message";
class GuestCard extends Component {
  state = {
    guestbook: {
      messages: [],
      userId: "",
      userName: "",
    },
    isOppen: false,
    message: "",
    guestbooks: [],
  };

  componentDidMount = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    let guestbook = { ...this.state.guestbook };
    guestbook = await getGuestByUserId(userId);
    if (guestbook === null) {
      guestbook = await AddnewGuestbook();
    }
    this.setState({ guestbook });
  };

  handelReply = () => {
    const isReplyHidden = true;
    this.setState({ isReplyHidden });
  };

  toggleModal = () => {
    this.setState({
      isOppen: !this.state.isOppen,
    });
  };
  toggle = async (id) => {
    //get Message
    const { message } = await getMessageById(id);
    console.log(message);
    this.setState({
      isOppen: !this.state.isOppen,
      message,
    });
  };
  handelChange = (e) => {
    let message = { ...this.state.message };
    message[e.target.name] = e.target.value;
    this.setState({ message });
    console.log(this.state.message);
  };

  handelSave = async () => {
    let message = this.state.message;
    message = await addReply(message.id, message.reply);
    console.log(message);

    if (message) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      let guestbook = await getGuestByUserId(userId);
      this.setState({
        isOppen: !this.state.isOppen,
        guestbook,
      });
    }
  };

  render() {
    const guestbook = this.state.guestbook;
    console.log(guestbook);
    return (
      <React.Fragment>
        <div className="left-container">
          <div className="container2">
            <h3>
              <span className="title">Guestbook</span>
            </h3>
            <div className="box">
              <div className="text">
                <div className="before">
                  <div className="line"></div>
                </div>
                <h5 className="content">Hi {guestbook.userId.userName}</h5>
                <div className="after">
                  <div className="line"></div>
                </div>
              </div>
              <div className="box-content">
                <h5 className="content">Your Messages From Your frinds</h5>
                {guestbook.messages.length > 0 ? (
                  guestbook.messages.map((msg) => (
                    <div className="message-box" key={msg.id}>
                      <div className="message-content">
                        <div className="message-header"></div>
                        <div className="message-body">
                          <p>{msg.value} </p>
                        </div>
                        <p className=" reply-content active">{msg.reply}</p>
                        <div className="reply">
                          <p className="form-submit">
                            <button
                              className="submit "
                              data-toggle="modal"
                              data-target="#exampleModal"
                              onClick={() => {
                                this.toggle(msg.id);
                              }}
                            >
                              Reply
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Yoi didn't have messages yet</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ModalComponent
          isOppen={this.state.isOppen}
          inputValue={this.state.reply}
          onHandelChange={this.handelChange}
          onToggleModal={() => {
            this.toggleModal();
          }}
          name="reply"
          onSave={this.handelSave}
          header="Add Reply"
        />
      </React.Fragment>
    );
  }
}

export default GuestCard;
