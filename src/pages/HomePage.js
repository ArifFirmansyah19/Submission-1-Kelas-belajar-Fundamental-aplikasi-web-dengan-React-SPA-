import React from "react";
import {  deleteNote, getNotes } from "../utils/index.js";
import NoteList from "../components/NoteList.js";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }


    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(()=>{
            return{
                notes:getNotes()
            }
        });
    }

    render(){
        return(
            <div className="notes-app">
                <NoteList notes = { this.state.notes } onDelete = { this.onDeleteHandler } />
            </div>
        )
    }
}


export default HomePage;