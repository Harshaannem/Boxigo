import React, { Fragment, useState } from "react";
import LivingRoom from "./LivingRoom";


function InventoryDetails(props) {
  {console.log(props.data.items.inventory[0].category.length,"propssss")}
  let [showMoveDetails1, setShowMoveDetails1] = useState(false);
  let [showMoveDetails2, setShowMoveDetails2] = useState(false);
  let [showMoveDetails3, setShowMoveDetails3] = useState(false);
  let [showMoveDetails4, setShowMoveDetails4] = useState(false);
  let [showMoveDetails5, setShowMoveDetails5] = useState(false);
  let [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div class="row">
        <h5>Inventory Details</h5>
        <button class="edit-inventory">Edit Inventory</button>
      </div>
      <div class="row mt-4 inventory justify-content-between">
        <span>

<<<<<<< HEAD
        Furniture <span class="bg-danger rounded-0 text-white border">{props.data.items.inventory[0].category.length}</span>
     
        </span>
      <div 
              class="move-details bg-transparent border-white"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails1(!showMoveDetails1);
                setId(props.data.estimate_id);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>  
            </div> 
      </div>
      {showMoveDetails1 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}

     
      <div class="row mt-1 inventory justify-content-between"><span>
          Electronics <span class="bg-danger rounded-0 text-white border">{props.data.items.inventory[1].category.length}</span>
        
        </span>
      <div 
              class="move-details bg-transparent border-white"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails2(!showMoveDetails2);
                setId(props.data.estimate_id);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>  
            </div> </div>
            {showMoveDetails2 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      
      <div class="row mt-1 inventory justify-content-between">
        <span>

      Vehicle <span class="bg-danger rounded-0 text-white border">{props.data.items.inventory[2].category.length}</span>
        </span>
      
        
      <div 
              class="move-details bg-transparent border-white"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails3(!showMoveDetails3);
                setId(props.data.estimate_id);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>  
            </div> </div>
            {showMoveDetails3 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
        
      <div class="row mt-1 inventory justify-content-between"><span>
        boxes_trolley <span class="bg-danger rounded-0 text-white border">{props.data.items.inventory[3].category.length}</span>
        </span>
   
      <div 
              class="move-details bg-transparent border-white"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails4(!showMoveDetails4);
                setId(props.data.estimate_id);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>  
            </div> </div>
            {showMoveDetails4 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      <div class="row mt-1 inventory justify-content-between"><span>
        custom items <span class="bg-danger rounded-0 text-white border">{props.data.items.inventory[4].category.length}</span>
        </span>
      <div 
              class="move-details bg-transparent border-white"
              id={props.data.estimate_id}
              onClick={(e) => {
                e.preventDefault();
                setShowMoveDetails5(!showMoveDetails5);
                setId(props.data.estimate_id);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>  
            </div> </div>
            {showMoveDetails5 === true ? (
        props.data.estimate_id === id ? (
          <LivingRoom data={props.data.item} />
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
=======
      <LivingRoom data={props.data.item} />
      <div class="row mt-1 inventory">Bedrooms</div>
      <div class="row mt-1 inventory">Kitchen</div>
      <div class="row mt-1 inventory">Bathroom</div>
>>>>>>> d7353691076a06f6b25953045bfb8337c0f8ac2f

      <div class="row mt-4">
        <h5>House Details</h5>
        <button class="edit-house">Edit house details</button>
      </div>
      <div class="row mt-4 mb-3">
        <h6>Existing House Details</h6>
      </div>
      <div class="row">
        <div class="col-sm-3">Floor No.</div>
        <div class="col-sm-3">Elevator Available</div>
        <div class="col-sm-3">Packing Required</div>
        <div class="col-sm-3">Distance from truck to door</div>
      </div>
      <div class="row">
        <div class="col-sm-3">{props.data.old_floor_no}</div>
        <div class="col-sm-3">{props.data.old_elevator_availability}</div>
        <div class="col-sm-3">{props.data.packing_service}</div>
        <div class="col-sm-3">{props.data.old_parking_distance}</div>
      </div>
      <div class="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div class="row mt-1">No additional info</div>
      <div class="row mt-3 additional"></div>

      <div class="row mt-4 mb-3">
        <h6>New House Details</h6>
      </div>
      <div class="row">
        <div class="col-sm-3">Floor No.</div>
        <div class="col-sm-3">Elevator Available</div>
        <div class="col-sm-3">Packing Required</div>
        <div class="col-sm-3">Distance from truck to door</div>
      </div>
      <div class="row">
        <div class="col-sm-3">{props.data.new_floor_no}</div>
        <div class="col-sm-3">{props.data.new_elevator_availability}</div>
        <div class="col-sm-3">{props.data.unpacking_service}</div>
        <div class="col-sm-3">{props.data.new_parking_distance}</div>
      </div>
      <div class="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div class="row mt-1">No additional info</div>
      <div class="row mt-3 additional"></div>
    </Fragment>
  );
}

export default InventoryDetails;
