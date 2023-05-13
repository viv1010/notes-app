import React, { useState, useEffect } from "react";
import NotesContainer from "./Components/NotesContainer/NotesContainer";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";

const App = () => {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes-app'))||[]);

const addNote = (color) => {
  const newNote = {
    id: Date.now() + '' + Math.floor(Math.random()*78),
    text:'',
    time:Date.now(),
    color,
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = [...notes];
  const index = newNotes.findIndex(item => item.id===id)
  if (index<0) return

  newNotes.splice(index,1);
  setNotes(newNotes);
}

const updateText = (text,id) => {
  const newNotes = [...notes];
  const index = newNotes.findIndex(item => item.id===id)
  if (index<0) return

  newNotes[index].text = text;
  setNotes(newNotes);
}

useEffect(() => {
  localStorage.setItem('notes-app',JSON.stringify(notes))
},[notes])

  return (
    <div className="App">
      <SideBar addNote={addNote}/>
      <NotesContainer notes={notes} deleteNote={deleteNote} updateText={updateText}/>
    </div>
  );
};

export default App;