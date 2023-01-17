import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/index.js";

function AddNotePage(){
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
       addNote(note);
      navigate('/');
    }
   
    return (
      <section>
        <NoteInput addNote={onAddNoteHandler} />
      </section>
    )
}


export default AddNotePage;
