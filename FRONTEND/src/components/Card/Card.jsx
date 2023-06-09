import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
const Card = ({ item, setId, setDelete, setUpdate }) => {

  return (
    <div className="Card">
      <div className="titleSection">
          <h2 className="taskTitle">{item.todo}</h2>
        <h4 className="priority">{item.priority}</h4>
        <div className="editControls">
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => {
              setId(item.ID);
              setUpdate(true);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              setId(item.ID);
              setDelete(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
