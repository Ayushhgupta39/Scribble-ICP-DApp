import React, { useEffect, useState } from "react";
import { scribbleNotes_backend } from "../../../declarations/scribbleNotes_backend";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      scribbleNotes_backend.createNote(newNote.title, newNote.content);
      return [...prevNotes, newNote];
    });
  }

  useEffect(() => {
    console.log("UseEffect is triggered");
    fetchData();
  }, [])

  const fetchData = async () => {
    const notesArray = await scribbleNotes_backend.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    scribbleNotes_backend.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
          key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
