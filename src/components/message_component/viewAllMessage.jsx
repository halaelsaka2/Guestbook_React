import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  GetMessagesByUerId,
  deleteMessage,
  getMessageById,
  editMessage,
} from "../../Api/message";
import ModalComponent from "../../components/Modal_component/modal";
class ViewMessages extends Component {
  state = {
    guestbook: {
      messages: [],
      userId: "",
    },
    isOppen: false,
    message: "",
  };
  componentDidMount = async () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    let messages = [...this.state.guestbook.messages];
    messages = await GetMessagesByUerId(userId);
    const guestbook = { ...this.state.guestbook, messages };
    this.setState({ guestbook });
  };
  handelDelete = async (id) => {
    let messages = [...this.state.guestbook.messages];
    let message = await deleteMessage(id);
    messages = messages.filter((m) => m.id !== message.id);
    const guestbook = { ...this.state.guestbook, messages };
    this.setState({ guestbook });
  };
  toggleModal = () => {
    this.setState({
      isOppen: !this.state.isOppen,
    });
  };
  toggle = async (id) => {
    //get Message
    const { message } = await getMessageById(id);
    this.setState({
      isOppen: !this.state.isOppen,
      message,
    });
  };
  handelChange = (e) => {
    let message = { ...this.state.message };
    message[e.target.name] = e.target.value;
    this.setState({ message });
  };

  handelSave = async () => {
    const message = this.state.message;
    const savedMessage = await editMessage(message.id, message);
    if (savedMessage) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const messages = await GetMessagesByUerId(userId);
      const guestbook = { ...this.state.guestbook, messages };
      this.setState({
        isOppen: !this.state.isOppen,
        guestbook,
      });
    }
  };
  render() {
    const { messages } = this.state.guestbook;
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <React.Fragment>
        <Link className="button" to={`/home`}>
          Back To Home
        </Link>
        <div className="left-container container4">
          <div className="container2 ">
            <div className="box">
              <div className="text">
                <div className="before">
                  <div className="line"></div>
                </div>
                <h5 className="content">Hi {user.userName}</h5>
                <div className="after">
                  <div className="line"></div>
                </div>
              </div>
              <div className="box-content">
                <h5 className="content">
                  Messages which you write to your Frindes
                </h5>
                {messages.map((msg) => (
                  <div className="message-box">
                    <div className="message-content">
                      <div className="message-body">
                        <p>{msg.value}</p>
                      </div>
                      <Link
                        className="btn-sm btn-danger "
                        onClick={() => {
                          this.handelDelete(msg.id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </Link>
                      <button
                        className="btn-sm btn-primary "
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                          this.toggle(msg.id);
                        }}
                      >
                        <i className="far fa-edit"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ModalComponent
          isOppen={this.state.isOppen}
          inputValue={this.state.message.value}
          onHandelChange={this.handelChange}
          onToggleModal={() => {
            this.toggleModal();
          }}
          name="value"
          onSave={this.handelSave}
          header="Edit Message"
        />
      </React.Fragment>
    );
  }
}

export default ViewMessages;
