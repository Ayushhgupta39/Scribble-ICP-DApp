import React from "react";
import { AiOutlineDelete } from "react-icons/ai"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-content">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-button" onClick={handleClick}><AiOutlineDelete /></button>
      </div>
    </div>
  );
}

export default Note;
