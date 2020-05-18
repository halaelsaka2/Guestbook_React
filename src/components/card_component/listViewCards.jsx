import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllOtherGuest } from "../../Api/guestBook";

class ViewCard extends Component {
  state = {
    guestbooks: [],
  };
  componentDidMount = async () => {
    let guestbooks = [...this.state.guestbooks];
    guestbooks = await getAllOtherGuest();
    this.setState({ guestbooks });
  };
  render() {
    const { guestbooks } = this.state;
    return (
      <div className="right-container">
        <div className="container3">
          <div className="big-container">
            {guestbooks.map((guest) => (
              <div className="box-guest">
                <div className="text">
                  <div className="before">
                    <div className="line"></div>
                  </div>
                  <div className="after">
                    <div className="line"></div>
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="content">{guest.userId.userName}</h5>
                  <div className="message-box">
                    <div className="message-content">
                      <div className="message-body">
                        <p>This my Wedding write to me remember You </p>
                      </div>
                      <p className="form-submit">
                        <Link
                          className="view-guest"
                          to={`/guestBook/${guest.userId.id}`}
                        >
                          Write For Me
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCard;
