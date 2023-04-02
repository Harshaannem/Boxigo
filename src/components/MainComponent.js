import React, { Component, Fragment } from "react";
import { db } from "../db/db.js";
import MyMoves from "./MyMoves.js";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = { db: db, showMoveDetails: false, id: null, inventory: "" };
    // this.toggleMoveDetails = this.toggleMoveDetails.bind(this);
  }
  toggleMoveDetails(e) {
    e.preventDefault();

    this.setState({
      showMoveDetails: !this.state.showMoveDetails,
    });
    console.log("hello" + this.state.id);
  }

  render() {
    return (
      <Fragment>
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-sm-3 side-bar">
              <div class="row mt-5">
                <span class="fa fa-truck"></span> MY MOVES
              </div>

              <div class="row mt-2">
                <span class="fa fa-user"></span>MY PROFILE
              </div>
              <div class="row mt-2">
                <span class="fa fa-clipboard"></span>GET QUOTE
              </div>
              <div class="row mt-2">
                <span class="fa fa-sign-out">LOGOUT</span>
              </div>
            </div>
            {/* Main Area */}
            <div class="col-12 col-sm-9">
              <div class="row mt-3">
                <h4>
                  <b>My Moves</b>
                </h4>
              </div>
              {this.state.db.Customer_Estimate_Flow.map((data) => {
                return (
                  <MyMoves
                    key={data.estimate_id}
                    data={data}
                    showMoveDetails={this.state.showMoveDetails}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainComponent;
