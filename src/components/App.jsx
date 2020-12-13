import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes,setNotes] = useState([{
    title:"This is A Sample Note",
    content:"Start adding notes by clicking on add."
  }
]);
  
  function addNote(note){
   
    setNotes((previousVals)=>{
      const newNotes = [...previousVals,note];
      return newNotes;
     });
  }

  function deleteNote(id){
    setNotes((prev) => {
      return prev.filter((note,index)=>{
          return index !== id
        });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea key="userNote" onAdd={addNote} />
     {    notes.map((note,index)=>{
        return <Note key={index} id={index} onClick={deleteNote}  title={note.title} content= {note.content} />})
     }
      <Footer />
    </div>
  );
}

export default App;