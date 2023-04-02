import React, { Fragment, useState } from "react";
import InventoryDetails from "./InventoryDetails";

function MyMoves(props) {
  let [showMoveDetails, setShowMoveDetails] = useState(false);
  let [id, setId] = useState("");

  return (
    <Fragment>
      <div class="main">
        <div class="row mt-3">
          <div class="col-sm-4">
            <b>From</b>
            <br />
            {props.data.moving_from}
          </div>
          <div class="col-sm-2">
            <span class="fa fa-arrow-right"></span>
          </div>
          <div class="col-sm-4">
            <b>To</b>
            <br />
            {props.data.moving_to}
          </div>

          <div class="col-sm-2">
            <b>Request</b>
            <br />
            {props.data.estimate_id}
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-sm-1">
            <i class="fa fa-home"></i>
            {props.data.property_size}
          </div>
          <div class="col-sm-1">
            <i class="fa fa-building"></i>32
          </div>
          <div class="col-sm-1">
            <i class="fa fa-map"></i>
            {props.data.distance}
          </div>
          <div class="col-sm-2">
            <i class="fa fa-calendar"></i>
            {props.data.moving_on}
          </div>
          <div class="col-sm-2">
            <input type="checkbox" /> is flexible
          </div>
          <div class="col-sm-3">
            <button
              class="move-details"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails(!showMoveDetails);
                setId(props.data.estimate_id);
              }}
            >
              View move details
            </button>
          </div>
          <div class="col-sm-2">
            <button class="quotes">Quotes awaiting</button>
          </div>
        </div>

        <div class="row mt-2 mb-3">
          <div class="col-sm-12">
            <i class="fa fa-warning"></i> <b>Disclaimer</b> : Please update your
            move date before two days of shifting
          </div>
        </div>
      </div>
      {showMoveDetails === true ? (
        props.data.estimate_id === id ? (
          <InventoryDetails data={props.data} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default MyMoves;
