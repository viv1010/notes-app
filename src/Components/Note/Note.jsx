import React from "react";
import "./Note.css";

let timer = 500,
  timeout;

const Note = (props) => {
    const formatDate = (value) => {
        if (!value) return "";
    
        const date = new Date(value);
        const monthNames = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        let hrs = date.getHours();
        let amPm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = hrs-12) : hrs;
    
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
    
        let day = date.getDate();
        const month = monthNames[date.getMonth()];
    
        return `${hrs}:${min} ${amPm} ${day} ${month}`;
      };

      const debounce = (func)=> {
        clearTimeout(timeout)
        timeout=setTimeout(func,timer);
      } 

      const updateText = (text,id) => {
        debounce(() => props.updateText(text,id))
      }

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        name="note"
        defaultValue={props.note.text}
        className="note_text"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => updateText(e.target.value,props.note.id)}
      ></textarea>
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src="./assets/delete.svg"
          alt=""
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
